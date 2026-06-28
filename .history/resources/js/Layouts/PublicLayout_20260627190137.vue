<script setup>
import { Head } from '@inertiajs/vue3';
import Navbar from '@/Components/Navbar.vue';

defineProps({
    title: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <Head :title="title || 'Portfolio'" />
    <div class="min-h-screen" style="background-color: var(--color-bg-primary);">
        <!-- Navbar -->
        <Navbar />

        <!-- Page Content -->
        <main style="color: var(--color-text-primary);">
            <slot />
        </main>
    </div>
</template>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}
</style>