<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  mdiArrowTopRight,
  mdiEmailOutline,
  mdiGithub,
  mdiLinkedin,
  mdiMapMarkerOutline,
  mdiPhoneOutline
} from '@mdi/js'
import Icon from './Icon.vue'
import heroImage from '../assets/hero-background.webp'
import type { IntroductionData, StatItem } from '../types/cv'

const props = defineProps<{
  introduction: IntroductionData
  stats: StatItem[]
}>()

const heroStyle = {
  '--hero-image': `url(${heroImage})`
}

const telHref = `tel:${props.introduction.contact.phone.replace(/\s/g, '')}`
const emailHref = `mailto:${props.introduction.contact.email}`
const linkedinHref = `https://${props.introduction.contact.linkedin.url}`
const githubHref = props.introduction.contact.github.url
const isAtPageTop = ref(true)

function updatePageTopState() {
  isAtPageTop.value = window.scrollY <= 0
}

onMounted(() => {
  updatePageTopState()
  window.addEventListener('scroll', updatePageTopState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updatePageTopState)
})
</script>

<template>
  <section id="top" class="hero-section" :style="heroStyle">
    <div class="hero-section__content">
      <p class="hero-section__eyebrow">Hello, I'm</p>
      <h1>{{ introduction.name }}</h1>
      <div class="hero-section__role-row">
        <p>{{ introduction.title }}</p>
        <span>{{ stats[0]?.value }} Years Experience</span>
      </div>
      <p class="hero-section__intro">{{ introduction.heroIntro }}</p>

      <div class="hero-section__meta" id="contact" aria-label="Contact details">
        <span>
          <Icon :icon="mdiMapMarkerOutline" :size="16" />
          {{ introduction.contact.location }}
        </span>
        <a :href="emailHref" aria-label="Email Jc Cloete">
          <Icon :icon="mdiEmailOutline" :size="16" />
          {{ introduction.contact.email }}
        </a>
        <a :href="telHref" aria-label="Call Jc Cloete">
          <Icon :icon="mdiPhoneOutline" :size="16" />
          {{ introduction.contact.phone }}
        </a>
        <a
          :href="linkedinHref"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Jc Cloete on LinkedIn"
        >
          <Icon :icon="mdiLinkedin" :size="16" />
          {{ introduction.contact.linkedin.display }}
        </a>
        <a
          :href="githubHref"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Jc Cloete on GitHub"
        >
          <Icon :icon="mdiGithub" :size="16" />
          {{ introduction.contact.github.display }}
        </a>
      </div>

      <div class="hero-section__actions">
        <a class="button button--primary" href="#experience">
          <span>View My Work</span>
          <Icon :icon="mdiArrowTopRight" :size="17" />
        </a>
        <a class="button button--secondary" :href="emailHref">
          <span>Get In Touch</span>
          <Icon :icon="mdiArrowTopRight" :size="17" />
        </a>
      </div>
    </div>

    <div class="hero-section__availability" aria-label="Availability">
      <span aria-hidden="true" />
      {{ introduction.availability }}
    </div>

    <a
      class="hero-section__scroll"
      :class="{ 'is-visible': isAtPageTop }"
      href="#achievements"
      aria-label="Scroll to content"
    ></a>
  </section>
</template>
