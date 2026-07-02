/**
 * KONSEP: Translation Object
 *
 * Structure:
 * {
 *   id: {
 *     navbar: { home: 'Beranda', ... },
 *     hero: { title: 'Halo...', ... },
 *     ...
 *   },
 *   en: {
 *     navbar: { home: 'Home', ... },
 *     hero: { title: 'Hello...', ... },
 *     ...
 *   }
 * }
 *
 * Keuntungan:
 * - Centralized: semua text di satu tempat
 * - Structured: organized by section (navbar, hero, dll)
 * - Scalable: mudah tambah language/text baru
 * - Easy to maintain: update text hanya di satu tempat
 */

export default {
    id: {
        // NAVBAR
        navbar: {
            home: "Beranda",
            about: "Tentang Saya",
            skills: "Keahlian",
            projects: "Proyek",
            contact: "Kontak",
            downloadCv: "Unduh CV",
        },

        // HERO SECTION
        hero: {
            title: "Halo, Saya Ali",
            subtitle: "Web Developer & UI/UX Enthusiast",
            description:
                "Saya membangun website yang responsif dan user-friendly dengan teknologi modern.",
            viewProjects: "Lihat Proyek",
            contactMe: "Hubungi Saya",
            badge: "Tersedia untuk Freelance",
        },

        // ABOUT SECTION
        about: {
            title: "Tentang Saya",
            whoAmI: "Siapa Saya?",
            description:
                "Saya adalah mahasiswa Sistem Informasi di Universitas Telkom yang passionate tentang web development dan design.",

            education: "Pendidikan",
            educationDesc:
                "Mahasiswa semester X di Universitas Telkom, Bandung",

            goals: "Tujuan Karir",
            goalsDesc:
                "Menjadi full-stack developer yang kompeten dan terus belajar teknologi terbaru",
        },

        // SKILLS SECTION
        skills: {
            title: "Keahlian & Keahlian",
            subtitle: "Teknologi yang saya kuasai dan sedang pelajari",
            noSkills: "Belum ada keahlian ditambahkan",
        },

        // PROJECTS SECTION
        projects: {
            title: "Proyek Terbaru",
            subtitle: "Showcase dari beberapa proyek yang telah saya kerjakan",
            noProjects: "Belum ada proyek ditambahkan",
            viewCode: "Lihat Kode",
            viewLive: "Lihat Demo",
            viewProject: "Lihat Proyek",
        },

        // SERVICES SECTION
        services: {
            title: "Layanan Saya",
            subtitle: "Layanan yang saya tawarkan untuk klien",

            webDev: "Web Development",
            webDevDesc:
                "Membuat website custom sesuai kebutuhan dengan teknologi terkini",

            uiux: "UI/UX Design",
            uiuxDesc:
                "Mendesain interface yang user-friendly dan visually appealing",

            database: "Database Design",
            databaseDesc:
                "Merancang database yang efisien dan scalable untuk aplikasi",
        },

        // CONTACT SECTION
        contact: {
            title: "Hubungi Saya",
            subtitle: "Mari kita diskusikan proyek Anda",

            form: {
                fullName: "Nama Lengkap",
                email: "Email",
                phone: "Nomor WhatsApp",
                message: "Pesan",
                send: "Kirim Pesan",
                namePlaceholder: "Masukkan nama lengkap Anda",
                emailPlaceholder: "Masukkan email Anda",
                phonePlaceholder: "Contoh: 08123456789",
                messagePlaceholder: "Tulis pesan Anda di sini...",
            },

            info: {
                whatsapp: "WhatsApp",
                email: "Email",
                location: "Lokasi",
                socials: "Sosial Media",
            },
        },

        // FOOTER
        footer: {
            copyright: "© 2024 Ali. Semua hak dilindungi.",
            backToTop: "Kembali ke Atas",
        },

        // CERTIFICATES & EXPERIENCES
        certificates: {
            title: "Sertifikat",
            subtitle: "Sertifikat dan penghargaan yang telah saya dapatkan",
            noCertificates: "Belum ada sertifikat ditambahkan",
        },

        experiences: {
            title: "Pengalaman Kerja",
            subtitle: "Perjalanan karir saya",
            noExperiences: "Belum ada pengalaman ditambahkan",
            currentlyWorking: "Sedang Bekerja di Sini",
        },
    },

    en: {
        // NAVBAR
        navbar: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            downloadCv: "Download CV",
        },

        // HERO SECTION
        hero: {
            title: "Hello, I am Ali",
            subtitle: "Web Developer & UI/UX Enthusiast",
            description:
                "I build responsive and user-friendly websites using modern technologies.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
            badge: "Available for Freelance",
        },

        // ABOUT SECTION
        about: {
            title: "About Me",
            whoAmI: "Who I Am?",
            description:
                "I am an Information Systems student at Telkom University passionate about web development and design.",

            education: "Education",
            educationDesc: "Student at Telkom University, Bandung",

            goals: "Career Goals",
            goalsDesc:
                "To become a competent full-stack developer and continuously learn cutting-edge technologies",
        },

        // SKILLS SECTION
        skills: {
            title: "Skills & Expertise",
            subtitle: "Technologies I master and currently learning",
            noSkills: "No skills added yet",
        },

        // PROJECTS SECTION
        projects: {
            title: "Featured Projects",
            subtitle: "Showcase of some projects I have worked on",
            noProjects: "No projects added yet",
            viewCode: "View Code",
            viewLive: "View Demo",
            viewProject: "View Project",
        },

        // SERVICES SECTION
        services: {
            title: "My Services",
            subtitle: "Services I offer to clients",

            webDev: "Web Development",
            webDevDesc:
                "Creating custom websites according to your needs with latest technologies",

            uiux: "UI/UX Design",
            uiuxDesc:
                "Designing user-friendly and visually appealing interfaces",

            database: "Database Design",
            databaseDesc:
                "Designing efficient and scalable databases for applications",
        },

        // CONTACT SECTION
        contact: {
            title: "Get In Touch",
            subtitle: "Let's discuss your project",

            form: {
                fullName: "Full Name",
                email: "Email",
                phone: "WhatsApp Number",
                message: "Message",
                send: "Send Message",
                namePlaceholder: "Enter your full name",
                emailPlaceholder: "Enter your email",
                phonePlaceholder: "Example: +628123456789",
                messagePlaceholder: "Write your message here...",
            },

            info: {
                whatsapp: "WhatsApp",
                email: "Email",
                location: "Location",
                socials: "Social Media",
            },
        },

        // FOOTER
        footer: {
            copyright: "© 2024 Ali. All rights reserved.",
            backToTop: "Back to Top",
        },

        // CERTIFICATES & EXPERIENCES
        certificates: {
            title: "Certificates",
            subtitle: "Certificates and awards I have earned",
            noCertificates: "No certificates added yet",
        },

        experiences: {
            title: "Work Experience",
            subtitle: "My career journey",
            noExperiences: "No experiences added yet",
            currentlyWorking: "Currently Working Here",
        },
    },
};
