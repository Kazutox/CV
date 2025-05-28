<script setup lang="ts">
const props = defineProps<{
    data: {
        title: string;
        categories: Array<{
            name: string;
            skills: string[];
        }>;
    };
}>();
</script>

<template>
    <section class="section">
        <h2 class="section-title">{{ props.data.title }}</h2>
        <div class="skills-grid">
            <div v-for="(category, index) in props.data.categories" :key="index" class="skill-category">
                <h3>{{ category.name }}</h3>
                <div class="skill-tags">
                    <span v-for="(skill, skillIndex) in category.skills" :key="skillIndex" class="skill-tag">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>