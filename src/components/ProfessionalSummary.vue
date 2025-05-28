<script setup lang="ts">
const props = defineProps<{
    data: {
        title: string;
        content: string;
    };
}>();
</script>

<template>
    <section class="section">
        <h2 class="section-title">{{ props.data.title }}</h2>
        <div class="summary" v-html="props.data.content"></div>
    </section>
</template>

<style scoped>
</style>