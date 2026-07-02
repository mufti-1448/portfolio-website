import { ref } from "vue";

/**
 * KONSEP: Composable
 *
 * Composable adalah function yang menggunakan Vue 3 Composition API
 * untuk share reusable stateful logic.
 *
 * Keuntungan:
 * - Logic terisolasi & mudah di-test
 * - Dapat dipakai di multiple components
 * - Lebih clean dibanding mixing logic di components
 *
 * Analogi: Composable = helper function yang return reactive state
 */

// ✅ STEP 1: Import translations
import translations from "../constants/translations";

/**
 * Reactive state untuk current language
 * Default: cek localStorage, fallback ke 'id'
 */
const currentLanguage = ref(localStorage.getItem("language") || "id");

/**
 * useLanguage Composable
 *
 * Dipakai di components dengan:
 * const { language, setLanguage, t } = useLanguage()
 */
export const useLanguage = () => {
    /**
     * setLanguage(newLang)
     *
     * Function untuk mengubah language
     *
     * Proses:
     * 1. Update reactive state
     * 2. Save ke localStorage (persist)
     * 3. Component otomatis re-render (reaktif)
     */
    const setLanguage = (newLanguage) => {
        currentLanguage.value = newLanguage;
        localStorage.setItem("language", newLanguage);
    };

    /**
     * t(key)
     *
     * Function untuk get translated text
     * Argument: key = path ke text di translations object
     *
     * Contoh:
     * t('navbar.home')     → 'Beranda' (id) atau 'Home' (en)
     * t('hero.title')      → 'Halo, saya Ali' atau 'Hello, I am Ali'
     *
     * Jika key tidak ditemukan, return key-nya (fallback safety)
     */
    const t = (key) => {
        // Split key: 'navbar.home' → ['navbar', 'home']
        const keys = key.split(".");

        // Navigate through nested object
        let value = translations[currentLanguage.value];

        for (const k of keys) {
            value = value?.[k];
        }

        // Return value atau key (jika tidak ditemukan)
        return value || key;
    };

    /**
     * Return object berisi:
     * - language: reactive ref (current language)
     * - setLanguage: function untuk change language
     * - t: function untuk get translated text
     */
    return {
        language: currentLanguage,
        setLanguage,
        t,
    };
};
