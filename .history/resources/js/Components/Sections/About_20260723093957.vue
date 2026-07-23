<script setup>
// Tidak perlu import Card lagi (remove)
// Hanya perlu Icon untuk location & education icons
</script>

<template>
    <!-- About Section -->
    <section
        id="about"
        class="relative py-20"
        style="background-color: var(--color-bg-primary); scroll-margin-top: 80px"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <!-- LEFT COLUMN: Profile Card with Info -->
                <div
                    style="
                        animation: slideInLeft 400ms ease-out 80ms forwards;
                        opacity: 0;
                    "
                >
                    <!-- Profile Card Container -->
                    <div
                        class="relative rounded-2xl overflow-hidden"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                            padding: 1.5rem;
                            max-width: 350px;
                            margin: 0 auto;
                        "
                    >
                        <!-- Profile Image -->
                        <div
                            style="
                                width: 100%;
                                aspect-ratio: 1;
                                border-radius: 1rem;
                                overflow: hidden;
                                margin-bottom: 1.5rem;
                                background: linear-gradient(
                                    135deg,
                                    rgba(56, 189, 248, 0.1),
                                    rgba(37, 99, 235, 0.1)
                                );
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

                        <!-- Profile Name -->
                        <h3
                            class="text-xl font-bold text-center mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            M. Khafidhin Mufti Ali
                        </h3>

                        <!-- Location Info -->
                        <div
                            class="flex items-center gap-2 mb-3 justify-center"
                            style="
                                color: var(--color-text-secondary);
                                font-size: 0.875rem;
                            "
                        >
                            <Icon icon="fa-solid fa-location-dot" style="color: var(--color-accent); font-size: 1rem;" />
                            <span>Bandung, Jawa Barat</span>
                        </div>

                        <!-- Education Info -->
                        <div
                            class="flex items-center gap-2 justify-center"
                            style="
                                color: var(--color-text-secondary);
                                font-size: 0.875rem;
                                padding-top: 1rem;
                                border-top: 1px solid rgba(148, 163, 184, 0.1);
                            "
                        >
                            <Icon icon="fa-solid fa-graduation-cap" style="color: var(--color-primary); font-size: 1rem;" />
                            <span>Lulusan SMK Syafi'i Akrom</span>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: Content & Stats & Skills -->
                <div
                    style="
                        animation: slideInRight 400ms ease-out 80ms forwards;
                        opacity: 0;
                    "
                >
                    <!-- Who I Am Section (NO CARD - Pure Text) -->
                    <div class="mb-12">
                        <h2
                            class="text-2xl font-bold mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            Who I Am
                        </h2>
                        <p
                            style="
                                color: var(--color-text-secondary);
                                line-height: 1.8;
                                font-size: 1.0625rem;
                            "
                        >
                            I am an Information Systems student at Telkom University with a deep passion for
                            crafting digital experiences. My journey in tech is driven by a desire to bridge the gap
                            between complex backend systems and intuitive user interfaces. I believe in writing clean
                            code and designing with the user in mind. Currently expanding my skills in full-stack
                            development, UI/UX design, and modern web technologies.
                        </p>
                    </div>

                    <!-- Stat Cards Section -->
                    <div
                        class="grid grid-cols-3 gap-4 mb-12"
                        style="
                            animation: slideInUp 400ms ease-out 160ms forwards;
                            opacity: 0;
                        "
                    >
                        <!-- Stat Card 1: Years -->
                        <div
                            class="rounded-lg p-6 text-center"
                            style="
                                border: 2px solid var(--color-accent);
                                background: rgba(56, 189, 248, 0.03);
                                transition: transform 0.3s ease, box-shadow 0.3s ease;
                                cursor: pointer;
                            "
                            @mouseenter="
                                $event.currentTarget.style.transform = 'scale(1.05)';
                                $event.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3)';
                            "
                            @mouseleave="
                                $event.currentTarget.style.transform = 'scale(1)';
                                $event.currentTarget.style.boxShadow = 'none';
                            "
                        >
                            <div
                                class="text-3xl font-bold mb-1"
                                style="color: var(--color-accent)"
                            >
                                3+
                            </div>
                            <div
                                class="text-xs font-semibold tracking-wider uppercase"
                                style="color: var(--color-text-secondary)"
                            >
                                Years
                            </div>
                        </div>

                        <!-- Stat Card 2: Projects -->
                        <div
                            class="rounded-lg p-6 text-center"
                            style="
                                border: 2px solid var(--color-accent);
                                background: rgba(56, 189, 248, 0.03);
                                transition: transform 0.3s ease, box-shadow 0.3s ease;
                                cursor: pointer;
                            "
                            @mouseenter="
                                $event.currentTarget.style.transform = 'scale(1.05)';
                                $event.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3)';
                            "
                            @mouseleave="
                                $event.currentTarget.style.transform = 'scale(1)';
                                $event.currentTarget.style.boxShadow = 'none';
                            "
                        >
                            <div
                                class="text-3xl font-bold mb-1"
                                style="color: var(--color-accent)"
                            >
                                10+
                            </div>
                            <div
                                class="text-xs font-semibold tracking-wider uppercase"
                                style="color: var(--color-text-secondary)"
                            >
                                Projects
                            </div>
                        </div>

                        <!-- Stat Card 3: Satisfaction -->
                        <div
                            class="rounded-lg p-6 text-center"
                            style="
                                border: 2px solid var(--color-accent);
                                background: rgba(56, 189, 248, 0.03);
                                transition: transform 0.3s ease, box-shadow 0.3s ease;
                                cursor: pointer;
                            "
                            @mouseenter="
                                $event.currentTarget.style.transform = 'scale(1.05)';
                                $event.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3)';
                            "
                            @mouseleave="
                                $event.currentTarget.style.transform = 'scale(1)';
                                $event.currentTarget.style.boxShadow = 'none';
                            "
                        >
                            <div
                                class="text-3xl font-bold mb-1"
                                style="color: var(--color-accent)"
                            >
                                0%
                            </div>
                            <div
                                class="text-xs font-semibold tracking-wider uppercase"
                                style="color: var(--color-text-secondary)"
                            >
                                Satisfaction
                            </div>
                        </div>
                    </div>

                    <!-- Skill Badges Section -->
                    <div
                        style="
                            animation: slideInUp 400ms ease-out 240ms forwards;
                            opacity: 0;
                        "
                    >
                        <h3
                            class="text-lg font-semibold mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            Skills & Qualities
                        </h3>
                        
                        <!-- Badges Flex Container -->
                        <div class="flex flex-wrap gap-3">
                            <!-- Badge 1: Clean Code -->
                            <span
                                class="px-4 py-2 rounded-lg text-sm font-semibold inline-block"
                                style="
                                    background: rgba(56, 189, 248, 0.1);
                                    border: 1px solid rgba(56, 189, 248, 0.3);
                                    backdrop-filter: blur(10px);
                                    color: var(--color-accent);
                                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                                    cursor: pointer;
                                "
                                @mouseenter="
                                    $event.currentTarget.style.transform = 'scale(1.08)';
                                    $event.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
                                "
                                @mouseleave="
                                    $event.currentTarget.style.transform = 'scale(1)';
                                    $event.currentTarget.style.boxShadow = 'none';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                                "
                            >
                                Clean Code
                            </span>

                            <!-- Badge 2: Fast Loading -->
                            <span
                                class="px-4 py-2 rounded-lg text-sm font-semibold inline-block"
                                style="
                                    background: rgba(56, 189, 248, 0.1);
                                    border: 1px solid rgba(56, 189, 248, 0.3);
                                    backdrop-filter: blur(10px);
                                    color: var(--color-accent);
                                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                                    cursor: pointer;
                                "
                                @mouseenter="
                                    $event.currentTarget.style.transform = 'scale(1.08)';
                                    $event.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
                                "
                                @mouseleave="
                                    $event.currentTarget.style.transform = 'scale(1)';
                                    $event.currentTarget.style.boxShadow = 'none';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                                "
                            >
                                Fast Loading
                            </span>

                            <!-- Badge 3: SEO Friendly -->
                            <span
                                class="px-4 py-2 rounded-lg text-sm font-semibold inline-block"
                                style="
                                    background: rgba(56, 189, 248, 0.1);
                                    border: 1px solid rgba(56, 189, 248, 0.3);
                                    backdrop-filter: blur(10px);
                                    color: var(--color-accent);
                                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                                    cursor: pointer;
                                "
                                @mouseenter="
                                    $event.currentTarget.style.transform = 'scale(1.08)';
                                    $event.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
                                "
                                @mouseleave="
                                    $event.currentTarget.style.transform = 'scale(1)';
                                    $event.currentTarget.style.boxShadow = 'none';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                                "
                            >
                                SEO Friendly
                            </span>

                            <!-- Badge 4: Production Ready -->
                            <span
                                class="px-4 py-2 rounded-lg text-sm font-semibold inline-block"
                                style="
                                    background: rgba(56, 189, 248, 0.1);
                                    border: 1px solid rgba(56, 189, 248, 0.3);
                                    backdrop-filter: blur(10px);
                                    color: var(--color-accent);
                                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                                    cursor: pointer;
                                "
                                @mouseenter="
                                    $event.currentTarget.style.transform = 'scale(1.08)';
                                    $event.currentTarget.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
                                "
                                @mouseleave="
                                    $event.currentTarget.style.transform = 'scale(1)';
                                    $event.currentTarget.style.boxShadow = 'none';
                                    $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                                "
                            >
                                Production Ready
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* ========================================
   UTILITY CLASSES: Layout & Typography
   ======================================== */

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

.grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-12 {
    gap: 3rem;
}

.gap-4 {
    gap: 1rem;
}

.gap-3 {
    gap: 0.75rem;
}

.gap-2 {
    gap: 0.5rem;
}

.mb-16 {
    margin-bottom: 4rem;
}

.mb-12 {
    margin-bottom: 3rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-3 {
    margin-bottom: 0.75rem;
}

.mb-1 {
    margin-bottom: 0.25rem;
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

.text-2xl {
    font-size: 1.5rem;
}

.text-xl {
    font-size: 1.25rem;
}

.text-lg {
    font-size: 1.125rem;
}

.text-3xl {
    font-size: 1.875rem;
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

.rounded-2xl {
    border-radius: 1rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.rounded {
    border-radius: 0.25rem;
}

.overflow-hidden {
    overflow: hidden;
}

.items-start {
    align-items: flex-start;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.flex {
    display: flex;
}

.flex-wrap {
    flex-wrap: wrap;
}

.inline-block {
    display: inline-block;
}

.uppercase {
    text-transform: uppercase;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

/* ========================================
   RESPONSIVE: Mobile Optimization
   ======================================== */

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

    .grid-cols-3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 480px) {
    .grid-cols-3 {
        grid-template-columns: 1fr;
    }
}
</style>

<!-- GLOBAL KEYFRAMES - TIDAK scoped, accessible dari inline styles -->
<!-- IMPORTANT: Apply lesson dari Hero section - keyframes HARUS di global <style> -->
<style>
/**
 * KEYFRAMES EXPLAINED:
 * 
 * slideInLeft: Element slides in dari kiri
 * slideInRight: Element slides in dari kanan
 * slideInUp: Element slides in dari bawah
 * 
 * Timing:
 * - Duration: 400ms (faster daripada 600ms, lebih snappy)
 * - Easing: ease-out (smooth deceleration)
 * - Delays: 80ms increments (tighter rhythm)
 * 
 * Why global <style>?
 * - Keyframes di scoped CSS tidak accessible dari inline style attributes
 * - Learned dari Hero section implementation
 * - This is best practice untuk animations di Vue.js
 */

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