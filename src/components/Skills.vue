<script setup lang="ts">
import {
  mdiChevronDown,
  mdiCloudOutline,
  mdiCodeTags,
  mdiDatabaseOutline,
  mdiMonitorCellphone,
  mdiTools
} from '@mdi/js'
import Icon from './Icon.vue'
import SectionTitle from './SectionTitle.vue'
import type { SkillCategory, SkillsData } from '../types/cv'

const props = defineProps<{
  data: SkillsData
}>()

const iconMap = {
  languages: mdiCodeTags,
  frontend: mdiMonitorCellphone,
  backend: mdiDatabaseOutline,
  cloud: mdiCloudOutline,
  tools: mdiTools
} satisfies Record<SkillCategory['icon'], string>
</script>

<template>
  <section id="skills" class="section-shell skills-section reveal-section">
    <SectionTitle :title="props.data.title" />

    <div class="skill-list">
      <details
        v-for="(category, index) in props.data.categories"
        :key="category.name"
        class="skill-group"
        :open="index === 0"
      >
        <summary>
          <span class="skill-group__icon">
            <Icon :icon="iconMap[category.icon]" :size="24" />
          </span>
          <strong>{{ category.name }}</strong>
          <span class="skill-dots" aria-label="Skill rating">
            <i
              v-for="dot in 10"
              :key="dot"
              :class="{ 'is-filled': dot <= category.rating }"
            ></i>
          </span>
          <Icon class="skill-group__chevron" :icon="mdiChevronDown" :size="22" />
        </summary>

        <div class="tag-list tag-list--skills">
          <span v-for="skill in category.skills" :key="skill">
            {{ skill }}
          </span>
        </div>
      </details>
    </div>
  </section>
</template>

<style scoped>
</style>
