<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const sections = [
  { label: '01', targetId: 'top' },
  { label: '02', targetId: 'achievements' },
  { label: '03', targetId: 'experience' },
  { label: '04', targetId: 'skills' }
] as const

const activeId = ref<string>(sections[0].targetId)
let sectionElements: HTMLElement[] = []
let isTicking = false

const activeIndex = computed(() => {
  const index = sections.findIndex((section) => section.targetId === activeId.value)
  return Math.max(index, 0)
})

function updateActiveSection() {
  const isAtPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2

  if (isAtPageBottom) {
    activeId.value = sections[sections.length - 1].targetId
    isTicking = false
    return
  }

  const sampleY = window.scrollY + Math.min(window.innerHeight * 0.42, 420)
  let nextActiveId: string = sections[0].targetId

  for (const element of sectionElements) {
    const sectionTop = element.getBoundingClientRect().top + window.scrollY

    if (sectionTop <= sampleY) {
      nextActiveId = element.id
    }
  }

  activeId.value = nextActiveId
  isTicking = false
}

function requestActiveSectionUpdate() {
  if (isTicking) {
    return
  }

  isTicking = true
  window.requestAnimationFrame(updateActiveSection)
}

onMounted(() => {
  sectionElements = sections
    .map((section) => document.getElementById(section.targetId))
    .filter((element): element is HTMLElement => Boolean(element))

  updateActiveSection()
  window.addEventListener('scroll', requestActiveSectionUpdate, { passive: true })
  window.addEventListener('resize', requestActiveSectionUpdate)
  window.addEventListener('hashchange', requestActiveSectionUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestActiveSectionUpdate)
  window.removeEventListener('resize', requestActiveSectionUpdate)
  window.removeEventListener('hashchange', requestActiveSectionUpdate)
})
</script>

<template>
  <nav
    class="page-indicator"
    aria-label="Page sections"
    :style="{ '--active-index': activeIndex }"
  >
    <i class="page-indicator__progress" aria-hidden="true"></i>
    <a
      v-for="section in sections"
      :key="section.targetId"
      :href="`#${section.targetId}`"
      :class="{ 'is-active': activeId === section.targetId }"
      :aria-current="activeId === section.targetId ? 'location' : undefined"
    >
      {{ section.label }}
    </a>
  </nav>
</template>
