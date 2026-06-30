<script setup>
defineProps({
    projects: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <section
        class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style="scroll-margin-top: 80px;"
        id="projects"
    >
        <!-- Section Header -->
        <div class="mb-12">
            <h2
                class="text-4xl sm:text-5xl font-bold mb-4"
                style="color: var(--color-text-primary)"
            >
                Featured Projects
            </h2>
            <p
                class="text-lg"
                style="color: var(--color-text-secondary); line-height: 1.8;"
            >
                Showcase of my recent work and side projects
            </p>
        </div>

        <!-- Empty State -->
        <div v-if="projects.length === 0" class="text-center py-12">
            <p style="color: var(--color-text-secondary); font-size: 1.125rem;">
                No projects added yet.
            </p>
        </div>

        <!-- Projects Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                v-for="(project, index) in projects"
                :key="project.id"
                class="project-card rounded-lg overflow-hidden transition-all duration-300"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                    animation: slideInUp 600ms ease-out forwards;
                    opacity: 0;
                "
                :style="{
                    animationDelay: `${index * 100}ms`,
                }"
                @mouseenter="$event.currentTarget.style.transform = 'translateY(-8px)'; $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)'; $event.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.3)'"
                @mouseleave="$event.currentTarget.style.transform = 'translateY(0)'; $event.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)'; $event.currentTarget.style.boxShadow = 'var(--glass-shadow)'"
            >
                <!-- Project Image -->
                <div
                    class="relative h-48 overflow-hidden"
                    style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(37, 99, 235, 0.1));"
                >
                    <img
                        v-if="project.image"
                        :src="'/storage/' + project.image"
                        :alt="project.title"
                        class="w-full h-full object-cover"
                    />
                    <div
                        v-else
                        class="w-full h-full flex items-center justify-center"
                        style="color: var(--color-text-secondary);"
                    >
                        📁 No Image
                    </div>
                </div>

                <!-- Project Content -->
                <div class="p-6">
                    <!-- Title -->
                    <h3
                        class="text-xl font-semibold mb-2"
                        style="color: var(--color-text-primary)"
                    >
                        {{ project.title }}
                    </h3>

                    <!-- Description -->
                    <p
                        class="text-sm mb-4"
                        style="
                            color: var(--color-text-secondary);
                            line-height: 1.6;
                            height: 3rem;
                            overflow: hidden;
                            display: -webkit-box;
                            line-clamp: 2;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        "
                    >
                        {{ project.description }}
                    </p>

                    <!-- Tech Stack -->
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span
                            v-for="(tech, idx) in (project.tech_stack || []).slice(0, 3)"
                            :key="`${project.id}-${idx}`"
                            class="px-2 py-1 rounded text-xs"
                            style="
                                background: rgba(37, 99, 235, 0.1);
                                color: var(--color-primary);
                            "
                        >
                            {{ tech }}
                        </span>
                        <span
                            v-if="(project.tech_stack || []).length > 3"
                            class="px-2 py-1 rounded text-xs"
                            style="
                                background: rgba(148, 163, 184, 0.1);
                                color: var(--color-text-secondary);
                            "
                        >
                            +{{ project.tech_stack.length - 3 }}
                        </span>
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-3">
                        <a
                            v-if="project.github_url"
                            :href="project.github_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex-1 px-4 py-2 rounded-md text-sm font-semibold text-center transition-all duration-200"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                                text-decoration: none;
                            "
                        >
                            Code
                        </a>
                        <a
                            v-if="project.live_url"
                            :href="project.live_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex-1 px-4 py-2 rounded-md text-sm font-semibold text-center transition-all duration-200"
                            style="
                                background: linear-gradient(135deg, var(--color-primary), rgba(56, 189, 248, 0.8));
                                color: white;
                                text-decoration: none;
                            "
                        >
                            Live
                        </a>
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

.mb-4 {
    margin-bottom: 1rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.gap-8 {
    gap: 2rem;
}

.gap-3 {
    gap: 0.75rem;
}

.gap-2 {
    gap: 0.5rem;
}

.text-4xl {
    font-size: 2.25rem;
}

.text-xl {
    font-size: 1.25rem;
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

.rounded-md {
    border-radius: 0.375rem;
}

.overflow-hidden {
    overflow: hidden;
}

.grid {
    display: grid;
}

.grid-cols-1 {
    grid-template-columns: 1fr;
}

.md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.h-48 {
    height: 12rem;
}

.w-full {
    width: 100%;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.flex-1 {
    flex: 1;
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

.p-6 {
    padding: 1.5rem;
}

.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.relative {
    position: relative;
}

.transition-all {
    transition: all 0.3s ease;
}

.duration-300 {
    transition-duration: 300ms;
}

.duration-200 {
    transition-duration: 200ms;
}

.max-w-7xl {
    max-width: 80rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.object-cover {
    object-fit: cover;
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

@media (max-width: 640px) {
    .sm\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .lg\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
</style>