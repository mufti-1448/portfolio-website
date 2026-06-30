<script setup>
import { Link } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Button from '@/Components/UI/Button.vue';

defineProps({
    skills: Array,
});
</script>

<template>
    <AdminLayout>
        <div>
            <!-- Header -->
            <div class="mb-8 flex justify-between items-center">
                <div>
                    <h2
                        class="text-3xl font-bold"
                        style="color: var(--color-text-primary)"
                    >
                        Skills Management
                    </h2>
                    <p style="color: var(--color-text-secondary); margin-top: 4px;">
                        Manage your technical skills
                    </p>
                </div>
                <Link :href="route('admin.skills.create')">
                    <Button variant="primary">
                        + New Skill
                    </Button>
                </Link>
            </div>

            <!-- Skills Table -->
            <div
                class="rounded-lg overflow-hidden"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <!--