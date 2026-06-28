<script setup>
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    title: {
        type: String,
        default: 'Portfolio',
    },
});
</script>

<template>
    <div class="min-h-screen bg-slate-950 text-slate-100">
        <Head :title="props.title" />

        <main class="mx-auto w-full">
            <slot />
        </main>
    </div>
</template>
