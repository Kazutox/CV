<script setup lang="ts">
defineProps<{
  title: string
  actionLabel?: string
  actionHref?: string
}>()
</script>

<template>
  <div class="section-title">
    <div class="section-title__mark" aria-hidden="true">✦</div>
    <h2>{{ title }}</h2>
    <span aria-hidden="true"></span>
    <a v-if="actionLabel && actionHref" :href="actionHref">{{ actionLabel }}</a>
  </div>
</template>
