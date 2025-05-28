<script setup lang="ts">
import Introduction from './components/Introduction.vue'
import KeyAchievements from './components/KeyAchievements.vue'
import ProfessionalSummary from './components/ProfessionalSummary.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import data from './assets/data.json'
</script>

<template>
  <div class="cv-container">
    <header class="header">
      <Introduction :data="data.introduction" />
    </header>

    <main class="content">
      <KeyAchievements :data="data.keyAchievements" />
      <ProfessionalSummary :data="data.professionalSummary" />
      <Experience :data="data.experience" />
      <Skills :data="data.skills" />
    </main>
  </div>
</template>

<style scoped>
</style>