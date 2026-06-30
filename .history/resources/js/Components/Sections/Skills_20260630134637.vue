<script setup>
defineProps({
    skills: Array,
});

// Group skills by category
const groupedSkills = computed(() => {
    const groups = {};
    if (!props.skills) return groups;

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
    <!-- Skills Section -->
    <section
        id="skills"
        class="relative py-20"
        style="background-color: var(--color-bg-primary)"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Title -->
            <div class="mb-16">
                <h2
                    class="text-4xl md:text-5xl font-bold"
                    style="color: var(--color-text-primary)"
                >
                    My
                    <span style="color: var(--color-accent)">Skills</span>
                </h2>
                <p style="color: var(--color-text-secondary); margin-top: 8px">
                    Technologies and tools I work with
                </p>
            </div>

            <!-- Skills Grid by Category -->
            <div class="space-y-12">
                <div
                    v-for="(skills, category) in groupedSkills"
                    :key="category"
                    style="
                        animation: slideInUp 600ms ease-out forwards;
                        opacity: 0;
                    "
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
                            v-for="skill in skills"
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
                                        {{
                                            n <= skill.proficiency ? "⭐" : "☆"
                                        }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- All Skills Summary (Optional) -->
            <div
                class="mt-16 p-8 rounded-lg"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                    animation: slideInUp 600ms ease-out 400ms forwards;
                    opacity: 0;
                "
            >
                <h3
                    class="text-xl font-semibold mb-4"
                    style="color: var(--color-text-primary)"
                >
                    Complete Skill Stack
                </h3>
                <div class="flex flex-wrap gap-2">
                    <Badge
                        v-for="category in skillsData"
                        :key="`summary-${category.category}`"
                        variant="primary"
                        :text="category.category"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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

.relative {
    position: relative;
}

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

.sm\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.py-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
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

.gap-4 {
    gap: 1rem;
}

.gap-2 {
    gap: 0.5rem;
}

.mb-16 {
    margin-bottom: 4rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mt-16 {
    margin-top: 4rem;
}

.text-4xl {
    font-size: 2.25rem;
}

.md\:text-5xl {
    font-size: 3rem;
}

.font-bold {
    font-weight: 700;
}

.text-2xl {
    font-size: 1.5rem;
}

.font-semibold {
    font-weight: 600;
}

.text-xl {
    font-size: 1.25rem;
}

.text-sm {
    font-size: 0.875rem;
}

.space-y-12 > * + * {
    margin-top: 3rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.p-6 {
    padding: 1.5rem;
}

.p-8 {
    padding: 2rem;
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.duration-300 {
    transition-duration: 300ms;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.flex-wrap {
    flex-wrap: wrap;
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

.text-center {
    text-align: center;
}

.text-4xl {
    font-size: 2.25rem;
}

.cursor-pointer {
    cursor: pointer;
}

@media (max-width: 768px) {
    .md\:grid-cols-4 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .md\:text-5xl {
        font-size: 2.25rem;
    }
}

@media (max-width: 640px) {
    .sm\:grid-cols-3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.skill-card {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 140px;
}
</style>
