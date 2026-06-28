<script setup>
import { ref, computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

const isMobileMenuOpen = ref(false);
const currentLanguage = ref('id');

const user = computed(() => usePage().props.auth.user);

const navLinks = [
    { label: 'Home', href: '/', name: 'home' },
    { label: 'About', href: '/#about', name: 'about' },
    { label: 'Skills', href: '/#skills', name: 'skills' },
    { label: 'Projects', href: '/#projects', name: 'projects' },
    { label: 'Services', href: '/#services', name: 'services' },
    { label: 'Contact', href: '/#contact', name: 'contact' },
];

const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'id' ? 'en' : 'id';
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
    <nav
        class="border-b"
        style="
            border-color: rgba(148, 163, 184, 0.1);
            background-color: var(--color-bg-secondary);
        "
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 justify-between items-center">
                <!-- Logo -->
                <div class="flex shrink-0 items-center">
                    <Link href="/" class="flex items-center gap-2">
                        <span
                            class="text-2xl font-bold"
                            style="color: var(--color-accent);"
                        >
                            &lt;/&gt;
                        </span>
                        <span
                            class="text-lg font-semibold hidden sm:inline"
                            style="color: var(--color-text-primary);"
                        >
                            Ali
                        </span>
                    </Link>
                </div>

                <!-- Desktop Navigation Links -->
                <div
                    class="hidden md:flex items-center gap-8"
                >
                    <Link
                        v-for="link in navLinks"
                        :key="link.name"
                        :href="link.href"
                        class="text-sm font-medium transition-colors duration-200"
                        style="color: var(--color-text-secondary);"
                        @mouseenter="$event.target.style.color = 'var(--color-accent)'"
                        @mouseleave="$event.target.style.color = 'var(--color-text-secondary)'"
                    >
                        {{ link.label }}
                    </Link>
                </div>

                <!-- Right Side: Language Switcher + Download CV -->
                <div class="hidden md:flex items-center gap-4">
                    <!-- Language Switcher -->
                    <button
                        @click="toggleLanguage"
                        class="text-sm font-medium px-3 py-2 rounded transition-colors"
                        style="color: var(--color-text-secondary);"
                        @mouseenter="$event.target.style.color = 'var(--color-accent)'"
                        @mouseleave="$event.target.style.color = 'var(--color-text-secondary)'"
                    >
                        {{ currentLanguage.toUpperCase() }} / {{ (currentLanguage === 'id' ? 'en' : 'id').toUpperCase() }}
                    </button>

                    <!-- Download CV Button -->
                    <a
                        href="#"
                        class="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
                        style="
                            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
                            color: var(--color-text-primary);
                        "
                        @mouseenter="$event.target.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)'; $event.target.style.transform = 'translateY(-2px)'"
                        @mouseleave="$event.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)'; $event.target.style.transform = 'translateY(0)'"
                    >
                        Download CV
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button
                    @click="toggleMobileMenu"
                    class="md:hidden p-2 rounded-md transition-colors"
                    style="color: var(--color-text-secondary);"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            v-if="!isMobileMenuOpen"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            v-else
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div
                v-if="isMobileMenuOpen"
                class="md:hidden border-t"
                style="border-color: rgba(148, 163, 184, 0.1);"
            >
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <Link
                        v-for="link in navLinks"
                        :key="link.name"
                        :href="link.href"
                        class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        style="color: var(--color-text-secondary);"
                        @click="isMobileMenuOpen = false"
                    >
                        {{ link.label }}
                    </Link>

                    <!-- Mobile: Language Switcher -->
                    <button
                        @click="toggleLanguage"
                        class="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                        style="color: var(--color-text-secondary);"
                    >
                        Language: {{ currentLanguage.toUpperCase() }}
                    </button>

                    <!-- Mobile: Download CV -->
                    <a
                        href="#"
                        class="block px-3 py-2 rounded-md text-base font-medium"
                        style="color: var(--color-primary);"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.max-w-7xl {
    max-width: 80rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.sm\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.flex {
    display: flex;
}

.h-16 {
    height: 4rem;
}

.justify-between {
    justify-content: space-between;
}

.items-center {
    align-items: center;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-4 {
    gap: 1rem;
}

.gap-8 {
    gap: 2rem;
}

.hidden {
    display: none;
}

.md\:flex {
    display: flex;
}

.md\:hidden {
    display: none;
}

@media (max-width: 768px) {
    .md\:flex {
        display: none;
    }

    .md\:hidden {
        display: flex;
    }
}

.shrink-0 {
    flex-shrink: 0;
}

.text-2xl {
    font-size: 1.5rem;
}

.text-lg {
    font-size: 1.125rem;
}

.text-sm {
    font-size: 0.875rem;
}

.text-base {
    font-size: 1rem;
}

.font-bold {
    font-weight: 700;
}

.font-semibold {
    font-weight: 600;
}

.font-medium {
    font-weight: 500;
}

.rounded {
    border-radius: 0.25rem;
}

.rounded-md {
    border-radius: 0.375rem;
}

.transition-colors {
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}

.duration-200 {
    transition-duration: 200ms;
}

.p-2 {
    padding: 0.5rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.pt-2 {
    padding-top: 0.5rem;
}

.pb-3 {
    padding-bottom: 0.75rem;
}

.space-y-1 > * + * {
    margin-top: 0.25rem;
}

.w-6 {
    width: 1.5rem;
}

.h-6 {
    height: 1.5rem;
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

.border-t {
    border-top-width: 1px;
}

.inline {
    display: inline;
}

@media (max-width: 640px) {
    .sm\:inline {
        display: none;
    }
}
</style>