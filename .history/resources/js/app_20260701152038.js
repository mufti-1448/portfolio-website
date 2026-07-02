import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

// FontAwesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// ✅ Solid icons (UI elements)
import {
    faHome,
    faCode,
    faBriefcase,
    faCertificate,
    faBuildingUser,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faChevronDown,
    faMenu,
    faTimes,
    faArrowRight,
    faStar,
    faUser,
    faDownload,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

// ✅ Brand icons (social media logos - HANYA dari free-brands-svg-icons)
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// ✅ Add SEMUA icons ke library (solid + brand)
library.add(
    // Solid icons
    faHome,
    faCode,
    faBriefcase,
    faCertificate,
    faBuildingUser,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faChevronDown,
    faMenu,
    faTimes,
    faArrowRight,
    faStar,
    faUser,
    faDownload,
    faBars,
    // Brand icons
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
);

// ✅ Register FontAwesomeIcon sebagai global component
// Sekarang bisa pakai <Icon /> di semua .vue files tanpa import
app.component("Icon", FontAwesomeIcon);

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

        // ✅ Register FontAwesomeIcon sebagai component sebelum mount
        vueApp.component("Icon", FontAwesomeIcon);

        return vueApp.mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
