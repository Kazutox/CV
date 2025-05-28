<script setup lang="ts">
const props = defineProps<{
  data: Array<{
    company: string;
    title: string;
    duration: string;
    isCurrent: boolean;
    description: string;
    highlights: Array<{
      title?: string;
      description: string;
    }>;
  }>;
}>();
</script>

<template>
  <section class="section">
    <h2 class="section-title">Professional Experience</h2>
    
    <div v-for="(job, index) in props.data" :key="index" class="experience-item">
      <div class="job-header">
        <div class="job-info">
          <h3 class="job-title">{{ job.title }}</h3>
          <p class="company">{{ job.company }}</p>
        </div>
        <div class="job-duration">
          <span class="duration">
            {{ job.duration }}
            <span v-if="job.isCurrent" class="current-badge">Current</span>
          </span>
        </div>
      </div>
      
      <div class="job-description">
        <p>{{ job.description }}</p>
        <ul>
          <li v-for="(highlight, hIndex) in job.highlights" :key="hIndex">
            <template v-if="highlight.title">
              <strong>{{ highlight.title }}:</strong> {{ highlight.description }}
            </template>
            <template v-else>
              {{ highlight.description }}
            </template>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>