<script setup>
import { ref, computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";

const isSidebarOpen = ref(true);
const user = computed(() => usePage().props.auth.user);

const sidebarLinks = [
    { label: "Dashboard", href: route("admin.dashboard"), icon: "📊" },
    { label: "Projects", href: route("admin.projects.index"), icon: "📁" },
    { label: "Skills", href: route("admin.skills.index"), icon: "⚙️" },
    {
        label: "Certificates",
        href: route("admin.certificates.index"),
        icon: "🏆",
    },
    {
        label: "Experiences",
        href: route("admin.experiences.index"),
        icon: "💼",
    },
    { label: "Profile", href: route("admin.profile.edit"), icon: "👤" },
];

const logout = () => {
    document.getElementById("logout-form")?.submit();
};
</script>

<template>
    <div
        class="flex min-h-screen"
        style="background-color: var(--color-bg-primary)"
    >
        <!-- Sidebar -->
        <aside
            class="transition-all duration-300"
            :style="{
                width: isSidebarOpen ? '280px' : '80px',
                backgroundColor: 'var(--color-bg-secondary)',
                borderRight: '1px solid rgba(148, 163, 184, 0.1)',
                overflowY: 'auto',
            }"
        >
            <div class="p-6">
                <!-- Logo -->
                <Link href="/" class="flex items-center gap-2 mb-8">
                    <span
                        class="text-2xl font-bold"
                        style="color: var(--color-accent)"
                    >
                        &lt;/&gt;
                    </span>
                    <span
                        v-if="isSidebarOpen"
                        class="text-lg font-semibold"
                        style="color: var(--color-text-primary)"
                    >
                        Admin
                    </span>
                </Link>

                <!-- Navigation Links -->
                <nav class="space-y-2">
                    <Link
                        v-for="link in sidebarLinks"
                        :key="link.href"
                        :href="link.href"
                        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
                        :style="{
                            backgroundColor: route().current(link.href)
                                ? 'rgba(37, 99, 235, 0.2)'
                                : 'transparent',
                            color: route().current(link.href)
                                ? 'var(--color-accent)'
                                : 'var(--color-text-secondary)',
                        }"
                    >
                        <span class="text-xl">{{ link.icon }}</span>
                        <span v-if="isSidebarOpen" class="text-sm font-medium">
                            {{ link.label }}
                        </span>
                    </Link>
                </nav>

                <!-- Logout -->
                <div
                    class="mt-8 pt-8 border-t"
                    style="border-color: rgba(148, 163, 184, 0.1)"
                >
                    <button
                        @click="logout"
                        class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
                        style="color: var(--color-text-secondary)"
                    >
                        <span class="text-xl">🚪</span>
                        <span v-if="isSidebarOpen" class="text-sm font-medium">
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <!-- Top Bar -->
            <header
                class="border-b h-16 flex items-center justify-between px-8"
                style="
                    border-color: rgba(148, 163, 184, 0.1);
                    background-color: var(--color-bg-secondary);
                "
            >
                <div class="flex items-center gap-4">
                    <!-- Toggle Sidebar Button -->
                    <button
                        @click="isSidebarOpen = !isSidebarOpen"
                        class="p-2 rounded-lg transition-colors"
                        style="color: var(--color-text-secondary)"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <h1
                        class="text-xl font-semibold"
                        style="color: var(--color-text-primary)"
                    >
                        Admin Panel
                    </h1>
                </div>

                <!-- User Info -->
                <div class="flex items-center gap-4">
                    <span style="color: var(--color-text-secondary)">
                        {{ user?.name }}
                    </span>
                </div>
            </header>

            <!-- Page Content -->
            <main class="flex-1 overflow-auto">
                <div class="p-8">
                    <slot />
                </div>
            </main>
        </div>

        <!-- Logout Form (hidden) -->
        <form
            id="logout-form"
            :action="route('logout')"
            method="POST"
            style="display: none"
        >
            <input
                type="hidden"
                name="_token"
                :value="$page.props.csrf_token"
            />
        </form>
    </div>
</template>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}

.flex {
    display: flex;
}

.flex-1 {
    flex: 1;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

.gap-4 {
    gap: 1rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.p-6 {
    padding: 1.5rem;
}

.p-8 {
    padding: 2rem;
}

.mb-8 {
    margin-bottom: 2rem;
}

.mt-8 {
    margin-top: 2rem;
}

.pt-8 {
    padding-top: 2rem;
}

.space-y-2 > * + * {
    margin-top: 0.5rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.transition-colors {
    transition-property: color, background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.duration-300 {
    transition-duration: 300ms;
}

.h-16 {
    height: 4rem;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}

.border-b {
    border-bottom-width: 1px;
}

.border-t {
    border-top-width: 1px;
}

.overflow-auto {
    overflow: auto;
}

.text-2xl {
    font-size: 1.5rem;
}

.text-xl {
    font-size: 1.25rem;
}

.text-lg {
    font-size: 1.125rem;
}

.text-sm {
    font-size: 0.875rem;
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

.w-6 {
    width: 1.5rem;
}

.h-6 {
    height: 1.5rem;
}

.w-full {
    width: 100%;
}

.p-2 {
    padding: 0.5rem;
}
</style>
