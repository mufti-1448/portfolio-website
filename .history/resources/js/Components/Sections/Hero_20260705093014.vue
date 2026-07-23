<script setup>
import Button from "@/Components/UI/Button.vue";
</script>

<template>
    <!-- Hero Section -->
    <section
        id="home"
        class="relative min-h-screen flex items-center justify-center overflow-hidden"
        style="background-color: transparent"
    >
        <!-- Background Elements -->
        <div
            style="
                position: absolute;
                inset: 0;
                pointer-events: none;
                z-index: 0;
            "
        >
            <!-- Animated Gradient -->
            <div
                style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        -45deg,
                        #2563eb,
                        #38bdf8,
                        #1e293b,
                        #2563eb
                    );
                    background-size: 400% 400%;
                    animation: gradientShift 15s ease infinite;
                    opacity: 0.5;
                    filter: blur(100px);
                    z-index: 1;
                "
            ></div>

            <!-- Grid Pattern -->
            <div
                style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image:
                        linear-gradient(
                            0deg,
                            transparent 24%,
                            rgba(56, 189, 248, 0.05) 25%,
                            rgba(56, 189, 248, 0.05) 26%,
                            transparent 27%,
                            transparent 74%,
                            rgba(56, 189, 248, 0.05) 75%,
                            rgba(56, 189, 248, 0.05) 76%,
                            transparent 77%,
                            transparent
                        ),
                        linear-gradient(
                            90deg,
                            transparent 24%,
                            rgba(56, 189, 248, 0.05) 25%,
                            rgba(56, 189, 248, 0.05) 26%,
                            transparent 27%,
                            transparent 74%,
                            rgba(56, 189, 248, 0.05) 75%,
                            rgba(56, 189, 248, 0.05) 76%,
                            transparent 77%,
                            transparent
                        );
                    background-size: 60px 60px;
                    z-index: 2;
                "
            ></div>

            <!-- Floating Blur Elements -->
            <div
                style="
                    position: absolute;
                    top: 20%;
                    right: 10%;
                    width: 300px;
                    height: 300px;
                    border-radius: 9999px;
                    background: rgba(56, 189, 248, 0.1);
                    filter: blur(50px);
                    animation: floating 8s ease-in-out infinite;
                "
            ></div>
            <div
                style="
                    position: absolute;
                    bottom: 20%;
                    left: 10%;
                    width: 300px;
                    height: 300px;
                    border-radius: 9999px;
                    background: rgba(37, 99, 235, 0.1);
                    filter: blur(50px);
                    animation: floating 10s ease-in-out infinite;
                    animation-delay: 2s;
                "
            ></div>
        </div>

        <!-- Content -->
        <div
            class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            style="animation: fadeIn 600ms ease-out forwards"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <!-- Left Column: Text Content -->
                <div>
                    <!-- NEW BADGE COMPONENT (Option 3 - Premium) -->
                    <div
                        class="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-lg"
                        style="
                            background: rgba(56, 189, 248, 0.05);
                            border: 1px solid rgba(56, 189, 248, 0.2);
                            backdrop-filter: blur(10px);
                            animation: badgeGlow 3s ease-in-out infinite;
                        "
                    >
                        <!-- Icon: FontAwesome fa-dot-circle dengan glow -->
                        <Icon
                            icon="fa-solid fa-dot-circle"
                            style="
                                color: var(--color-accent);
                                font-size: 0.875rem;
                                animation: dotPulse 2s ease-in-out infinite;
                            "
                        />

                        <!-- Text: Available for Projects -->
                        <span
                            class="text-sm font-semibold"
                            style="
                                color: var(--color-accent);
                                letter-spacing: 0.05em;
                            "
                        >
                            Available for Projects
                        </span>
                    </div>

                    <!-- Hero Heading -->
                    <h1
                        class="text-5xl md:text-6xl font-bold mb-4 leading-tight"
                        style="
                            animation: slideInUp 400ms ease-out 80ms forwards;
                            opacity: 0;
                        "
                    >
                        <span style="color: var(--color-text-primary)"
                            >Hi, I'm</span
                        >
                        <span
                            style="
                                background: linear-gradient(
                                    135deg,
                                    #38bdf8 0%,
                                    #2563eb 100%
                                );
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            "
                        >
                            Ali
                        </span>
                    </h1>

                    <!-- Subheading -->
                    <h2
                        class="text-xl md:text-2xl font-medium mb-6"
                        style="
                            color: var(--color-text-secondary);
                            animation: slideInUp 400ms ease-out 160ms forwards;
                            opacity: 0;
                        "
                    >
                        Information Systems Student at
                        <span
                            style="
                                color: var(--color-text-primary);
                                font-weight: 600;
                            "
                        >
                            Telkom University
                        </span>
                    </h2>

                    <!-- Description -->
                    <p
                        class="text-lg mb-8 leading-relaxed max-w-lg"
                        style="
                            color: var(--color-text-secondary);
                            animation: slideInUp 400ms ease-out 240ms forwards;
                            opacity: 0;
                        "
                    >
                        Passionate about Web Development, Software Engineering,
                        UI/UX, and Database Design. Building digital products
                        and continuously learning modern technologies.
                    </p>

                    <!-- CTA Buttons -->
                    <div
                        class="flex flex-col sm:flex-row gap-4"
                        style="
                            animation: slideInUp 400ms ease-out 320ms forwards;
                            opacity: 0;
                        "
                    >
                        <Button variant="primary" size="md">
                            View Projects
                        </Button>
                        <Button variant="secondary" size="md">
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div
                    style="
                        animation: slideInRight 40ms ease-out 160ms forwards;
                        opacity: 0;
                    "
                >
                    <div
                        class="relative w-full aspect-square rounded-2xl overflow-hidden"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                            max-width: 400px;
                            margin: 0 auto;
                            transition: transform 0.3s ease;
                            cursor: pointer;
                        "
                        @mouseenter="
                            $event.currentTarget.style.transform =
                                'perspective(1000px) rotateY(5deg) rotateX(-2deg)'
                        "
                        @mouseleave="
                            $event.currentTarget.style.transform =
                                'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                        "
                    >
                        <img
                            src="/images/profile.jpeg"
                            alt="Foto profil Ali"
                            style="
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                display: block;
                            "
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div
            style="
                position: absolute;
                bottom: 40px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10;
                animation: bounce 2s ease-in-out infinite;
            "
        >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: var(--color-accent); opacity: 0.5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </div>
    </section>
</template>

<style scoped>
/* ========================================
   UTILITY CLASSES: Layout & Typography
   ======================================== */

.min-h-screen {
    min-height: 100vh;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.overflow-hidden {
    overflow: hidden;
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

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-8 {
    margin-bottom: 2rem;
}

.text-5xl {
    font-size: 3rem;
}

.md\:text-6xl {
    font-size: 3.75rem;
}

.font-bold {
    font-weight: 700;
}

.leading-tight {
    line-height: 1.25;
}

.text-xl {
    font-size: 1.25rem;
}

.md\:text-2xl {
    font-size: 1.5rem;
}

.font-medium {
    font-weight: 500;
}

.text-lg {
    font-size: 1.125rem;
}

.leading-relaxed {
    line-height: 1.625;
}

.max-w-lg {
    max-width: 32rem;
}

.flex-col {
    flex-direction: column;
}

.sm\:flex-row {
    flex-direction: row;
}

.gap-4 {
    gap: 1rem;
}

.gap-3 {
    gap: 0.75rem;
}

.aspect-square {
    aspect-ratio: 1 / 1;
}

.rounded-2xl {
    border-radius: 1rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.w-full {
    width: 100%;
}

.h-full {
    height: 100%;
}

.w-6 {
    width: 1.5rem;
}

.h-6 {
    height: 1.5rem;
}

.gap-2 {
    gap: 0.5rem;
}

.text-sm {
    font-size: 0.875rem;
}

.font-semibold {
    font-weight: 600;
}

.uppercase {
    text-transform: uppercase;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.inline-block {
    display: inline-block;
}

.inline-flex {
    display: inline-flex;
}

/* ========================================
   RESPONSIVE: Mobile Optimization
   ======================================== */

@media (max-width: 768px) {
    .md\:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .md\:text-6xl {
        font-size: 2.25rem;
    }

    .md\:text-2xl {
        font-size: 1.25rem;
    }

    .gap-12 {
        gap: 2rem;
    }
}
</style>

<!-- GLOBAL KEYFRAMES - TIDAK scoped, accessible dari inline styles -->
<style>
/**
 * IMPORTANT NOTE:
 * Keyframes di-define di <style> GLOBAL (tanpa scoped attribute)
 * agar dapat di-akses dari inline style attributes di template.
 * 
 * Alasan:
 * - Vue scoped CSS menambahkan attribute selector ke setiap rule
 * - Keyframes tidak bisa di-scope dengan attribute selector
 * - Hasil: Keyframes defined di <style scoped> tidak accessible dari inline styles
 * 
 * Solusi: Pisahkan keyframes ke <style> global (ini file)
 * Dan keep utility classes di <style scoped> untuk organization yang lebih baik
 */

@keyframes badgeGlow {
    0% {
        box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
        border-color: rgba(56, 189, 248, 0.2);
    }
    50% {
        box-shadow: 0 0 10px 3px rgba(56, 189, 248, 0.2);
        border-color: rgba(56, 189, 248, 0.4);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
        border-color: rgba(56, 189, 248, 0.2);
    }
}

@keyframes dotPulse {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.1);
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

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes floating {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes bounce {
    0%,
    100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(10px);
    }
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
