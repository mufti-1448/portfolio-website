<script setup>
import { Link } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Button from "@/Components/UI/Button.vue";

defineProps({
    projects: Array,
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
                        Projects Management
                    </h2>
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-top: 4px;
                        "
                    >
                        Manage your portfolio projects
                    </p>
                </div>
                <Link :href="route('admin.projects.create')">
                    <Button variant="primary"> + New Project </Button>
                </Link>
            </div>

            <!-- Projects Table -->
            <div
                class="rounded-lg overflow-hidden"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <!-- Empty State -->
                <div v-if="projects.length === 0" class="p-8 text-center">
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-bottom: 16px;
                        "
                    >
                        No projects yet. Create your first project!
                    </p>
                    <Link :href="route('admin.projects.create')">
                        <Button variant="primary">
                            Create First Project
                        </Button>
                    </Link>
                </div>

                <!-- Table -->
                <table v-else class="w-full">
                    <!-- Table Header -->
                    <thead
                        style="
                            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
                            background: rgba(148, 163, 184, 0.05);
                        "
                    >
                        <tr>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Title
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Tech Stack
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Featured
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Created
                            </th>
                            <th
                                class="px-6 py-4 text-center text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        <tr
                            v-for="project in projects"
                            :key="project.id"
                            style="
                                border-bottom: 1px solid
                                    rgba(148, 163, 184, 0.1);
                            "
                        >
                            <!-- Title -->
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-primary)"
                            >
                                <div class="font-medium">
                                    {{ project.title }}
                                </div>
                                <p
                                    class="text-xs mt-1"
                                    style="color: var(--color-text-secondary)"
                                >
                                    {{
                                        project.description?.substring(0, 50)
                                    }}...
                                </p>
                            </td>

                            <!-- Tech Stack -->
                            <td class="px-6 py-4 text-sm">
                                <div class="flex flex-wrap gap-1">
                                    <span
                                        v-for="tech in project.tech_stack?.slice(
                                            0,
                                            3,
                                        )"
                                        :key="tech"
                                        class="px-2 py-1 rounded text-xs"
                                        style="
                                            background: rgba(37, 99, 235, 0.1);
                                            color: var(--color-primary);
                                        "
                                    >
                                        {{ tech }}
                                    </span>
                                    <span
                                        v-if="project.tech_stack?.length > 3"
                                        class="px-2 py-1 rounded text-xs"
                                        style="
                                            background: rgba(
                                                148,
                                                163,
                                                184,
                                                0.1
                                            );
                                            color: var(--color-text-secondary);
                                        "
                                    >
                                        +{{ project.tech_stack.length - 3 }}
                                    </span>
                                </div>
                            </td>

                            <!-- Featured -->
                            <td class="px-6 py-4 text-sm">
                                <span
                                    v-if="project.is_featured"
                                    class="px-3 py-1 rounded text-xs font-medium"
                                    style="
                                        background: rgba(16, 185, 129, 0.1);
                                        color: #10b981;
                                    "
                                >
                                    ✓ Featured
                                </span>
                                <span
                                    v-else
                                    class="px-3 py-1 rounded text-xs font-medium"
                                    style="
                                        background: rgba(148, 163, 184, 0.1);
                                        color: var(--color-text-secondary);
                                    "
                                >
                                    Not Featured
                                </span>
                            </td>

                            <!-- Created -->
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-secondary)"
                            >
                                {{
                                    new Date(
                                        project.created_at,
                                    ).toLocaleDateString()
                                }}
                            </td>

                           <!-- Actions -->
                            <td class="px-6 py-4 text-sm">
                                <div class="flex justify-center gap-2">
                                    <a
                                        :href="route('admin.projects.show', project.id)"
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(56, 189, 248, 0.1);
                                            color: var(--color-accent);
                                        "
                                    >
                                        View
                                    </a>
                                    <a
                                        :href="route('admin.projects.edit', project.id)"
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(37, 99, 235, 0.1);
                                            color: var(--color-primary);
                                        "
                                    >
                                        Edit
                                    </a>
                                    <button
                                        @click="deleteProject(project.id)"
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(239, 68, 68, 0.1);
                                            color: #ef4444;
                                        "
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Total Projects -->
            <div
                class="mt-6 text-sm"
                style="color: var(--color-text-secondary)"
            >
                Total Projects:
                <span
                    style="color: var(--color-text-primary); font-weight: 600;"
                    >{{ projects.length }}</span
                >
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteProject(projectId) {
            if (confirm("Are you sure you want to delete this project?")) {
                this.$inertia.delete(
                    route("admin.projects.destroy", projectId),
                );
            }
        },
    },
};
</script>

<style scoped>
.mb-8 {
    margin-bottom: 2rem;
}

.mt-6 {
    margin-top: 1.5rem;
}

.mt-1 {
    margin-top: 0.25rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.text-3xl {
    font-size: 1.875rem;
}

.text-sm {
    font-size: 0.875rem;
}

.text-xs {
    font-size: 0.75rem;
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

.rounded-lg {
    border-radius: 0.5rem;
}

.rounded {
    border-radius: 0.25rem;
}

.overflow-hidden {
    overflow: hidden;
}

.w-full {
    width: 100%;
}

.flex {
    display: flex;
}

.flex-wrap {
    flex-wrap: wrap;
}

.justify-between {
    justify-content: space-between;
}

.justify-center {
    justify-content: center;
}

.items-center {
    align-items: center;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-1 {
    gap: 0.25rem;
}

table {
    border-collapse: collapse;
}

thead {
    background-color: transparent;
}

tbody tr:hover {
    background-color: rgba(56, 189, 248, 0.05);
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

a:hover {
    opacity: 0.8;
}
</style>
