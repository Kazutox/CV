<script setup lang="ts">
const props = defineProps<{
    data: {
        title: string;
        items: Array<{
            category: string;
            description: string;
        }>;
    };
}>();
</script>

<template>
    <section class="section">
        <h2 class="section-title">{{ props.data.title }}</h2>
        <div class="summary">
            <template v-for="(item, index) in props.data.items" :key="index">
                <strong>{{ item.category }}:</strong> {{ item.description }}
                <br v-if="index < props.data.items.length - 1">
                <br v-if="index < props.data.items.length - 1">
            </template>
        </div>
    </section>
</template>

<style scoped>
</style>