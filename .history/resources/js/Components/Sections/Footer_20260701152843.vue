<script setup>
const currentYear = new Date().getFullYear();

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: "🐙", label: "GitHub", href: "https://github.com" },
    { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "𝕏", label: "Twitter", href: "https://twitter.com" },
    { icon: "📧", label: "Email", href: "mailto:ali@example.com" },
];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
    <!-- Footer -->
    <footer
        class="relative border-t"
        style="
            border-color: rgba(148, 163, 184, 0.1);
            background-color: var(--color-bg-secondary);
        "
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Footer Content -->
            <div class="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Brand Column -->
                <div>
                    <div class="mb-4 flex items-center gap-2">
                        <span
                            class="text-2xl font-bold"
                            style="color: var(--color-accent)"
                        >
                            &lt;/&gt;
                        </span>
                        <span
                            class="text-lg font-semibold"
                            style="color: var(--color-text-primary)"
                        >
                            Ali
                        </span>
                    </div>
                    <p
                        class="text-sm"
                        style="
                            color: var(--color-text-secondary);
                            line-height: 1.6;
                        "
                    >
                        Information Systems Student & Developer building digital
                        experiences with code and design.
                    </p>
                </div>

                <!-- Quick Links Column 1 -->
                <div>
                    <h4
                        class="text-sm font-semibold mb-4"
                        style="color: var(--color-text-primary)"
                    >
                        Navigation
                    </h4>
                    <nav class="space-y-2">
                        <a
                            v-for="link in footerLinks.slice(0, 3)"
                            :key="link.href"
                            :href="link.href"
                            class="block text-sm transition-colors duration-200"
                            style="color: var(--color-text-secondary)"
                            @mouseenter="
                                $event.target.style.color =
                                    'var(--color-accent)'
                            "
                            @mouseleave="
                                $event.target.style.color =
                                    'var(--color-text-secondary)'
                            "
                        >
                            {{ link.label }}
                        </a>
                    </nav>
                </div>

                <!-- Quick Links Column 2 -->
                <div>
                    <h4
                        class="text-sm font-semibold mb-4"
                        style="color: var(--color-text-primary)"
                    >
                        Services
                    </h4>
                    <nav class="space-y-2">
                        <a
                            v-for="link in footerLinks.slice(3, 6)"
                            :key="link.href"
                            :href="link.href"
                            class="block text-sm transition-colors duration-200"
                            style="color: var(--color-text-secondary)"
                            @mouseenter="
                                $event.target.style.color =
                                    'var(--color-accent)'
                            "
                            @mouseleave="
                                $event.target.style.color =
                                    'var(--color-text-secondary)'
                            "
                        >
                            {{ link.label }}
                        </a>
                    </nav>
                </div>

                <!-- Social Links Column -->
                <div>
                    <h4
                        class="text-sm font-semibold mb-4"
                        style="color: var(--color-text-primary)"
                    >
                        Connect
                    </h4>
                    
                    <div class="flex gap-3">
                        <a
                            v-for="social in socialLinks"
                            :key="social.label"
                            :href="social.href"
                            :title="social.label"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
                            style="
                                background: var(--glass-background);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                font-size: 1.25rem;
                            "
                            @mouseenter="
                                $event.currentTarget.style.borderColor =
                                    'rgba(56, 189, 248, 0.4)';
                                $event.currentTarget.style.transform =
                                    'translateY(-4px)';
                            "
                            @mouseleave="
                                $event.currentTarget.style.borderColor =
                                    'rgba(148, 163, 184, 0.2)';
                                $event.currentTarget.style.transform =
                                    'translateY(0)';
                            "
                        >
                            {{ social.icon }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <div
                style="
                    height: 1px;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(56, 189, 248, 0.2),
                        transparent
                    );
                "
            ></div>

            <!-- Footer Bottom -->
            <div
                class="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
            >
                <!-- Copyright -->
                <p class="text-sm" style="color: var(--color-text-secondary)">
                    &copy; {{ currentYear }} Ali. All rights reserved.
                </p>

                <!-- Back to Top Button -->
                <button
                    @click="scrollToTop"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
                    style="
                        background: var(--glass-background);
                        border: 1.5px solid rgba(148, 163, 184, 0.2);
                        color: var(--color-text-secondary);
                    "
                    @mouseenter="
                        $event.currentTarget.style.borderColor =
                            'rgba(56, 189, 248, 0.4)';
                        $event.currentTarget.style.color =
                            'var(--color-accent)';
                    "
                    @mouseleave="
                        $event.currentTarget.style.borderColor =
                            'rgba(148, 163, 184, 0.2)';
                        $event.currentTarget.style.color =
                            'var(--color-text-secondary)';
                    "
                >
                    <span>Back to Top</span>
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </footer>
</template>

<style scoped>
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

.py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.grid {
    display: grid;
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.gap-8 {
    gap: 2rem;
}

.gap-4 {
    gap: 1rem;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
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

.font-bold {
    font-weight: 700;
}

.font-semibold {
    font-weight: 600;
}

.space-y-2 > * + * {
    margin-top: 0.5rem;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.md\:flex-row {
    flex-direction: row;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.border-t {
    border-top-width: 1px;
}

.w-10 {
    width: 2.5rem;
}

.h-10 {
    height: 2.5rem;
}

.w-4 {
    width: 1rem;
}

.h-4 {
    height: 1rem;
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.transition-colors {
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}

.duration-200 {
    transition-duration: 200ms;
}

.block {
    display: block;
}

.fill-none {
    fill: none;
}

@media (max-width: 768px) {
    .md\:grid-cols-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .md\:flex-row {
        flex-direction: column;
    }

    .gap-8 {
        gap: 1.5rem;
    }
}

svg {
    stroke: currentColor;
}

button {
    cursor: pointer;
}
</style>
