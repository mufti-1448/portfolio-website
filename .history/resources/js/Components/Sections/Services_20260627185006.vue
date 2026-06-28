<script setup>
const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        icon: '💻',
        description: 'Building modern, responsive web applications with cutting-edge technologies.',
        features: [
            'Company Profile Website',
            'Portfolio Website',
            'Landing Page',
            'Web Application',
            'API Development',
        ],
    },
    {
        id: 2,
        title: 'UI/UX Design',
        icon: '🎨',
        description: 'Creating beautiful and intuitive user interfaces with focus on user experience.',
        features: [
            'Wireframe Design',
            'Figma Design',
            'Prototype Development',
            'Design System',
            'User Research',
        ],
    },
    {
        id: 3,
        title: 'Database Design',
        icon: '🗄️',
        description: 'Designing efficient and scalable database solutions for your applications.',
        features: [
            'Entity Relationship Diagram (ERD)',
            'Relational Database Design',
            'MySQL Database',
            'Database Optimization',
            'Data Modeling',
        ],
    },
];
</script>

<template>
    <!-- Services Section -->
    <section
        id="services"
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
                    Services I
                    <span style="color: var(--color-accent)">Offer</span>
                </h2>
                <p style="color: var(--color-text-secondary); margin-top: 8px;">
                    Comprehensive solutions tailored to your needs
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    v-for="(service, index) in servicesData"
                    :key="service.id"
                    class="service-card p-8 rounded-lg transition-all duration-300"
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
                    <!-- Icon -->
                    <div
                        class="w-16 h-16 rounded-lg mb-4 flex items-center justify-center text-4xl"
                        style="background: rgba(56, 189, 248, 0.1);"
                    >
                        {{ service.icon }}
                    </div>

                    <!-- Title -->
                    <h3
                        class="text-2xl font-semibold mb-3"
                        style="color: var(--color-text-primary)"
                    >
                        {{ service.title }}
                    </h3>

                    <!-- Description -->
                    <p
                        class="text-sm mb-6"
                        style="
                            color: var(--color-text-secondary);
                            line-height: 1.6;
                        "
                    >
                        {{ service.description }}
                    </p>

                    <!-- Features List -->
                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-wider"
                            style="color: var(--color-accent);"
                        >
                            What's Included:
                        </p>
                        <ul class="space-y-2">
                            <li
                                v-for="(feature, featureIndex) in service.features"
                                :key="`${service.id}-${featureIndex}`"
                                class="flex items-start gap-2 text-sm"
                                style="color: var(--color-text-secondary);"
                            >
                                <span
                                    style="
                                        color: var(--color-accent);
                                        margin-top: 4px;
                                    "
                                >
                                    ✓
                                </span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div
                class="mt-16 p-8 rounded-lg text-center"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                    animation: slideInUp 600ms ease-out 300ms forwards;
                    opacity: 0;
                "
            >
                <h3
                    class="text-2xl font-semibold mb-4"
                    style="color: var(--color-text-primary)"
                >
                    Interested in working together?
                </h3>
                <p style="color: var(--color-text-secondary); margin-bottom: 16px;">
                    Let's discuss your project and find the perfect solution for your needs.
                </p>
                <a
                    href="#contact"
                    class="inline-block px-8 py-3 rounded-md text-sm font-semibold transition-all duration-200"
                    style="
                        background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
                        color: var(--color-text-primary);
                        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                    "
                >
                    Get In Touch
                </a>
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

.md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-8 {
    gap: 2rem;
}

.mb-16 {
    margin-bottom: 4rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-3 {
    margin-bottom: 0.75rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
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

.text-sm {
    font-size: 0.875rem;
}

.text-xs {
    font-size: 0.75rem;
}

.rounded-lg {
    border-radius: 0.5rem;
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

.w-16 {
    width: 4rem;
}

.h-16 {
    height: 4rem;
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

.items-start {
    align-items: flex-start;
}

.justify-center {
    justify-content: center;
}

.gap-2 {
    gap: 0.5rem;
}

.space-y-3 > * + * {
    margin-top: 0.75rem;
}

.space-y-2 > * + * {
    margin-top: 0.5rem;
}

.uppercase {
    text-transform: uppercase;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.text-center {
    text-align: center;
}

.inline-block {
    display: inline-block;
}

.rounded-md {
    border-radius: 0.375rem;
}

.mt-4 {
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .md\:grid-cols-3 {
        grid-template-columns: 1fr;
    }

    .md\:text-5xl {
        font-size: 2.25rem;
    }
}

.service-card {
    display: flex;
    flex-direction: column;
}
</style>