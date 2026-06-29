<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Button from '@/Components/UI/Button.vue';

defineProps({
    project: Object,
});
</script>

<template>
    <AdminLayout>
        <div>
            <!-- Header with Back Button -->
            <div class="mb-8 flex justify-between items-center">
                <div>
                    <h2
                        class="text-3xl font-bold"
                        style="color: var(--color-text-primary)"
                    >
                        {{ project.title }}
                    </h2>
                    <p style="color: var(--color-text-secondary); margin-top: 4px;">
                        Project Details
                    </p>
                </div>
                <div class="flex gap-2">
                    
                        :href="route('admin.projects.edit', project.id)"
                        class="px-4 py-2 rounded-lg font-semibold transition-colors"
                        style="
                            background: var(--color-primary);
                            color: white;
                            text-decoration: none;
                        "
                    >
                        Edit
                    </a>
                    
                        :href="route('admin.projects.index')"
                        class="px-4 py-2 rounded-lg font-semibold transition-colors"
                        style="
                            background: var(--color-bg-secondary);
                            border: 1.5px solid rgba(148, 163, 184, 0.2);
                            color: var(--color-text-primary);
                            text-decoration: none;
                        "
                    >
                        Back
                    </a>
                </div>
            </div>

            <!-- Project Details -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Left Column: Image & Links -->
                <div class="lg:col-span-1">
                    <!-- Project Image -->
                    <div
                        v-if="project.image"
                        class="mb-6 rounded-lg overflow-hidden"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            aspect-ratio: 4/3;
                        "
                    >
                        <img
                            :src="'/storage/' + project.image"
                            :alt="project.title"
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <!-- Links Card -->
                    <div
                        class="p-6 rounded-lg space-y-3"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                        "
                    >
                        <h3
                            class="text-lg font-semibold"
                            style="color: var(--color-text-primary)"
                        >
                            Links
                        </h3>

                        
                            v-if="project.github_url"
                            :href="project.github_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                                text-decoration: none;
                            "
                        >
                            <span>🐙</span>
                            <span class="text-sm font-medium">GitHub</span>
                        </a>

                        <
                            v-if="project.live_url"
                            :href="project.live_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors"
                            style="
                                background: var(--color-primary);
                                color: white;
                                text-decoration: none;
                            "
                        >
                            <span>🔗</span>
                            <span class="text-sm font-medium">Live Demo</span>
                        </a>

                        <p
                            v-if="!project.github_url && !project.live_url"
                            class="text-sm"
                            style="color: var(--color-text-secondary)"
                        >
                            No links added
                        </p>
                    </div>
                </div>

                <!-- Right Column: Details -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Description Card -->
                    <div
                        class="p-6 rounded-lg"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                        "
                    >
                        <h3
                            class="text-lg font-semibold mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            Description
                        </h3>
                        <p
                            style="
                                color: var(--color-text-secondary);
                                line-height: 1.8;
                                white-space: pre-wrap;
                            "
                        >
                            {{ project.description }}
                        </p>
                    </div>

                    <!-- Tech Stack Card -->
                    <div
                        class="p-6 rounded-lg"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                        "
                    >
                        <h3
                            class="text-lg font-semibold mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            Tech Stack
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tech in project.tech_stack"
                                :key="tech"
                                class="px-3 py-1 rounded-lg text-sm font-medium"
                                style="
                                    background: rgba(37, 99, 235, 0.1);
                                    color: var(--color-primary);
                                "
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <!-- Meta Info Card -->
                    <div
                        class="p-6 rounded-lg"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                        "
                    >
                        <h3
                            class="text-lg font-semibold mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            Information
                        </h3>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span style="color: var(--color-text-secondary);">
                                    Featured
                                </span>
                                <span
                                    :style="{
                                        color: project.is_featured ? '#10b981' : 'var(--color-text-secondary)',
                                    }"
                                    class="font-semibold"
                                >
                                    {{ project.is_featured ? '✓ Yes' : '✗ No' }}
                                </span>
                            </div>
                            <div class="flex justify-between">
                                <span style="color: var(--color-text-secondary);">
                                    Created
                                </span>
                                <span
                                    style="color: var(--color-text-primary)"
                                    class="font-semibold"
                                >
                                    {{ new Date(project.created_at).toLocaleDateString() }}
                                </span>
                            </div>
                            <div class="flex justify-between">
                                <span style="color: var(--color-text-secondary);">
                                    Updated
                                </span>
                                <span
                                    style="color: var(--color-text-primary)"
                                    class="font-semibold"
                                >
                                    {{ new Date(project.updated_at).toLocaleDateString() }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Delete Button -->
            <div class="mt-8">
                <button
                    @click="deleteProject"
                    class="px-6 py-3 rounded-lg font-semibold transition-colors"
                    style="
                        background: rgba(239, 68, 68, 0.1);
                        color: #ef4444;
                        border: 1.5px solid rgba(239, 68, 68, 0.3);
                    "
                >
                    🗑️ Delete Project
                </button>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteProject() {
            if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
                this.$inertia.delete(route('admin.projects.destroy', this.project.id));
            }
        }
    }
}
</script>

<style scoped>
.mb-8 {
    margin-bottom: 2rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mt-8 {
    margin-top: 2rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.p-6 {
    padding: 1.5rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.text-3xl {
    font-size: 1.875rem;
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

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

.gap-8 {
    gap: 2rem;
}

.grid {
    display: grid;
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.lg\:col-span-1 {
    grid-column: span 1;
}

.lg\:col-span-2 {
    grid-column: span 2;
}

.space-y-6 > * + * {
    margin-top: 1.5rem;
}

.space-y-3 > * + * {
    margin-top: 0.75rem;
}

.flex-wrap {
    flex-wrap: wrap;
}

.w-full {
    width: 100%;
}

.h-full {
    height: 100%;
}

.object-cover {
    object-fit: cover;
}

.aspect-ratio {
    aspect-ratio: 4 / 3;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

@media (max-width: 1024px) {
    .lg\:grid-cols-3 {
        grid-template-columns: 1fr;
    }

    .lg\:col-span-1 {
        grid-column: span 1;
    }

    .lg\:col-span-2 {
        grid-column: span 1;
    }
}
</style>