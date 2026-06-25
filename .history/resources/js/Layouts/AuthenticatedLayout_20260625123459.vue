<template>
    <div class="min-h-screen" style="background-color: var(--color-bg-primary)">
        <!-- Navbar -->
        <nav
            class="border-b"
            style="
                border-color: rgba(148, 163, 184, 0.1);
                background-color: var(--color-bg-secondary);
            "
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <Link
                            href="/"
                            class="text-2xl font-bold"
                            style="color: var(--color-accent)"
                        >
                            Portfolio
                        </Link>
                    </div>

                    <div class="flex items-center gap-4">
                        <!-- User Menu -->
                        <div class="relative">
                            <button
                                @click="isOpen = !isOpen"
                                style="color: var(--color-text-primary)"
                                class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                            >
                                {{ user.name }}
                                <svg
                                    class="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    />
                                </svg>
                            </button>

                            <!-- Dropdown -->
                            <div
                                v-if="isOpen"
                                class="absolute right-0 mt-2 w-48 rounded-lg"
                                style="
                                    background-color: var(--color-bg-secondary);
                                    border: var(--glass-border);
                                "
                            >
                                <Link
                                    href="/profile/edit"
                                    style="color: var(--color-text-primary)"
                                    class="block px-4 py-2 hover:text-accent transition"
                                >
                                    Profile
                                </Link>
                                <button
                                    @click="logout"
                                    style="color: var(--color-text-primary)"
                                    class="w-full text-left px-4 py-2 hover:text-accent transition"
                                >
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main
            style="
                background-color: var(--color-bg-primary);
                color: var(--color-text-primary);
            "
        >
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { useForm } from "@inertiajs/vue3";

const user = usePage().props.auth.user;
const isOpen = ref(false);

const form = useForm({});

const logout = () => {
    form.post(route("logout"));
};
</script>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}

.max-w-7xl {
    max-width: 80rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.flex {
    display: flex;
}

.justify-between {
    justify-content: space-between;
}

.items-center {
    align-items: center;
}

.h-16 {
    height: 4rem;
}

.border-b {
    border-bottom-width: 1px;
}

.text-2xl {
    font-size: 1.5rem;
}

.font-bold {
    font-weight: 700;
}

.gap-4 {
    gap: 1rem;
}

.gap-2 {
    gap: 0.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.transition {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

.w-4 {
    width: 1rem;
}

.h-4 {
    height: 1rem;
}

.absolute {
    position: absolute;
}

.right-0 {
    right: 0;
}

.mt-2 {
    margin-top: 0.5rem;
}

.w-48 {
    width: 12rem;
}

.block {
    display: block;
}

.w-full {
    width: 100%;
}

.text-left {
    text-align: left;
}
</style>
