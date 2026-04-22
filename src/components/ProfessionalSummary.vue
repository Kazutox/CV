<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import type { ProfessionalSummaryData } from '../types/cv'

const props = defineProps<{
  data: ProfessionalSummaryData
}>()
</script>

<template>
  <section id="about" class="section-shell summary-section reveal-section">
    <SectionTitle :title="props.data.title" />

    <div class="summary-section__grid">
      <div class="summary-section__copy">
        <p>{{ props.data.content }}</p>

        <div class="pill-row" aria-label="Professional attributes">
          <span v-for="attribute in props.data.attributes" :key="attribute" class="pill">
            {{ attribute }}
          </span>
        </div>
      </div>

      <div class="summary-section__metrics" aria-label="Capability metrics">
        <div v-for="metric in props.data.progress" :key="metric.label" class="progress-metric">
          <div>
            <span>{{ metric.label }}</span>
            <strong>{{ metric.value }}%</strong>
          </div>
          <span class="progress-metric__track">
            <i :style="{ width: `${metric.value}%` }"></i>
          </span>
        </div>
      </div>

      <div class="summary-section__illustration" aria-hidden="true">
        <span class="summary-section__dot-field"></span>
        <span v-for="layer in 4" :key="layer" class="summary-section__layer"></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
