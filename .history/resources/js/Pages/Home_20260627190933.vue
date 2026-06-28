<script setup>
import PublicLayout from "@/Layouts/PublicLayout.vue";
import Hero from "@/Components/Sections/Hero.vue";
import Skills from "@/Components/Sections/Skills.vue";
import Projects from "@/Components/Sections/Projects.vue";
import Services from "@/Components/Sections/Services.vue";
</script>

<template>
    <PublicLayout title="Ali - Portfolio">
        <div
            class="relative overflow-hidden"
            style="
                background: linear-gradient(
                    180deg,
                    rgba(2, 6, 23, 0.98) 0%,
                    rgba(15, 23, 42, 0.98) 100%
                );
            "
        >
            <!-- Hero + About Section -->
            <Hero />

            <!-- Skills Section -->
            <Skills />

            <!-- Projects Section -->
            <Projects />

            <!-- Services Section -->
            <Services />

            <!-- Placeholder untuk sections lain -->
            <!-- <Contact /> -->
            <!-- <Footer /> -->
        </div>
    </PublicLayout>
</template>

<style scoped></style>
