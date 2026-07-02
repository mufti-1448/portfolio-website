import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

// Tambahkan di atas file setelah import statements yang sudah ada
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Solid icons (untuk UI: chevron, menu, close, home, dll)
import {
    faHome,
    faCode,
    faBriefcase,
    faCertificate,
    faBuildingUser,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faGithub as faGithubSolid,
    faLinkedin as faLinkedinSolid,
    faInstagram as faInstagramSolid,
    faWhatsapp,
    faChevronDown,
    faMenu,
    faTimes,
    faArrowRight,
    faStar,
} from "@fortawesome/free-solid-svg-icons";

// Brand icons (untuk social media logos)
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp as faWhatsappBrand,
} from "@fortawesome/free-brands-svg-icons";

// Add icons to library (ini seperti "register" icons yang akan dipakai)
library.add(
    faHome,
    faCode,
    faBriefcase,
    faCertificate,
    faBuildingUser,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
    faChevronDown,
    faMenu,
    faTimes,
    faArrowRight,
    faStar,
);

// Register component globally (supaya bisa pakai <Icon /> di mana saja)
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
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
