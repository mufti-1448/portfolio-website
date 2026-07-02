<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Link } from "@inertiajs/vue3";

defineProps({
    title: String,
});

// ============================================
// STATE MANAGEMENT
// ============================================
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref("home");

/**
 * Menu items - TANPA icons
 * Hanya label saja, translated di template
 */
const menuItems = [
    { label: "navbar.home", id: "home" },
    { label: "navbar.about", id: "about" },
    { label: "navbar.skills", id: "skills" },
    { label: "navbar.projects", id: "projects" },
    { label: "navbar.contact", id: "contact" },
];

// ============================================
// SCROLL & INTERSECTION OBSERVER
// ============================================
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

const setupIntersectionObserver = () => {
    const options = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    menuItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
    });

    return observer;
};

let intersectionObserver = null;

onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    intersectionObserver = setupIntersectionObserver();
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    if (intersectionObserver) intersectionObserver.disconnect();
});

// ============================================
// EVENT HANDLERS
// ============================================
const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        isMobileMenuOpen.value = false;
    }
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
    <div style="background: var(--color-bg-primary)">
        <!-- ============================================ -->
        <!-- NAVBAR: STICKY HEADER -->
        <!-- ============================================ -->
        <nav
            class="navbar-sticky"
            :style="{
                background: isScrolled
                    ? 'rgba(15, 23, 42, 0.95)'
                    : 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: isScrolled
                    ? '1px solid rgba(148, 163, 184, 0.1)'
                    : 'none',
                height: '64px',
            }"
        >
            <div class="navbar-container">
                <!-- Logo/Brand -->
                <Link href="/" class="navbar-logo"> Ali </Link>

                <!-- Desktop Menu -->
                <div class="navbar-menu-desktop">
                    <a
                        v-for="item in menuItems"
                        :key="item.id"
                        :href="`#${item.id}`"
                        @click="scrollToSection($event, item.id)"
                        class="navbar-link"
                        :style="{
                            color:
                                activeSection === item.id
                                    ? 'var(--color-primary)'
                                    : 'var(--color-text-secondary)',
                        }"
                    >
                        <!-- PERUBAHAN: Gunakan t() function untuk translate text -->
                        {{ t(item.label) }}
                    </a>
                </div>

                <!-- Right Actions (CV + Mobile Menu) -->
                <div class="navbar-actions">

                    <!-- Download CV Button (Desktop) -->
                    <a
                        href="/files/cv-ali.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="navbar-cv-button navbar-cv-desktop"
                    >
                        {{ t("navbar.downloadCv") }}
                    </a>

                    <!-- Mobile Menu Toggle Button -->
                    <button
                        @click="toggleMobileMenu"
                        class="navbar-mobile-toggle"
                    >
                        <Icon
                            :icon="
                                isMobileMenuOpen
                                    ? 'fa-solid fa-xmark'
                                    : 'fa-solid fa-bars'
                            "
                        />
                    </button>
                </div>
            </div>

            <!-- Mobile Menu Dropdown -->
            <div v-if="isMobileMenuOpen" class="navbar-menu-mobile">
                <a
                    v-for="item in menuItems"
                    :key="item.id"
                    :href="`#${item.id}`"
                    @click="scrollToSection($event, item.id)"
                    class="navbar-mobile-link"
                    :style="{
                        background:
                            activeSection === item.id
                                ? 'rgba(37, 99, 235, 0.1)'
                                : 'transparent',
                        color:
                            activeSection === item.id
                                ? 'var(--color-primary)'
                                : 'var(--color-text-secondary)',
                    }"
                >
                    {{ t(item.label) }}
                </a>

                <!-- Download CV (Mobile) -->
                <a
                    href="/files/cv-ali.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="navbar-cv-button navbar-cv-mobile"
                >
                    {{ t("navbar.downloadCv") }}
                </a>
            </div>
        </nav>

        <!-- MAIN CONTENT -->
        <main style="margin-top: 64px">
            <slot />
        </main>
    </div>
</template>

<style scoped>
/* ============================================ */
/* NAVBAR */
/* ============================================ */
.navbar-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 50;
    transition: all 0.3s ease;
}

.navbar-container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.navbar-logo:hover {
    color: var(--color-accent);
}

/* Desktop Menu */
.navbar-menu-desktop {
    display: none;
    align-items: center;
    gap: 2rem;
}

@media (min-width: 768px) {
    .navbar-menu-desktop {
        display: flex;
    }
}

.navbar-link {
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}

.navbar-link:hover {
    color: var(--color-primary);
}

/* ============================================ */
/* NAVBAR ACTIONS */
/* ============================================ */
.navbar-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}



.lang-button {
    padding: 0.4rem 0.8rem;
    border-radius: 0.375rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.lang-button:hover {
    border-color: var(--color-primary);
}

.lang-separator {
    color: var(--color-text-secondary);
    font-weight: 300;
}

/* CV Button */
.navbar-cv-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    background: var(--color-primary);
    color: white;
    transition: all 0.3s ease;
    display: inline-block;
}

.navbar-cv-button:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

.navbar-cv-desktop {
    display: none;
}

@media (min-width: 640px) {
    .navbar-cv-desktop {
        display: inline-block;
    }
}

/* Mobile Toggle */
.navbar-mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: rgba(148, 163, 184, 0.1);
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    transition: all 0.3s ease;
}

.navbar-mobile-toggle:hover {
    background: rgba(148, 163, 184, 0.2);
}

@media (min-width: 768px) {
    .navbar-mobile-toggle {
        display: none;
    }
}

/* ============================================ */
/* MOBILE MENU */
/* ============================================ */
.navbar-menu-mobile {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    background: rgba(30, 41, 59, 0.95);
    border-top: 1px solid rgba(148, 163, 184, 0.1);
    animation: slideDown 0.3s ease;
}

.navbar-mobile-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
}

.navbar-mobile-link:hover {
    background: rgba(37, 99, 235, 0.15);
}

.navbar-cv-mobile {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-top: 0.5rem;
}

/* ============================================ */
/* ANIMATIONS */
/* ============================================ */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ============================================ */
/* RESPONSIVE */
/* ============================================ */
@media (min-width: 1024px) {
    .navbar-container {
        padding: 0 2rem;
    }
}
</style>
