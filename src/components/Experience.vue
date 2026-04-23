<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import type { ExperienceItem } from '../types/cv'

const props = defineProps<{
  data: ExperienceItem[]
}>()

function markerLabel(company: string) {
  return company.charAt(0).toUpperCase()
}

function yearRange(duration: string) {
  const matches = duration.match(/\d{4}/g)
  if (!matches?.length) {
    return duration
  }

  const first = matches[0]
  const last = matches[matches.length - 1]
  return first === last ? first : `${first} - ${last}`
}
</script>

<template>
  <section id="experience" class="experience-section reveal-section">
    <SectionTitle title="Professional Experience" />

    <div class="experience-section__layout">
      <div class="experience-timeline">
        <article v-for="job in props.data" :key="`${job.company}-${job.duration}`" class="experience-card">
          <div class="experience-card__time">
            <span class="experience-card__marker" aria-hidden="true"></span>
            <span class="experience-card__year">{{ yearRange(job.duration) }}</span>
          </div>

          <div class="experience-card__content">
            <div class="experience-card__header">
              <div class="experience-card__logo" aria-hidden="true">
                {{ markerLabel(job.company) }}
              </div>
              <div>
                <h3>{{ job.title }}</h3>
                <p>{{ job.company }} · {{ job.location }}</p>
              </div>
              <span>
                {{ job.duration }}
                <strong v-if="job.isCurrent">Current</strong>
              </span>
            </div>

            <p class="experience-card__description">{{ job.description }}</p>

            <ul>
              <li v-for="highlight in job.highlights.slice(0, 3)" :key="highlight.description">
                <strong v-if="highlight.title">{{ highlight.title }}: </strong>{{ highlight.description }}
              </li>
            </ul>

            <div class="tag-list" aria-label="Technologies">
              <span v-for="technology in job.technologies" :key="technology">
                {{ technology }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
