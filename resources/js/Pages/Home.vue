<script setup>
import PublicLayout from '@/Layouts/PublicLayout.vue';
import Hero from '@/Components/Sections/Hero.vue';
import About from '@/Components/Sections/About.vue';
import Skills from '@/Components/Sections/Skills.vue';
import Projects from '@/Components/Sections/Projects.vue';
import Services from '@/Components/Sections/Services.vue';
import Contact from '@/Components/Sections/Contact.vue';
import Footer from '@/Components/Sections/Footer.vue';
</script>

<template>
    <PublicLayout title="Ali - Portfolio">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
    </PublicLayout>
</template>

<style scoped>
</style>