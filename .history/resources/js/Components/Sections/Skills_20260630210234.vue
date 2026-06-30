<script setup>
import { computed } from "vue";

const props = defineProps({
    skills: {
        type: Array,
        default: () => [],
    },
});

// Group skills by category
const groupedSkills = computed(() => {
    const groups = {};

    props.skills.forEach((skill) => {
        if (!groups[skill.category]) {
            groups[skill.category] = [];
        }
        groups[skill.category].push(skill);
    });

    return groups;
});
</script>

<template>
    <section
        class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style="scroll-margin-top: 80px"
        id="skills"
    >
        <!-- Section Header -->
        <div class="mb-12">
            <h2
                class="text-4xl sm:text-5xl font-bold mb-4"
                style="color: var(--color-text-primary)"
            >
                Skills & Expertise
            </h2>
            <p
                class="text-lg"
                style="color: var(--color-text-secondary); line-height: 1.8"
            >
                Technical skills and proficiencies across different domains
            </p>
        </div>

        <!-- Empty State -->
        <div v-if="skills.length === 0" class="text-center py-12">
            <p style="color: var(--color-text-secondary); font-size: 1.125rem">
                No skills added yet.
            </p>
        </div>

        <!-- Skills Grid by Category -->
        <div v-else class="space-y-12">
            <div
                v-for="category in Object.keys(groupedSkills)"
                :key="category"
                style="animation: slideInUp 600ms ease-out forwards; opacity: 0"
                :style="{
                    animationDelay: `${Object.keys(groupedSkills).indexOf(category) * 100}ms`,
                }"
            >
                <!-- Category Title -->
                <div class="mb-6">
                    <h3
                        class="text-2xl font-semibold"
                        style="color: var(--color-text-primary)"
                    >
                        {{ category }}
                    </h3>
                </div>

                <!-- Skills Grid -->
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    <div
                        v-for="skill in groupedSkills[category]"
                        :key="skill.id"
                        class="skill-card p-6 rounded-lg transition-all duration-300"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                            cursor: pointer;
                        "
                        @mouseenter="
                            $event.currentTarget.style.transform =
                                'translateY(-8px)';
                            $event.currentTarget.style.borderColor =
                                'rgba(56, 189, 248, 0.4)';
                            $event.currentTarget.style.boxShadow =
                                '0 20px 40px rgba(37, 99, 235, 0.3)';
                        "
                        @mouseleave="
                            $event.currentTarget.style.transform =
                                'translateY(0)';
                            $event.currentTarget.style.borderColor =
                                'rgba(148, 163, 184, 0.2)';
                            $event.currentTarget.style.boxShadow =
                                'var(--glass-shadow)';
                        "
                    >
                        <div
                            class="flex flex-col items-center justify-center gap-3"
                        >
                            <!-- Icon -->
                            <span class="text-4xl">{{
                                skill.icon || "⚙️"
                            }}</span>

                            <!-- Skill Name -->
                            <p
                                class="text-sm font-semibold text-center"
                                style="color: var(--color-text-primary)"
                            >
                                {{ skill.name }}
                            </p>

                            <!-- Proficiency -->
                            <div class="text-xs">
                                <span v-for="n in 5" :key="n">
                                    {{ n <= skill.proficiency ? "⭐" : "☆" }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.mb-12 {
    margin-bottom: 3rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.space-y-12 > * + * {
    margin-top: 3rem;
}

.gap-4 {
    gap: 1rem;
}

.text-4xl {
    font-size: 2.25rem;
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

.text-xs {
    font-size: 0.75rem;
}

.font-bold {
    font-weight: 700;
}

.font-semibold {
    font-weight: 600;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.grid {
    display: grid;
}

.grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.sm\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.lg\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.gap-3 {
    gap: 0.75rem;
}

.transition-all {
    transition: all 0.3s ease;
}

.duration-300 {
    transition-duration: 300ms;
}

.p-6 {
    padding: 1.5rem;
}

.max-w-7xl {
    max-width: 80rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 640px) {
    .sm\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    .sm\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .lg\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
