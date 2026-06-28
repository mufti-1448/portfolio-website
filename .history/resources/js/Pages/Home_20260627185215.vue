<script setup>
import PublicLayout from '@/Layouts/PublicLayout.vue';
import Hero from '@/Components/Sections/Hero.vue';
import About from '@/Components/Sections/About.vue';
import Skills from '@/Components/Sections/Skills.vue';
import Projects from '@/Components/Sections/Projects.vue';
import Services from '@/Components/Sections/Services.vue';
</script>

<template>
    <PublicLayout title="Ali - Portfolio">
        <!-- Hero Section -->
        <Hero />

        <!-- About Section -->
        <About />

        <!-- Skills Section -->
        <Skills />

        <!-- Projects Section -->
        <Projects />

        <!-- Services Section -->
        <Services />

        <!-- Placeholder untuk sections lain -->
        <!-- <Contact /> -->
        <!-- <Footer /> -->
    </PublicLayout>
</template>

<style scoped>
</style>