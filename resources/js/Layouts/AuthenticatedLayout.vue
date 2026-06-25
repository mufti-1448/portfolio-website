<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div
            class="min-h-screen"
            style="background-color: var(--color-bg-primary)"
        >
            <nav
                class="border-b"
                style="
                    border-color: rgba(148, 163, 184, 0.1);
                    background-color: var(--color-bg-secondary);
                "
            >
                <!-- Primary Navigation Menu -->
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 justify-between">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex shrink-0 items-center">
                                <Link :href="route('dashboard')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current"
                                        style="color: var(--color-accent)"
                                    />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div
                                class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"
                            >
                                <NavLink
                                    :href="route('dashboard')"
                                    :active="route().current('dashboard')"
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div class="hidden sm:ms-6 sm:flex sm:items-center">
                            <!-- Settings Dropdown -->
                            <div class="relative ms-3">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out focus:outline-none"
                                                style="
                                                    border-color: rgba(
                                                        148,
                                                        163,
                                                        184,
                                                        0.2
                                                    );
                                                    background-color: var(
                                                        --color-bg-secondary
                                                    );
                                                    color: var(
                                                        --color-text-primary
                                                    );
                                                "
                                                @mouseenter="
                                                    $el.style.color =
                                                        'var(--color-accent)'
                                                "
                                                @mouseleave="
                                                    $el.style.color =
                                                        'var(--color-text-primary)'
                                                "
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink
                                            :href="route('profile.edit')"
                                        >
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
                        </div>

                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <button
                                @click="
                                    showingNavigationDropdown =
                                        !showingNavigationDropdown
                                "
                                class="inline-flex items-center justify-center rounded-md p-2 transition duration-150 ease-in-out"
                                style="color: var(--color-text-secondary)"
                                @mouseenter="
                                    $el.style.backgroundColor =
                                        'rgba(56, 189, 248, 0.1)';
                                    $el.style.color =
                                        'var(--color-text-primary)';
                                "
                                @mouseleave="
                                    $el.style.backgroundColor = 'transparent';
                                    $el.style.color =
                                        'var(--color-text-secondary)';
                                "
                            >
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex':
                                                !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex':
                                                showingNavigationDropdown,
                                        }"
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

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{
                        block: showingNavigationDropdown,
                        hidden: !showingNavigationDropdown,
                    }"
                    class="sm:hidden"
                >
                    <div class="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div
                        class="pb-1 pt-4"
                        style="border-top: 1px solid rgba(148, 163, 184, 0.1)"
                    >
                        <div class="px-4">
                            <div
                                class="text-base font-medium"
                                style="color: var(--color-text-primary)"
                            >
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div
                                class="text-sm font-medium"
                                style="color: var(--color-text-secondary)"
                            >
                                {{ $page.props.auth.user.email }}
                            </div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')">
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                :href="route('logout')"
                                method="post"
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header
                class="shadow"
                v-if="$slots.header"
                style="
                    background-color: var(--color-bg-secondary);
                    border-bottom: 1px solid rgba(148, 163, 184, 0.1);
                "
            >
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div style="color: var(--color-text-primary)">
                        <slot name="header" />
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main
                style="
                    background-color: var(--color-bg-primary);
                    color: var(--color-text-primary);
                "
            >
                <slot />
            </main>
        </div>
    </div>
</template>
