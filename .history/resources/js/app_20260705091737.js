import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
// resources/js/app.js
import '../css/animations.css'

// ============================================
// FontAwesome v6 Setup
// ============================================
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// ✅ Import solid icons (UI elements)
import {
    faHome,
    faCode,
    faBriefcase,
    faDotCircle,
    faCertificate,
    faBuildingUser,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faChevronDown,
    faBars, // Hamburger menu icon
    faXmark, // Close/times icon (pengganti faTimes di v5)
    faArrowRight,
    faStar,
    faUser,
    faDownload,
} from "@fortawesome/free-solid-svg-icons";

// ✅ Import brand icons (social media logos)
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// ✅ Add icons ke library (registrasi)
// Hanya icons yang di-add ini yang akan di-bundle
// Icons lain tidak akan di-include (optimasi ukuran)
library.add(
    // Solid icons
    faHome,
    faCode,
    faBriefcase,
    faDotCircle,
    faCertificate,
    faBuildingUser,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faChevronDown,
    faBars,
    faXmark,
    faArrowRight,
    faStar,
    faUser,
    faDownload,
    // Brand icons
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
);

// ============================================
// Initialize Inertia App
// ============================================
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
        ),
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue);

        // ✅ Register FontAwesomeIcon sebagai global component
        // Sekarang bisa pakai <Icon /> di semua .vue files
        vueApp.component("Icon", FontAwesomeIcon);

        return vueApp.mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
