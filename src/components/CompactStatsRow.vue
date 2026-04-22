<script setup lang="ts">
import { mdiCalendarBlankOutline, mdiCodeTags, mdiRocketLaunchOutline } from '@mdi/js'
import Icon from './Icon.vue'
import type { StatItem } from '../types/cv'

defineProps<{
  stats: StatItem[]
}>()

const iconMap = {
  calendar: mdiCalendarBlankOutline,
  projects: mdiRocketLaunchOutline,
  code: mdiCodeTags
} satisfies Record<StatItem['icon'], string>
</script>

<template>
  <section class="compact-stats" aria-label="Summary statistics">
    <div v-for="stat in stats" :key="stat.label" class="compact-stats__item">
      <span class="compact-stats__icon">
        <Icon :icon="iconMap[stat.icon]" :size="26" />
      </span>
      <div>
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>
