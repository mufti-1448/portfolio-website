<script setup>
import Card from "@/Components/UI/Card.vue";
</script>

<template>
    <!-- About Section -->
    <section
        id="about"
        class="relative py-20 overflow-hidden"
        style="background-color: transparent"
    >
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Title -->
            <div class="mb-16">
                <h2
                    class="text-4xl md:text-5xl font-bold"
                    style="color: var(--color-text-primary)"
                >
                    About
                    <span style="color: var(--color-accent)">Me</span>
                </h2>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <!-- Left Column: Image -->
                <div style="animation: slideInLeft 600ms ease-out forwards">
                    <div
                        class="relative w-full rounded-2xl overflow-hidden"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                            aspect-ratio: 3/4;
                            max-width: 300px;
                        "
                    >
                        <div
                            style="
                                width: 100%;
                                height: 100%;
                                background: linear-gradient(
                                    135deg,
                                    rgba(56, 189, 248, 0.1),
                                    rgba(37, 99, 235, 0.1)
                                );
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: var(--color-text-tertiary);
                            "
                        >
                            About Image
                        </div>
                    </div>
                </div>

                <!-- Right Column: Content Cards -->
                <div
                    class="space-y-6"
                    style="animation: slideInRight 600ms ease-out forwards"
                >
                    <!-- Who I Am Card -->
                    <Card>
                        <h3
                            class="text-xl font-semibold mb-3"
                            style="color: var(--color-text-primary)"
                        >
                            Who I Am
                        </h3>
                        <p
                            style="
                                color: var(--color-text-secondary);
                                line-height: 1.6;
                            "
                        >
                            I am an Information Systems student at Telkom
                            University with a deep passion for crafting digital
                            experiences. My journey in tech is driven by a
                            desire to bridge the gap between complex backend
                            systems and intuitive user interfaces. I believe in
                            writing clean code and designing with the user in
                            mind.
                        </p>
                    </Card>

                    <!-- Education Card -->
                    <Card>
                        <h3
                            class="text-xl font-semibold mb-3"
                            style="color: var(--color-text-primary)"
                        >
                            Education
                        </h3>
                        <div style="color: var(--color-text-secondary)">
                            <p
                                class="font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Telkom University
                            </p>
                            <p class="text-sm mb-2">
                                Bachelor of Information Systems
                            </p>
                            <p
                                class="text-sm"
                                style="color: var(--color-accent)"
                            >
                                2023 - Present
                            </p>
                        </div>
                    </Card>

                    <!-- Goals Card -->
                    <Card>
                        <h3
                            class="text-xl font-semibold mb-3"
                            style="color: var(--color-text-primary)"
                        >
                            Career Goals
                        </h3>
                        <p
                            style="
                                color: var(--color-text-secondary);
                                line-height: 1.6;
                            "
                        >
                            To become a Full-Stack Developer capable of leading
                            architectural decisions and creating impactful
                            software solutions that solve real-world problems.
                            Committed to continuous learning and staying updated
                            with modern technologies.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
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

.gap-12 {
    gap: 3rem;
}

.mb-16 {
    margin-bottom: 4rem;
}

.mb-3 {
    margin-bottom: 0.75rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
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

.space-y-6 > * + * {
    margin-top: 1.5rem;
}

.rounded-2xl {
    border-radius: 1rem;
}

.w-full {
    width: 100%;
}

.h-full {
    height: 100%;
}

.overflow-hidden {
    overflow: hidden;
}

.aspect-square {
    aspect-ratio: 1 / 1;
}

.items-start {
    align-items: flex-start;
}

@media (max-width: 768px) {
    .md\:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .md\:text-5xl {
        font-size: 2.25rem;
    }

    .gap-12 {
        gap: 2rem;
    }
}
</style>
