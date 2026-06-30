<script setup>
import { Link } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Button from "@/Components/UI/Button.vue";

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
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-top: 4px;
                        "
                    >
                        Manage your technical skills
                    </p>
                </div>
                <Link :href="route('admin.skills.create')">
                    <Button variant="primary"> + New Skill </Button>
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
                <!-- Empty State -->
                <div v-if="skills.length === 0" class="p-8 text-center">
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-bottom: 16px;
                        "
                    >
                        No skills yet. Add your first skill!
                    </p>
                    <Link :href="route('admin.skills.create')">
                        <Button variant="primary"> Add First Skill </Button>
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
                                Name
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Category
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Proficiency
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
                            v-for="skill in skills"
                            :key="skill.id"
                            style="
                                border-bottom: 1px solid
                                    rgba(148, 163, 184, 0.1);
                            "
                        >
                            <!-- Name -->
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-primary)"
                            >
                                <div
                                    class="font-medium flex items-center gap-2"
                                >
                                    <span v-if="skill.icon" class="text-lg">{{
                                        skill.icon
                                    }}</span>
                                    {{ skill.name }}
                                </div>
                            </td>

                            <!-- Category -->
                            <td class="px-6 py-4 text-sm">
                                <span
                                    class="px-3 py-1 rounded text-xs font-medium"
                                    :style="{
                                        background:
                                            skill.category === 'Frontend'
                                                ? 'rgba(56, 189, 248, 0.1)'
                                                : skill.category === 'Backend'
                                                  ? 'rgba(37, 99, 235, 0.1)'
                                                  : skill.category ===
                                                      'Database'
                                                    ? 'rgba(34, 197, 94, 0.1)'
                                                    : 'rgba(107, 114, 128, 0.1)',
                                        color:
                                            skill.category === 'Frontend'
                                                ? 'var(--color-accent)'
                                                : skill.category === 'Backend'
                                                  ? 'var(--color-primary)'
                                                  : skill.category ===
                                                      'Database'
                                                    ? '#22c55e'
                                                    : 'var(--color-text-secondary)',
                                    }"
                                >
                                    {{ skill.category }}
                                </span>
                            </td>

                            <!-- Proficiency -->
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-primary)"
                            >
                                <div class="flex items-center gap-1">
                                    <span
                                        v-for="n in 5"
                                        :key="n"
                                        class="text-lg"
                                    >
                                        {{
                                            n <= skill.proficiency ? "⭐" : "☆"
                                        }}
                                    </span>
                                </div>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 text-sm">
                                <div class="flex justify-center gap-2">
                                    <Link
                                        :href="
                                            route('admin.skills.show', skill.id)
                                        "
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(56, 189, 248, 0.1);
                                            color: var(--color-accent);
                                        "
                                    >
                                        View
                                    </Link>
                                    <Link
                                        :href="
                                            route('admin.skills.edit', skill.id)
                                        "
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(37, 99, 235, 0.1);
                                            color: var(--color-primary);
                                        "
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        @click="deleteSkill(skill.id)"
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

            <!-- Total Skills -->
            <div
                class="mt-6 text-sm"
                style="color: var(--color-text-secondary)"
            >
                Total Skills:
                <span
                    style="color: var(--color-text-primary); font-semibold:"
                    >{{ skills.length }}</span
                >
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteSkill(skillId) {
            if (confirm("Are you sure you want to delete this skill?")) {
                this.$inertia.delete(route("admin.skills.destroy", skillId));
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

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
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

.text-lg {
    font-size: 1.125rem;
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

tbody tr:hover {
    background-color: rgba(56, 189, 248, 0.05);
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
</style>
