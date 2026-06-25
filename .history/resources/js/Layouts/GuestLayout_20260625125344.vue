<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0"
        style="background-color: var(--color-bg-primary);"
    >
        <!-- Background Decorations (optional) -->
        <div style="position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0;">
            <div
                style="
                    position: absolute;
                    top: 5rem;
                    right: 5rem;
                    width: 18rem;
                    height: 18rem;
                    border-radius: 9999px;
                    background: rgba(56, 189, 248, 0.1);
                    filter: blur(40px);
                "
            ></div>
            <div
                style="
                    position: absolute;
                    bottom: 5rem;
                    left: 5rem;
                    width: 18rem;
                    height: 18rem;
                    border-radius: 9999px;
                    background: rgba(37, 99, 235, 0.1);
                    filter: blur(40px);
                "
            ></div>
        </div>

        <div style="position: relative; z-index: 10;">
            <Link href="/">
                <ApplicationLogo 
                    class="h-20 w-20 fill-current" 
                    style="color: var(--color-accent);"
                />
            </Link>
        </div>

        <div
            class="mt-6 w-full overflow-hidden px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg"
            style="
                background: var(--glass-background);
                border: var(--glass-border);
                box-shadow: var(--glass-shadow);
                backdrop-filter: var(--glass-backdrop-filter);
            "
        >
            <slot />
        </div>
    </div>
</template>