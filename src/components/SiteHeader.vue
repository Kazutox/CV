<script setup lang="ts">
import { ref } from 'vue'
import { mdiClose, mdiDownload, mdiMenu } from '@mdi/js'
import Icon from './Icon.vue'
import type { IntroductionData } from '../types/cv'

defineProps<{
  data: IntroductionData
}>()

const isMenuOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
]

function printCv() {
  window.print()
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <a class="site-header__logo" href="#top" aria-label="Jc Cloete home">J · C</a>

    <nav class="site-header__nav" aria-label="Primary navigation">
      <a v-for="item in navItems" :key="item.href" :href="item.href">
        {{ item.label }}
      </a>
    </nav>

    <button class="site-header__download" type="button" @click="printCv">
      <span>Download CV</span>
      <Icon :icon="mdiDownload" :size="16" />
    </button>

    <button
      class="site-header__menu-button"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-navigation"
      aria-label="Toggle navigation"
      @click="isMenuOpen = !isMenuOpen"
    >
      <Icon :icon="isMenuOpen ? mdiClose : mdiMenu" :size="28" />
    </button>

    <Transition name="menu-fade">
      <nav
        v-if="isMenuOpen"
        id="mobile-navigation"
        class="site-header__mobile-nav"
        aria-label="Mobile navigation"
      >
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
          {{ item.label }}
        </a>
        <button type="button" @click="printCv">
          <span>Download CV</span>
          <Icon :icon="mdiDownload" :size="16" />
        </button>
      </nav>
    </Transition>
  </header>
</template>
