import { spawn } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

/* global Buffer, URL, WebSocket, clearTimeout, console, fetch, process, setTimeout */

const root = path.resolve('output/responsive-comparisons')
const viewports = [
  ['ultrawide', 2560, 1440],
  ['large-desktop', 1920, 1080],
  ['laptop', 1366, 768],
  ['tablet', 834, 1112],
  ['big-mobile', 430, 932],
  ['mobile', 390, 844]
]

const mode = process.argv[2]

if (!['before', 'after', 'compare'].includes(mode)) {
  throw new Error('Usage: bun run scripts/capture-responsive-comparisons.mjs before|after|compare')
}

function chromePath() {
  return path.join(
    process.env.HOME,
    'Library/Caches/ms-playwright/chromium_headless_shell-1208/chrome-headless-shell-mac-arm64/chrome-headless-shell'
  )
}

async function startChrome() {
  const process = spawn(
    chromePath(),
    [
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      '--allow-file-access-from-files',
      '--remote-debugging-port=0',
      '--no-first-run',
      '--no-default-browser-check',
      'about:blank'
    ],
    { stdio: ['ignore', 'pipe', 'pipe'] }
  )

  let stderr = ''
  const wsUrl = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timed out waiting for Chrome')), 10000)

    process.stderr.on('data', (chunk) => {
      stderr += chunk.toString()
      const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/)

      if (match) {
        clearTimeout(timer)
        resolve(match[1])
      }
    })

    process.on('exit', (code) => {
      reject(new Error(`Chrome exited with code ${code}: ${stderr}`))
    })
  })

  return { process, port: new URL(wsUrl).port }
}

function createClient(socket) {
  let id = 0
  const pending = new Map()
  const listeners = new Map()

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data)

    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id)
      pending.delete(message.id)
      if (message.error) {
        reject(new Error(JSON.stringify(message.error)))
      } else {
        resolve(message.result)
      }
      return
    }

    if (message.method && listeners.has(message.method)) {
      for (const listener of listeners.get(message.method)) {
        listener(message.params)
      }
    }
  }

  return {
    send(method, params = {}) {
      const callId = ++id
      socket.send(JSON.stringify({ id: callId, method, params }))

      return new Promise((resolve, reject) => {
        pending.set(callId, { resolve, reject })
      })
    },
    once(method) {
      return new Promise((resolve) => {
        const listener = (params) => {
          listeners.set(
            method,
            (listeners.get(method) || []).filter((current) => current !== listener)
          )
          resolve(params)
        }

        listeners.set(method, [...(listeners.get(method) || []), listener])
      })
    }
  }
}

async function createTab(port) {
  const target = await (
    await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })
  ).json()
  const socket = new WebSocket(target.webSocketDebuggerUrl)

  await new Promise((resolve, reject) => {
    socket.onopen = resolve
    socket.onerror = reject
  })

  const client = createClient(socket)
  await client.send('Page.enable')
  await client.send('Runtime.enable')

  return { client, socket }
}

async function capturePage(client, filePath) {
  const dimensions = (
    await client.send('Runtime.evaluate', {
      expression: `(() => ({
        width: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, innerWidth),
        height: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, innerHeight),
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
      }))()`,
      returnByValue: true
    })
  ).result.value

  const screenshot = await client.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: 0,
      y: 0,
      width: dimensions.width,
      height: dimensions.height,
      scale: 1
    }
  })

  await writeFile(filePath, Buffer.from(screenshot.data, 'base64'))
  return dimensions
}

async function captureSite(port, phase) {
  const outputDir = path.join(root, phase)
  const results = []
  await mkdir(outputDir, { recursive: true })

  for (const [name, width, height] of viewports) {
    const { client, socket } = await createTab(port)
    await client.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width <= 620,
      screenWidth: width,
      screenHeight: height
    })

    const loaded = client.once('Page.loadEventFired')
    await client.send('Page.navigate', { url: 'http://127.0.0.1:5173/' })
    await loaded
    await new Promise((resolve) => setTimeout(resolve, 1400))
    await client.send('Runtime.evaluate', {
      expression: `(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
      })()`
    })

    const file = path.join(outputDir, `${name}.png`)
    const dimensions = await capturePage(client, file)
    socket.close()

    results.push({
      name,
      viewport: { width, height },
      page: dimensions,
      file: path.relative(process.cwd(), file)
    })
  }

  await writeFile(path.join(outputDir, 'metrics.json'), JSON.stringify(results, null, 2))
  return results
}

async function compare(port) {
  const comparisonDir = path.join(root, 'side-by-side')
  const htmlDir = path.join(root, 'html')
  const results = []
  await mkdir(comparisonDir, { recursive: true })
  await mkdir(htmlDir, { recursive: true })

  for (const [name, width, height] of viewports) {
    const beforePath = path.join(root, 'before', `${name}.png`)
    const afterPath = path.join(root, 'after', `${name}.png`)
    const beforeMetrics = JSON.parse(await readFile(path.join(root, 'before', 'metrics.json'), 'utf8'))
    const afterMetrics = JSON.parse(await readFile(path.join(root, 'after', 'metrics.json'), 'utf8'))
    const before = beforeMetrics.find((item) => item.name === name)
    const after = afterMetrics.find((item) => item.name === name)
    const pageWidth = before.page.width + after.page.width + 72
    const htmlPath = path.join(htmlDir, `${name}.html`)

    await writeFile(
      htmlPath,
      `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${name} responsive comparison</title>
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; background: #eef0f7; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
    .labels { position: sticky; top: 0; z-index: 2; display: grid; grid-template-columns: ${before.page.width}px ${after.page.width}px; gap: 24px; padding: 16px 24px; background: rgba(238, 240, 247, 0.94); border-bottom: 1px solid #d9ddeb; color: #131b3a; font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
    .wrap { display: grid; grid-template-columns: ${before.page.width}px ${after.page.width}px; gap: 24px; padding: 24px; align-items: start; }
    .panel { overflow: hidden; background: white; box-shadow: 0 8px 26px rgba(17, 24, 39, 0.14); }
    img { display: block; width: 100%; height: auto; }
  </style>
</head>
<body>
  <div class="labels"><span>Before - ${name} ${width}x${height}</span><span>After - ${name} ${width}x${height}</span></div>
  <div class="wrap">
    <div class="panel"><img src="${pathToFileURL(beforePath).href}" alt="Before ${name}"></div>
    <div class="panel"><img src="${pathToFileURL(afterPath).href}" alt="After ${name}"></div>
  </div>
</body>
</html>`
    )

    const { client, socket } = await createTab(port)
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: pageWidth,
      height: Math.min(Math.max(height, 900), 1440),
      deviceScaleFactor: 1,
      mobile: false,
      screenWidth: pageWidth,
      screenHeight: Math.min(Math.max(height, 900), 1440)
    })

    const loaded = client.once('Page.loadEventFired')
    await client.send('Page.navigate', { url: pathToFileURL(htmlPath).href })
    await loaded
    await new Promise((resolve) => setTimeout(resolve, 500))

    const file = path.join(comparisonDir, `${name}.png`)
    const dimensions = await capturePage(client, file)
    socket.close()

    results.push({
      name,
      viewport: { width, height },
      page: dimensions,
      file: path.relative(process.cwd(), file)
    })
  }

  await writeFile(path.join(comparisonDir, 'metrics.json'), JSON.stringify(results, null, 2))
  return results
}

const chrome = await startChrome()

try {
  const results = mode === 'compare' ? await compare(chrome.port) : await captureSite(chrome.port, mode)
  console.log(JSON.stringify(results, null, 2))
} finally {
  chrome.process.kill('SIGTERM')
}
