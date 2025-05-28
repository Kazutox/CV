<script setup lang="ts">
const props = defineProps<{
    data: {
        name: string;
        title: string;
        lastUpdated: string;
        profileImage: string;
        contact: {
            location: string;
            email: string;
            phone: string;
            linkedin: string;
            website: string;
        };
    };
}>();
</script>

<template>
    <div class="header-content">
        <img :src="props.data.profileImage" :alt="props.data.name" class="profile-image">
        <h1 class="name">{{ props.data.name }}</h1>
        <p class="title">{{ props.data.title }}</p>
        <p class="last-updated">Last updated: {{ props.data.lastUpdated }}</p>
        <div class="contact-info">
            <div class="contact-item">
                <span>📍</span>
                <span>{{ props.data.contact.location }}</span>
            </div>
            <div class="contact-item">
                <span>✉️</span>
                <a :href="'mailto:' + props.data.contact.email" class="contact-link">{{ props.data.contact.email }}</a>
            </div>
            <div class="contact-item">
                <span>📱</span>
                <a :href="'tel:' + props.data.contact.phone.replace(/\s/g, '')" class="contact-link">{{ props.data.contact.phone }}</a>
            </div>
            <div class="contact-item">
                <span>🔗</span>
                <a :href="'https://' + props.data.contact.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link">{{ props.data.contact.linkedin }}</a>
            </div>
            <div class="contact-item">
                <span>🌐</span>
                <a :href="'https://' + props.data.contact.website" target="_blank" rel="noopener noreferrer" class="contact-link">{{ props.data.contact.website }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>