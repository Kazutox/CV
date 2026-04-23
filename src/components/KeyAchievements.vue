<script setup lang="ts">
import {
  mdiAccountGroupOutline,
  mdiChartLine,
  mdiRocketLaunchOutline,
  mdiShieldCheckOutline
} from '@mdi/js'
import Icon from './Icon.vue'
import SectionTitle from './SectionTitle.vue'
import type { AchievementItem, KeyAchievementsData } from '../types/cv'

defineProps<{
  data: KeyAchievementsData
}>()

const iconMap = {
  violet: mdiRocketLaunchOutline,
  pink: mdiAccountGroupOutline,
  blue: mdiChartLine,
  orange: mdiShieldCheckOutline
} satisfies Record<AchievementItem['tone'], string>
</script>

<template>
  <section id="achievements" class="section-shell achievements-section reveal-section">
    <SectionTitle :title="data.title" action-label="Experience" action-href="#experience" />

    <div class="achievement-grid">
      <article
        v-for="item in data.items"
        :key="item.title"
        class="achievement-card"
        :class="`achievement-card--${item.tone}`"
      >
        <span class="achievement-card__icon">
          <Icon :icon="iconMap[item.tone]" :size="28" />
        </span>
        <strong>{{ item.metric }}</strong>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
</style>
