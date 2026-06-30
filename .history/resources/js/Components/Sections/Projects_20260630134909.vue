<script setup>
defineProps({
    projects: Array,
});
</script>

<template>
    <!-- Projects Section -->
    <section
        id="projects"
        class="relative py-20"
        style="background-color: var(--color-bg-primary)"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mb-16 flex justify-between items-end">
                <div>
                    <h2
                        class="text-4xl md:text-5xl font-bold"
                        style="color: var(--color-text-primary)"
                    >
                        Featured
                        <span style="color: var(--color-accent)">Projects</span>
                    </h2>
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-top: 8px;
                        "
                    >
                        A selection of my recent work in web development and
                        design.
                    </p>
                </div>
            </div>

            <!-- Projects Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                "
            >
                {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-6">
                <span
                    v-for="tech in project.tech_stack?.slice(0, 3)"
                    :key="`${project.id}-${tech}`"
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
                        background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
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

            <!-- View All Button (Mobile) -->
            <div class="md:hidden mt-12 text-center">
                <Button variant="secondary" size="lg">
                    View All Projects
                </Button>
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

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-8 {
    gap: 2rem;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

.mb-16 {
    margin-bottom: 4rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mt-12 {
    margin-top: 3rem;
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

.text-xl {
    font-size: 1.25rem;
}

.font-semibold {
    font-weight: 600;
}

.text-sm {
    font-size: 0.875rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.overflow-hidden {
    overflow: hidden;
}

.h-48 {
    height: 12rem;
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

.p-6 {
    padding: 1.5rem;
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

.flex-wrap {
    flex-wrap: wrap;
}

.flex-1 {
    flex: 1;
}

.items-end {
    align-items: flex-end;
}

.justify-between {
    justify-content: space-between;
}

.rounded-md {
    border-radius: 0.375rem;
}

.text-center {
    text-align: center;
}

.hidden {
    display: none;
}

.md\:block {
    display: block;
}

.md\:hidden {
    display: none;
}

@media (max-width: 768px) {
    .md\:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .md\:text-5xl {
        font-size: 2.25rem;
    }

    .md\:block {
        display: none;
    }

    .md\:hidden {
        display: block;
    }
}

.project-card {
    display: flex;
    flex-direction: column;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
