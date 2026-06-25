<template>
    <div style="background-color: var(--color-bg-primary); min-height: 100vh">
        <!-- Navigation -->
        <nav
            class="border-b"
            style="
                border-color: rgba(148, 163, 184, 0.1);
                background-color: var(--color-bg-secondary);
            "
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between items-center">
                    <!-- Logo -->
                    <div class="flex shrink-0 items-center">
                        <Link
                            :href="route('dashboard')"
                            style="
                                color: var(--color-accent);
                                font-weight: bold;
                                font-size: 1.5rem;
                            "
                        >
                            Portfolio
                        </Link>
                    </div>

                    <!-- Desktop Navigation Links -->
                    <div class="hidden sm:flex sm:gap-8 sm:items-center">
                        <NavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                            style="color: var(--color-text-primary)"
                        >
                            Dashboard
                        </NavLink>
                    </div>

                    <!-- User Menu (Desktop) -->
                    <div class="hidden sm:flex sm:items-center sm:gap-4">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button
                                    style="
                                        color: var(--color-text-primary);
                                        background: transparent;
                                        border: none;
                                        cursor: pointer;
                                        padding: 8px 16px;
                                        border-radius: 6px;
                                        transition: all 150ms ease-out;
                                    "
                                    @mouseover="
                                        $event.target.style.backgroundColor =
                                            'rgba(148, 163, 184, 0.1)'
                                    "
                                    @mouseout="
                                        $event.target.style.backgroundColor =
                                            'transparent'
                                    "
                                >
                                    {{ $page.props.auth.user.name }}
                                    <svg
                                        class="w-4 h-4 inline-block ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        />
                                    </svg>
                                </button>
                            </template>

                            <template #content>
                                <DropdownLink :href="route('profile.edit')">
                                    Profile
                                </DropdownLink>
                                <DropdownLink
                                    :href="route('logout')"
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </DropdownLink>
                            </template>
                        </Dropdown>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex sm:hidden">
                        <button
                            @click="
                                showingNavigationDropdown =
                                    !showingNavigationDropdown
                            "
                            style="
                                color: var(--color-text-primary);
                                background: transparent;
                                border: none;
                                cursor: pointer;
                                padding: 8px;
                            "
                        >
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    v-if="!showingNavigationDropdown"
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
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <div
                v-if="showingNavigationDropdown"
                style="
                    background-color: var(--color-bg-primary);
                    border-top: 1px solid rgba(148, 163, 184, 0.1);
                "
            >
                <div class="px-4 py-3 space-y-1">
                    <ResponsiveNavLink
                        :href="route('dashboard')"
                        :active="route().current('dashboard')"
                        style="color: var(--color-text-primary)"
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div
                    style="
                        border-top: 1px solid rgba(148, 163, 184, 0.1);
                        padding: 12px 16px;
                    "
                >
                    <div
                        style="
                            color: var(--color-text-primary);
                            font-weight: 600;
                            margin-bottom: 12px;
                        "
                    >
                        {{ $page.props.auth.user.name }}
                    </div>
                    <ResponsiveNavLink
                        :href="route('profile.edit')"
                        style="color: var(--color-text-primary)"
                    >
                        Profile
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        :href="route('logout')"
                        method="post"
                        as="button"
                        style="color: var(--color-text-primary)"
                    >
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        </nav>

        <!-- Page Header (if provided) -->
        <header
            v-if="$slots.header"
            style="
                background-color: var(--color-bg-secondary);
                border-bottom: 1px solid rgba(148, 163, 184, 0.1);
            "
        >
            <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <slot name="header" />
            </div>
        </header>

        <!-- Main Content -->
        <main style="color: var(--color-text-primary)">
            <slot />
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";

const showingNavigationDropdown = ref(false);
</script>

<style scoped>
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

.gap-8 {
    gap: 2rem;
}

.gap-4 {
    gap: 1rem;
}

.hidden {
    display: none;
}

.sm\:flex {
    display: flex;
}

.shrink-0 {
    flex-shrink: 0;
}

.w-6 {
    width: 1.5rem;
}

.h-6 {
    height: 1.5rem;
}

.w-4 {
    width: 1rem;
}

.h-4 {
    height: 1rem;
}

.ml-2 {
    margin-left: 0.5rem;
}

.inline-block {
    display: inline-block;
}
</style>
