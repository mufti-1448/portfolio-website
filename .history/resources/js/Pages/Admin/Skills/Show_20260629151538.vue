<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Button from '@/Components/UI/Button.vue';

defineProps({
    skill: Object,
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
                        <span class="text-4xl mr-2">{{ skill.icon || '⚙️' }}</span>
                        {{ skill.name }}
                    </h2>
                    <p style="color: var(--color-text-secondary); margin-top: 4px;">
                        Skill Details
                    </p>
                </div>
                <div class="flex gap-2">
                    
                        :href="route('admin.skills.edit', skill.id)"
                        class="px-4 py-2 rounded-lg font-semibold transition-colors"
                        style="
                            background: var(--color-primary);
                            color: white;
                            text-decoration: none;
                        "
                    >
                        Edit
                    </a>
                    <a
                        :href="route('admin.skills.index')"
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

            <!-- Skill Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Category Card -->
                <div
                    class="p-8 rounded-lg"
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
                        Category
                    </h3>
                    <span
                        class="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                        :style="{
                            background: skill.category === 'Frontend'
                                ? 'rgba(56, 189, 248, 0.1)'
                                : skill.category === 'Backend'
                                ? 'rgba(37, 99, 235, 0.1)'
                                : skill.category === 'Database'
                                ? 'rgba(34, 197, 94, 0.1)'
                                : 'rgba(107, 114, 128, 0.1)',
                            color: skill.category === 'Frontend'
                                ? 'var(--color-accent)'
                                : skill.category === 'Backend'
                                ? 'var(--color-primary)'
                                : skill.category === 'Database'
                                ? '#22c55e'
                                : 'var(--color-text-secondary)',
                        }"
                    >
                        {{ skill.category }}
                    </span>
                </div>

                <!-- Proficiency Card -->
                <div
                    class="p-8 rounded-lg"
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
                        Proficiency Level
                    </h3>
                    <div class="text-3xl">
                        <span v-for="n in 5" :key="n">
                            {{ n <= skill.proficiency ? '⭐' : '☆' }}
                        </span>
                    </div>
                    <p
                        class="text-sm mt-3"
                        style="color: var(--color-text-secondary)"
                    >
                        {{ skill.proficiency === 1 ? 'Beginner' : skill.proficiency === 2 ? 'Basic' : skill.proficiency === 3 ? 'Intermediate' : skill.proficiency === 4 ? 'Advanced' : 'Expert' }}
                    </p>
                </div>
            </div>

            <!-- Meta Info Card -->
            <div
                class="mt-8 p-8 rounded-lg"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <h3
                    class="text-lg font-semibold mb-6"
                    style="color: var(--color-text-primary)"
                >
                    Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex justify-between">
                        <span style="color: var(--color-text-secondary);">
                            Created
                        </span>
                        <span
                            style="color: var(--color-text-primary)"
                            class="font-semibold"
                        >
                            {{ new Date(skill.created_at).toLocaleDateString() }}
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
                            {{ new Date(skill.updated_at).toLocaleDateString() }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Delete Button -->
            <div class="mt-8">
                <button
                    @click="deleteSkill"
                    class="px-6 py-3 rounded-lg font-semibold transition-colors"
                    style="
                        background: rgba(239, 68, 68, 0.1);
                        color: #ef4444;
                        border: 1.5px solid rgba(239, 68, 68, 0.3);
                    "
                >
                    🗑️ Delete Skill
                </button>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteSkill() {
            if (confirm('Are you sure you want to delete this skill?')) {
                this.$inertia.delete(route('admin.skills.destroy', this.skill.id));
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

.mb-3 {
    margin-bottom: 0.75rem;
}

.mt-8 {
    margin-top: 2rem;
}

.mt-3 {
    margin-top: 0.75rem;
}

.mr-2 {
    margin-right: 0.5rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.p-8 {
    padding: 2rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.text-3xl {
    font-size: 1.875rem;
}

.text-4xl {
    font-size: 2.25rem;
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

.inline-block {
    display: inline-block;
}

.grid {
    display: grid;
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-8 {
    gap: 2rem;
}

.gap-6 {
    gap: 1.5rem;
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

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

@media (max-width: 768px) {
    .md\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
}
</style>