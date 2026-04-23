<script setup lang="ts">
import type { CvData } from '../types/cv'

const props = defineProps<{
  data: CvData
}>()

const featuredExperience = props.data.experience.map((item) => ({
  ...item,
  highlights: item.highlights.slice(0, 3)
}))
</script>

<template>
  <article class="print-resume" aria-label="Printable CV">
    <header class="print-resume__header">
      <div>
        <p class="print-resume__eyebrow">{{ data.introduction.title }}</p>
        <h1>{{ data.introduction.name }}</h1>
        <p>{{ data.professionalSummary.content }}</p>
      </div>

      <dl class="print-resume__contact">
        <div>
          <dt>Location</dt>
          <dd>{{ data.introduction.contact.location }}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{{ data.introduction.contact.email }}</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{{ data.introduction.contact.phone }}</dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd>{{ data.introduction.contact.linkedin.display }}</dd>
        </div>
      </dl>
    </header>

    <section class="print-resume__section print-resume__overview" aria-label="Profile overview">
      <div class="print-resume__stats">
        <div v-for="stat in data.stats" :key="stat.label">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>

      <div class="print-resume__achievements">
        <h2>Selected Impact</h2>
        <ul>
          <li v-for="achievement in data.keyAchievements.items" :key="achievement.title">
            <strong>{{ achievement.metric }} {{ achievement.title }}</strong>
            <span>{{ achievement.description }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="print-resume__section print-resume__experience" aria-label="Professional experience">
      <h2>Professional Experience</h2>

      <article
        v-for="item in featuredExperience"
        :key="`${item.company}-${item.duration}`"
        class="print-resume__job"
      >
        <header>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.company }} · {{ item.location }}</p>
          </div>
          <span>{{ item.duration }}</span>
        </header>

        <p>{{ item.description }}</p>

        <ul>
          <li v-for="highlight in item.highlights" :key="highlight.description">
            <strong v-if="highlight.title">{{ highlight.title }}: </strong>{{ highlight.description }}
          </li>
        </ul>

        <div class="print-resume__tags">
          <span v-for="technology in item.technologies" :key="technology">{{ technology }}</span>
        </div>
      </article>
    </section>

    <section class="print-resume__section print-resume__skills" aria-label="Technical skills">
      <h2>Technical Skills</h2>

      <div class="print-resume__skill-grid">
        <div v-for="category in data.skills.categories" :key="category.name">
          <h3>{{ category.name }}</h3>
          <p>{{ category.skills.join(' · ') }}</p>
        </div>
      </div>
    </section>
  </article>
</template>
