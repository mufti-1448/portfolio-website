<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'

defineProps({
  title: String,
})

// ============================================
// STATE MANAGEMENT
// ============================================

// Apakah navbar sudah di-scroll (untuk background opacity)
const isScrolled = ref(false)

// Apakah mobile menu terbuka
const isMobileMenuOpen = ref(false)

// Section mana yang sedang aktif (untuk highlight menu)
const activeSection = ref('home')

// Menu items dengan icon
const menuItems = [
  { label: 'Home', href: '#home', id: 'home', icon: 'fa-solid fa-home' },
  { label: 'About', href: '#about', id: 'about', icon: 'fa-solid fa-user' },
  { label: 'Skills', href: '#skills', id: 'skills', icon: 'fa-solid fa-code' },
  { label: 'Projects', href: '#projects', id: 'projects', icon: 'fa-solid fa-briefcase' },
  { label: 'Contact', href: '#contact', id: 'contact', icon: 'fa-solid fa-envelope' },
]

// ============================================
// SCROLL EVENT HANDLER
// ============================================
/**
 * KONSEP: Scroll Event Listener
 * 
 * Ketika user scroll:
 * 1. Check apakah sudah scroll lebih dari 50px
 *    → Yes: navbar background opaque (solid)
 *    → No: navbar background transparent
 * 
 * Ini membuat navbar terlihat "jelas" saat user scroll
 * dan "ringan" saat di posisi awal
 */
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// ============================================
// INTERSECTION OBSERVER SETUP
// ============================================
/**
 * KONSEP: IntersectionObserver API
 * 
 * Ini adalah browser native API yang EFFICIENT untuk detect
 * kapan element masuk/keluar viewport (layar yang terlihat)
 * 
 * Mengapa lebih baik daripada manual calculation?
 * - Browser native: performa optimal
 * - Tidak perlu loop through elements
 * - Automatic throttling: tidak lag saat scroll
 * 
 * Use case: Detect active section untuk navbar highlight
 * 
 * Options:
 * - root: null (viewport default)
 * - rootMargin: '-50% 0px -50% 0px' 
 *   → Trigger saat element di tengah layar
 * - threshold: 0
 *   → Mulai trigger saat 0% element visible
 */
const setupIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Section dianggap active saat di tengah viewport
    threshold: 0,
  }

  // Callback: dipanggil saat element masuk/keluar view
  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element sekarang di tengah viewport → set sebagai active
        activeSection.value = entry.target.id
      }
    })
  }

  const observer = new IntersectionObserver(callback, options)

  // Observe semua section yang ada di menuItems
  menuItems.forEach(item => {
    const element = document.getElementById(item.id)
    if (element) observer.observe(element)
  })

  return observer
}

let intersectionObserver = null

// ============================================
// LIFECYCLE HOOKS
// ============================================
/**
 * onMounted: Dipanggil saat component sudah rendered di DOM
 * 
 * Di sini kita:
 * 1. Attach scroll event listener
 * 2. Setup IntersectionObserver
 * 3. Initial check (cek posisi saat pertama load)
 */
onMounted(() => {
  // Setup scroll listener dengan passive:true (performa optimization)
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Setup intersection observer untuk active section detection
  intersectionObserver = setupIntersectionObserver()

  // Initial check: cek scroll position saat pertama kali load
  handleScroll()
})

/**
 * onUnmounted: Dipanggil saat component dihapus dari DOM
 * 
 * PENTING: Cleanup event listeners!
 * Jika tidak di-cleanup → memory leak (memori terus bertambah)
 * 
 * Best practice: Selalu cleanup di onUnmounted
 */
onUnmounted(() => {
  // Remove scroll listener
  window.removeEventListener('scroll', handleScroll)
  
  // Disconnect intersection observer
  if (intersectionObserver) intersectionObserver.disconnect()
})

// ============================================
// EVENT HANDLERS
// ============================================
/**
 * Smooth scroll ketika user click menu
 * 
 * Proses:
 * 1. Prevent default link behavior (e.preventDefault())
 * 2. Find element dengan id yang diminta
 * 3. Scroll ke element dengan behavior 'smooth'
 * 4. Close mobile menu (jika buka)
 */
const scrollToSection = (e, sectionId) => {
  e.preventDefault()
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false // Close mobile menu setelah click
  }
}

// Toggle mobile menu visibility
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div style="background: var(--color-bg-primary);">
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
        <Link href="/" class="navbar-logo">
          Ali
        </Link>

        <!-- Desktop Menu -->
        <div class="navbar-menu-desktop">
          
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            @click="scrollToSection($event, item.id)"
            class="navbar-link"
            :style="{
              color: activeSection === item.id 
                ? 'var(--color-primary)' 
                : 'var(--color-text-secondary)',
            }"
          >
            <Icon :icon="item.icon" style="font-size: 16px;" />
            {{ item.label }}
          </a>
        </div>

        <!-- Right Actions (CV Download + Mobile Menu) -->
        <div class="navbar-actions">
          <!-- Download CV Button (Desktop) -->
          
            href="/files/cv-ali.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-cv-button navbar-cv-desktop"
          >
            <Icon icon="fa-solid fa-download" style="margin-right: 8px;" />
            Download CV
          </a>

          <!-- Mobile Menu Toggle Button -->
          <button
            @click="toggleMobileMenu"
            class="navbar-mobile-toggle"
          >
            <Icon :icon="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div
        v-if="isMobileMenuOpen"
        class="navbar-menu-mobile"
      >
        <
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
          @click="scrollToSection($event, item.id)"
          class="navbar-mobile-link"
          :style="{
            background: activeSection === item.id 
              ? 'rgba(37, 99, 235, 0.1)' 
              : 'transparent',
            color: activeSection === item.id 
              ? 'var(--color-primary)' 
              : 'var(--color-text-secondary)',
          }"
        >
          <Icon :icon="item.icon" style="font-size: 18px;" />
          {{ item.label }}
        </a>

        <!-- Download CV (Mobile) -->
        
          href="/files/cv-ali.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="navbar-cv-button navbar-cv-mobile"
        >
          <Icon icon="fa-solid fa-download" style="margin-right: 8px;" />
          Download CV
        </a>
      </div>
    </nav>

    <!-- MAIN CONTENT: Add margin-top untuk offset navbar fixed -->
    <main style="margin-top: 64px;">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/**
 * PENJELASAN STYLING STRATEGY:
 * 
 * 1. Semantic class names (navbar-sticky, navbar-logo, dll)
 *    → Lebih readable dibanding generic classes
 * 
 * 2. Flexbox untuk layout
 *    → Modern, responsive, simple
 * 
 * 3. CSS variables untuk warna
 *    → Konsisten dengan design system
 * 
 * 4. Media queries untuk responsive
 *    → Desktop first approach
 */

/* ============================================ */
/* NAVBAR STICKY CONTAINER */
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

/* ============================================ */
/* LOGO / BRAND */
/* ============================================ */
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

/* ============================================ */
/* DESKTOP MENU */
/* ============================================ */
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.navbar-link:hover {
  color: var(--color-primary);
}

/* ============================================ */
/* ACTIONS (CV + Mobile Toggle) */
/* ============================================ */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-cv-button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  background: var(--color-primary);
  color: white;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.navbar-cv-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Desktop CV button */
.navbar-cv-desktop {
  display: none;
}

@media (min-width: 640px) {
  .navbar-cv-desktop {
    display: inline-flex;
  }
}

/* Mobile toggle button */
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
/* MOBILE MENU DROPDOWN */
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

/* Mobile CV button di dalam dropdown */
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
/* RESPONSIVE ADJUSTMENTS */
/* ============================================ */
@media (max-width: 767px) {
  .navbar-container {
    padding: 0 1rem;
  }
}

@media (min-width: 1024px) {
  .navbar-container {
    padding: 0 2rem;
  }
}
</style>