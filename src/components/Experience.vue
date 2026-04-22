<script setup lang="ts">
import { computed } from 'vue'
import { mdiSchoolOutline } from '@mdi/js'
import Icon from './Icon.vue'
import SectionTitle from './SectionTitle.vue'
import type { ExperienceItem, StatItem } from '../types/cv'

const props = defineProps<{
  data: ExperienceItem[]
  stats: StatItem[]
}>()

const yearsStat = computed(() => props.stats.find((stat) => stat.label.includes('Years')))

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

      <aside class="experience-aside">
        <div class="experience-aside__chart">
          <strong>{{ yearsStat?.value ?? '8+' }}</strong>
          <span>Years of Experience</span>
          <svg viewBox="0 0 220 90" role="img" aria-label="Experience trend">
            <polyline
              points="0,72 35,62 70,65 105,52 140,38 175,46 220,18"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="220" cy="18" r="6" fill="currentColor" />
          </svg>
          <div>
            <span>2017</span>
            <span>2026</span>
          </div>
        </div>

        <div class="experience-aside__info">
          <Icon :icon="mdiSchoolOutline" :size="24" />
          <div>
            <span>Education</span>
            <strong>Partially completed BSc Computer Science</strong>
            <p>North-West University (NWU)</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
</style>
