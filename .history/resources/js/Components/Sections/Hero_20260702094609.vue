<script setup>
/**
 * HERO SECTION COMPONENT
 *
 * Merged component yang menggabungkan:
 * - Hero content (greeting, badge, CTA buttons)
 * - About content (photo + description)
 * - Education & Goals cards
 *
 * Konsep: Single Responsibility Principle
 * Component ini bertanggung jawab hanya untuk "introduction" user
 * Semua content related to introduction ada di sini
 */

// Content data - hardcoded (static)
// Ini data yang jarang berubah, cocok untuk hardcoded
// Kalau nanti perlu edit via admin, bisa convert ke database
const aboutContent = {
    whoAmI: "Saya adalah mahasiswa Sistem Informasi di Universitas Telkom yang passionate tentang web development dan menciptakan solusi digital yang user-friendly. Saat ini saya fokus pada learning full-stack development, UI/UX design, dan membangun portofolio freelance.",

    education: {
        title: "Pendidikan",
        subtitle: "Mahasiswa Semester 5",
        description:
            "Program Studi Sistem Informasi, Fakultas Teknik Industri, Universitas Telkom, Bandung",
        icon: "fa-solid fa-graduation-cap",
    },

    goals: {
        title: "Tujuan Karir",
        subtitle: "Full-Stack Developer & Freelancer",
        description:
            "Menjadi developer yang kompeten dalam membangun aplikasi web scalable, sambil mengembangkan bisnis freelance untuk memberikan value kepada klien.",
        icon: "fa-solid fa-rocket",
    },
};

/**
 * PENJELASAN DATA STRUCTURE:
 *
 * Mengapa kita pisahkan data dari template?
 *
 * 1. Maintainability: Edit content hanya di script, tidak campur dengan template
 * 2. Scalability: Kalau nanti jadi database, hanya perlu ubah source data
 * 3. Clarity: Template tetap clean, fokus pada rendering
 * 4. Reusability: Bisa pakai data yang sama di multiple places
 *
 * Analogi: Resep masakan (data) terpisah dari cara memasak (template)
 * Content bisa berubah, cara render tetap sama
 */
</script>

<template>
    <section
        id="home"
        class="hero-section"
        style="
            background: var(--color-bg-primary);
            scroll-margin-top: 80px;
            padding-top: 5rem;
            padding-bottom: 5rem;
        "
    >
        <!-- ============================================ -->
        <!-- PART A: HERO GREETING & CTA -->
        <!-- ============================================ -->
        <div
            class="hero-container"
            style="max-width: 80rem; margin: 0 auto; padding: 0 1rem"
        >
            <!-- GREETING SECTION -->
            <div
                class="hero-greeting"
                style="text-align: left; margin-bottom: 4rem"
            >
                <!-- Badge: Available for Freelance -->
                <div
                    class="hero-badge"
                    style="
                        display: inline-block;
                        margin-bottom: 1.5rem;
                        padding: 0.75rem 1.5rem;
                        border-radius: 9999px;
                        background: rgba(56, 189, 248, 0.1);
                        border: 1px solid rgba(56, 189, 248, 0.3);
                    "
                >
                    <span
                        style="
                            color: var(--color-accent);
                            font-size: 0.875rem;
                            font-weight: 600;
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                        "
                    >
                        ✨ Available for Freelance
                    </span>
                </div>

                <!-- Main Title -->
                <h1
                    class="hero-title"
                    style="
                        font-size: 3.5rem;
                        font-weight: 700;
                        line-height: 1.2;
                        margin-bottom: 1rem;
                        color: var(--color-text-primary);
                    "
                >
                    Hello, I'm Ali
                </h1>

                <!-- Subtitle -->
                <p
                    class="hero-subtitle"
                    style="
                        font-size: 1.5rem;
                        font-weight: 600;
                        color: var(--color-primary);
                        margin-bottom: 1rem;
                    "
                >
                    Web Developer & UI/UX Enthusiast
                </p>

                <!-- Description -->
                <p
                    class="hero-description"
                    style="
                        font-size: 1.125rem;
                        line-height: 1.8;
                        color: var(--color-text-secondary);
                        max-width: 600px;
                        margin-bottom: 2rem;
                    "
                >
                    I build responsive and user-friendly websites using modern
                    technologies. Currently learning full-stack development and
                    exploring UI/UX design principles.
                </p>

                <!-- CTA Buttons -->
                <div
                    class="hero-cta-buttons"
                    style="display: flex; gap: 1rem; flex-wrap: wrap"
                >
                    <!-- Button 1: View Projects -->
                    <a
                        href="#projects"
                        class="hero-button hero-button-primary"
                        style="
                            display: inline-flex;
                            align-items: center;
                            gap: 0.75rem;
                            padding: 1rem 2rem;
                            border-radius: 0.5rem;
                            font-size: 1rem;
                            font-weight: 600;
                            text-decoration: none;
                            background: var(--color-primary);
                            color: white;
                            transition: all 0.3s ease;
                            border: none;
                            cursor: pointer;
                        "
                        @mouseenter="
                            $event.target.style.transform = 'translateY(-3px)'
                        "
                        @mouseleave="
                            $event.target.style.transform = 'translateY(0)'
                        "
                    >
                        <Icon
                            icon="fa-solid fa-arrow-right"
                            style="font-size: 1rem"
                        />
                        View My Projects
                    </a>

                    <!-- Button 2: Contact Me -->
                    <a
                        href="#contact"
                        class="hero-button hero-button-secondary"
                        style="
                            display: inline-flex;
                            align-items: center;
                            gap: 0.75rem;
                            padding: 1rem 2rem;
                            border-radius: 0.5rem;
                            font-size: 1rem;
                            font-weight: 600;
                            text-decoration: none;
                            background: transparent;
                            color: var(--color-primary);
                            border: 1.5px solid rgba(37, 99, 235, 0.3);
                            transition: all 0.3s ease;
                            cursor: pointer;
                        "
                        @mouseenter="
                            $event.target.style.background =
                                'rgba(37, 99, 235, 0.1)';
                            $event.target.style.transform = 'translateY(-3px)';
                        "
                        @mouseleave="
                            $event.target.style.background = 'transparent';
                            $event.target.style.transform = 'translateY(0)';
                        "
                    >
                        <Icon
                            icon="fa-solid fa-envelope"
                            style="font-size: 1rem"
                        />
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>

        <!-- ============================================ -->
        <!-- PART B: ABOUT SECTION (Photo + Description) -->
        <!-- ============================================ -->
        <div
            class="about-container"
            style="
                max-width: 80rem;
                margin: 0 auto;
                padding: 0 1rem;
                margin-top: 5rem;
                margin-bottom: 5rem;
            "
        >
            <div
                class="about-grid"
                style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    align-items: center;
                "
            >
                <!-- Left: Photo Placeholder -->
                <div
                    class="about-photo"
                    style="
                        background: linear-gradient(
                            135deg,
                            rgba(56, 189, 248, 0.1),
                            rgba(37, 99, 235, 0.1)
                        );
                        border-radius: 1rem;
                        border: 1px solid rgba(148, 163, 184, 0.2);
                        aspect-ratio: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 400px;
                    "
                >
                    <Icon
                        icon="fa-solid fa-user"
                        style="
                            font-size: 120px;
                            color: var(--color-text-secondary);
                            opacity: 0.5;
                        "
                    />
                </div>

                <!-- Right: About Description -->
                <div class="about-content">
                    <!-- Section Title -->
                    <h2
                        style="
                            font-size: 2.5rem;
                            font-weight: 700;
                            margin-bottom: 1rem;
                            color: var(--color-text-primary);
                        "
                    >
                        Who I Am?
                    </h2>

                    <!-- About Description -->
                    <p
                        style="
                            font-size: 1.125rem;
                            line-height: 1.8;
                            color: var(--color-text-secondary);
                            margin-bottom: 2rem;
                        "
                    >
                        {{ aboutContent.whoAmI }}
                    </p>

                    <!-- Call to Action Link -->
                    <a
                        href="#projects"
                        style="
                            display: inline-flex;
                            align-items: center;
                            gap: 0.75rem;
                            color: var(--color-primary);
                            text-decoration: none;
                            font-weight: 600;
                            transition: all 0.3s ease;
                        "
                        @mouseenter="
                            $event.target.style.color = 'var(--color-accent)'
                        "
                        @mouseleave="
                            $event.target.style.color = 'var(--color-primary)'
                        "
                    >
                        See my latest projects
                        <Icon
                            icon="fa-solid fa-arrow-right"
                            style="font-size: 1rem"
                        />
                    </a>
                </div>
            </div>
        </div>

        <!-- ============================================ -->
        <!-- PART C: EDUCATION & GOALS CARDS -->
        <!-- ============================================ -->
        <div
            class="cards-container"
            style="max-width: 80rem; margin: 0 auto; padding: 0 1rem"
        >
            <!-- Cards Grid: 2 columns (Education + Goals) -->
            <div
                class="cards-grid"
                style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem"
            >
                <!-- CARD 1: Education -->
                <div
                    class="info-card education-card"
                    style="
                        background: var(--glass-background);
                        border: var(--glass-border);
                        box-shadow: var(--glass-shadow);
                        padding: 2rem;
                        border-radius: 1rem;
                        transition: all 0.3s ease;
                    "
                    @mouseenter="
                        $event.currentTarget.style.transform =
                            'translateY(-8px)';
                        $event.currentTarget.style.borderColor =
                            'rgba(56, 189, 248, 0.4)';
                    "
                    @mouseleave="
                        $event.currentTarget.style.transform = 'translateY(0)';
                        $event.currentTarget.style.borderColor =
                            'rgba(148, 163, 184, 0.2)';
                    "
                >
                    <!-- Icon -->
                    <div
                        style="
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 4rem;
                            height: 4rem;
                            border-radius: 0.5rem;
                            background: rgba(56, 189, 248, 0.1);
                            margin-bottom: 1.5rem;
                        "
                    >
                        <Icon
                            :icon="aboutContent.education.icon"
                            style="font-size: 2rem; color: var(--color-accent)"
                        />
                    </div>

                    <!-- Title -->
                    <h3
                        style="
                            font-size: 1.25rem;
                            font-weight: 600;
                            color: var(--color-text-primary);
                            margin-bottom: 0.5rem;
                        "
                    >
                        {{ aboutContent.education.title }}
                    </h3>

                    <!-- Subtitle -->
                    <p
                        style="
                            font-size: 1rem;
                            font-weight: 600;
                            color: var(--color-primary);
                            margin-bottom: 0.75rem;
                        "
                    >
                        {{ aboutContent.education.subtitle }}
                    </p>

                    <!-- Description -->
                    <p
                        style="
                            font-size: 0.875rem;
                            line-height: 1.6;
                            color: var(--color-text-secondary);
                        "
                    >
                        {{ aboutContent.education.description }}
                    </p>
                </div>

                <!-- CARD 2: Goals -->
                <div
                    class="info-card goals-card"
                    style="
                        background: var(--glass-background);
                        border: var(--glass-border);
                        box-shadow: var(--glass-shadow);
                        padding: 2rem;
                        border-radius: 1rem;
                        transition: all 0.3s ease;
                    "
                    @mouseenter="
                        $event.currentTarget.style.transform =
                            'translateY(-8px)';
                        $event.currentTarget.style.borderColor =
                            'rgba(56, 189, 248, 0.4)';
                    "
                    @mouseleave="
                        $event.currentTarget.style.transform = 'translateY(0)';
                        $event.currentTarget.style.borderColor =
                            'rgba(148, 163, 184, 0.2)';
                    "
                >
                    <!-- Icon -->
                    <div
                        style="
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 4rem;
                            height: 4rem;
                            border-radius: 0.5rem;
                            background: rgba(37, 99, 235, 0.1);
                            margin-bottom: 1.5rem;
                        "
                    >
                        <Icon
                            :icon="aboutContent.goals.icon"
                            style="font-size: 2rem; color: var(--color-primary)"
                        />
                    </div>

                    <!-- Title -->
                    <h3
                        style="
                            font-size: 1.25rem;
                            font-weight: 600;
                            color: var(--color-text-primary);
                            margin-bottom: 0.5rem;
                        "
                    >
                        {{ aboutContent.goals.title }}
                    </h3>

                    <!-- Subtitle -->
                    <p
                        style="
                            font-size: 1rem;
                            font-weight: 600;
                            color: var(--color-primary);
                            margin-bottom: 0.75rem;
                        "
                    >
                        {{ aboutContent.goals.subtitle }}
                    </p>

                    <!-- Description -->
                    <p
                        style="
                            font-size: 0.875rem;
                            line-height: 1.6;
                            color: var(--color-text-secondary);
                        "
                    >
                        {{ aboutContent.goals.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/**
 * RESPONSIVE DESIGN STRATEGY
 * 
 * Menggunakan CSS media queries untuk handle different screen sizes
 * Mobile-first approach: base styles untuk mobile, kemudian add complexity untuk desktop
 * 
 * Breakpoints:
 * - mobile: < 768px
 * - tablet: 768px - 1024px
 * - desktop: > 1024px
 */

/* BASE STYLES (Mobile First) */

.hero-section {
    width: 100%;
}

.hero-container {
    width: 100%;
}

.hero-title {
    font-size: 2rem; /* Mobile: smaller title */
    word-break: break-word;
}

.hero-subtitle {
    font-size: 1.125rem;
}

.hero-description {
    font-size: 1rem;
    max-width: 100%;
}

.hero-cta-buttons {
    display: flex;
    flex-direction: column; /* Stack vertically on mobile */
    gap: 0.75rem;
}

.hero-button {
    width: 100%; /* Full width on mobile */
    justify-content: center;
}

/* About Grid - Stack vertically on mobile */
.about-grid {
    grid-template-columns: 1fr !important; /* Override inline style */
    gap: 2rem !important;
}

.about-photo {
    height: 300px !important; /* Smaller on mobile */
}

/* Cards Grid - Stack vertically on mobile */
.cards-grid {
    grid-template-columns: 1fr !important; /* Override inline style */
    gap: 1.5rem !important;
}

/* TABLET STYLES */
@media (min-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-cta-buttons {
        flex-direction: row; /* Side-by-side on tablet+ */
    }

    .hero-button {
        width: auto;
    }

    .about-grid {
        grid-template-columns: 1fr 1fr !important;
    }

    .cards-grid {
        grid-template-columns: 1fr 1fr !important;
    }
}

/* DESKTOP STYLES */
@media (min-width: 1024px) {
    .hero-title {
        font-size: 3.5rem;
    }

    .hero-description {
        font-size: 1.125rem;
    }
}

/* ANIMATION & INTERACTION CLASSES */

.hero-button:active {
    opacity: 0.8;
}

.info-card {
    cursor: pointer;
}

/* Smooth transitions */
* {
    transition-property: background-color, border-color, color;
    transition-timing-function: ease;
}

/* Accessibility: Preserve animations if user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
</style>
