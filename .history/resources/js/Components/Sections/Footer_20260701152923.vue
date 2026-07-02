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
    <div>
        <!-- Test solid icon -->
        <Icon icon="fa-solid fa-home" />

        <!-- Test brand icon -->
        <Icon icon="fab fa-github" />
    </div>
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
