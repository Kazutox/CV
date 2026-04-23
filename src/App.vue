<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PageIndicator from './components/PageIndicator.vue'
import PrintResume from './components/PrintResume.vue'
import CompactStatsRow from './components/CompactStatsRow.vue'
import KeyAchievements from './components/KeyAchievements.vue'
import ProfessionalSummary from './components/ProfessionalSummary.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import data from './assets/data.json'
import type { CvData } from './types/cv'

const cvData = data as CvData
</script>

<template>
  <div class="site-shell">
    <div class="screen-resume">
      <SiteHeader :data="cvData.introduction" />
      <PageIndicator />
      <HeroSection :introduction="cvData.introduction" :stats="cvData.stats" />

      <main class="page-content">
        <CompactStatsRow :stats="cvData.stats" />
        <KeyAchievements :data="cvData.keyAchievements" />
        <ProfessionalSummary :data="cvData.professionalSummary" />
        <Experience :data="cvData.experience" />
        <Skills :data="cvData.skills" />
      </main>
    </div>

    <PrintResume :data="cvData" />
  </div>
</template>

<style scoped>
</style>
