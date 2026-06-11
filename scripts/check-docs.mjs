/* global console, process, URL */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, extname, join, normalize, resolve } from 'node:path'

const repoRoot = resolve(new URL('..', import.meta.url).pathname)

const requiredPaths = [
  'AGENTS.md',
  'ARCHITECTURE.md',
  'docs/DESIGN.md',
  'docs/FRONTEND.md',
  'docs/PLANS.md',
  'docs/PRODUCT_SENSE.md',
  'docs/QUALITY_SCORE.md',
  'docs/RELIABILITY.md',
  'docs/SECURITY.md',
  'docs/design-docs/index.md',
  'docs/design-docs/core-beliefs.md',
  'docs/design-docs/visual-system.md',
  'docs/product-specs/index.md',
  'docs/product-specs/cv-site.md',
  'docs/exec-plans/tech-debt-tracker.md',
  'docs/generated/asset-inventory.md'
]

const ignoredDirs = new Set(['.git', 'dist', 'node_modules'])
const failures = []

for (const path of requiredPaths) {
  if (!existsSync(join(repoRoot, path))) {
    failures.push(`Missing required documentation path: ${path}`)
  }
}

function walkMarkdown(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        files.push(...walkMarkdown(join(dir, entry.name)))
      }
      continue
    }

    if (entry.isFile() && extname(entry.name) === '.md') {
      files.push(join(dir, entry.name))
    }
  }

  return files
}

function stripAnchor(linkTarget) {
  return linkTarget.split('#')[0]
}

function isExternalOrSpecial(linkTarget) {
  return /^(https?:|mailto:|tel:|#)/.test(linkTarget)
}

for (const file of walkMarkdown(repoRoot)) {
  const text = readFileSync(file, 'utf8')
  const linkPattern = /(?<!!)\[[^\]]+\]\(([^)]+)\)/g
  let match

  while ((match = linkPattern.exec(text)) !== null) {
    const rawTarget = match[1].trim()
    if (!rawTarget || isExternalOrSpecial(rawTarget)) {
      continue
    }

    const targetWithoutAnchor = stripAnchor(rawTarget)
    if (!targetWithoutAnchor) {
      continue
    }

    const decodedTarget = decodeURIComponent(targetWithoutAnchor)
    const absoluteTarget = normalize(resolve(dirname(file), decodedTarget))

    if (!absoluteTarget.startsWith(repoRoot)) {
      failures.push(`${file}: link escapes repository: ${rawTarget}`)
      continue
    }

    if (!existsSync(absoluteTarget)) {
      failures.push(`${file}: broken markdown link: ${rawTarget}`)
      continue
    }

    if (!statSync(absoluteTarget).isFile() && !statSync(absoluteTarget).isDirectory()) {
      failures.push(`${file}: link target is not a file or directory: ${rawTarget}`)
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Docs check passed for ${requiredPaths.length} required paths.`)
