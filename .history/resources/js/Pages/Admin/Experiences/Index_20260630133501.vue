<script setup>
import { Link } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Button from "@/Components/UI/Button.vue";

defineProps({
    experiences: Array,
});
</script>

<template>
    <AdminLayout>
        <div>
            <div class="mb-8 flex justify-between items-center">
                <div>
                    <h2
                        class="text-3xl font-bold"
                        style="color: var(--color-text-primary)"
                    >
                        Experiences Management
                    </h2>
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-top: 4px;
                        "
                    >
                        Manage your work experiences
                    </p>
                </div>
                <Link :href="route('admin.experiences.create')">
                    <Button variant="primary"> + New Experience </Button>
                </Link>
            </div>

            <div
                class="rounded-lg overflow-hidden"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <div v-if="experiences.length === 0" class="p-8 text-center">
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-bottom: 16px;
                        "
                    >
                        No experiences yet. Add your first experience!
                    </p>
                    <Link :href="route('admin.experiences.create')">
                        <Button variant="primary">
                            Add First Experience
                        </Button>
                    </Link>
                </div>

                <table v-else class="w-full">
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
                                Company
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Period
                            </th>
                            <th
                                class="px-6 py-4 text-center text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="exp in experiences"
                            :key="exp.id"
                            style="
                                border-bottom: 1px solid
                                    rgba(148, 163, 184, 0.1);
                            "
                        >
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-primary)"
                            >
                                <div class="font-medium">{{ exp.title }}</div>
                                <span
                                    v-if="exp.is_current"
                                    class="text-xs"
                                    style="color: var(--color-accent)"
                                >
                                    Currently working
                                </span>
                            </td>
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-secondary)"
                            >
                                {{ exp.company }}
                            </td>
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-secondary)"
                            >
                                {{
                                    new Date(
                                        exp.start_date,
                                    ).toLocaleDateString()
                                }}
                                -
                                {{
                                    exp.is_current
                                        ? "Present"
                                        : new Date(
                                              exp.end_date,
                                          ).toLocaleDateString()
                                }}
                            </td>
                            <td class="px-6 py-4 text-sm">
                                <div class="flex justify-center gap-2">
                                    <Link
                                        :href="
                                            route(
                                                'admin.experiences.show',
                                                exp.id,
                                            )
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
                                            route(
                                                'admin.experiences.edit',
                                                exp.id,
                                            )
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
                                        @click="deleteExperience(exp.id)"
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

            <div
                class="mt-6 text-sm"
                style="color: var(--color-text-secondary)"
            >
                Total Experiences:
                <span
                    style="color: var(--color-text-primary); font-weight: 600;"
                    >{{ experiences.length }}</span
                >
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteExperience(expId) {
            if (confirm("Are you sure?")) {
                this.$inertia.delete(route("admin.experiences.destroy", expId));
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
.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
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
.overflow-hidden {
    overflow: hidden;
}
.w-full {
    width: 100%;
}
.flex {
    display: flex;
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
