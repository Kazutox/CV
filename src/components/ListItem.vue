<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{
  icon: string;
  data: {
    company: string;
    duration: string;
    title: string;
    description: string;
  };
}>();
</script>

<template>
  <div class="item flex flex-row flex-start items-start">
    <i class="flex flex-col items-center justify-center p-2">
      <Icon :icon="icon" />
      <span class="text-sm">{{ data.company }}</span>
      <span class="text-sm">{{ data.duration }}</span>
    </i>
    <div class="details">
      <h3>{{ data.title }}</h3>
      <p class="whitespace-pre-wrap">{{ data.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 4rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 200px;
  height: 100px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    left: 0px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 200px;
    height: 100px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 100px;
    bottom: calc(0% + 50px);
    height: calc(100% - 50px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 100px;
    top: calc(0% + 105px);
    height: calc(100% - 50px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
