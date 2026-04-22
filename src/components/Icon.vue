<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    size?: number | string
    title?: string
  }>(),
  {
    size: 20,
    title: ''
  }
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="icon" />
  </svg>
</template>
