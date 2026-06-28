<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
</script>

<template>
    <AdminLayout>
        <div>
            <!-- Page Title -->
            <div class="mb-8">
                <h2
                    class="text-3xl font-bold"
                    style="color: var(--color-text-primary)"
                >
                    Dashboard
                </h2>
                <p style="color: var(--color-text-secondary)">
                    Welcome to your admin panel. Manage your portfolio content
                    here.
                </p>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <!-- Projects Card -->
                <div
                    class="p-6 rounded-lg"
                    style="
                        background: var(--glass-background);
                        border: var(--glass-border);
                        box-shadow: var(--glass-shadow);
                    "
                >
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                style="color: var(--color-text-secondary)"
                                class="text-sm font-medium"
                            >
                                Projects
                            </p>
                            <p
                                class="text-3xl font-bold mt-2"
                                style="color: var(--color-primary)"
                            >
                                0
                            </p>
                        </div>
                        <span class="text-4xl">📁</span>
                    </div>
                </div>

                <!-- Skills Card -->
                <div
                    class="p-6 rounded-lg"
                    style="
                        background: var(--glass-background);
                        border: var(--glass-border);
                        box-shadow: var(--glass-shadow);
                    "
                >
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                style="color: var(--color-text-secondary)"
                                class="text-sm font-medium"
                            >
                                Skills
                            </p>
                            <p
                                class="text-3xl font-bold mt-2"
                                style="color: var(--color-accent)"
                            >
                                0
                            </p>
                        </div>
                        <span class="text-4xl">⚙️</span>
                    </div>
                </div>

                <!-- Certificates Card -->
                <div
                    class="p-6 rounded-lg"
                    style="
                        background: var(--glass-background);
                        border: var(--glass-border);
                        box-shadow: var(--glass-shadow);
                    "
                >
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                style="color: var(--color-text-secondary)"
                                class="text-sm font-medium"
                            >
                                Certificates
                            </p>
                            <p
                                class="text-3xl font-bold mt-2"
                                style="color: var(--color-success)"
                            >
                                0
                            </p>
                        </div>
                        <span class="text-4xl">🏆</span>
                    </div>
                </div>

                <!-- Experiences Card -->
                <div
                    class="p-6 rounded-lg"
                    style="
                        background: var(--glass-background);
                        border: var(--glass-border);
                        box-shadow: var(--glass-shadow);
                    "
                >
                    <div class="flex items-center justify-between">
                        <div>
                            <p
                                style="color: var(--color-text-secondary)"
                                class="text-sm font-medium"
                            >
                                Experiences
                            </p>
                            <p
                                class="text-3xl font-bold mt-2"
                                style="color: var(--color-warning)"
                            >
                                0
                            </p>
                        </div>
                        <span class="text-4xl">💼</span>
                    </div>
                </div>
            </div>

            <!-- Welcome Message -->
            <div
                class="p-8 rounded-lg"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <h3
                    class="text-2xl font-bold mb-4"
                    style="color: var(--color-text-primary)"
                >
                    Getting Started
                </h3>
                <p style="color: var(--color-text-secondary); line-height: 1.6">
                    Welcome to your portfolio admin panel! You can manage your
                    portfolio content here:
                </p>
                <ul
                    class="mt-4 space-y-2"
                    style="color: var(--color-text-secondary)"
                >
                    <li>
                        📁 <strong>Projects</strong> - Add and manage your
                        portfolio projects
                    </li>
                    <li>
                        ⚙️ <strong>Skills</strong> - Manage your technical
                        skills
                    </li>
                    <li>
                        🏆 <strong>Certificates</strong> - Add your certificates
                        and achievements
                    </li>
                    <li>
                        💼 <strong>Experiences</strong> - Manage your work
                        experiences
                    </li>
                    <li>
                        👤 <strong>Profile</strong> - Update your profile
                        information
                    </li>
                </ul>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.grid {
    display: grid;
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.gap-6 {
    gap: 1.5rem;
}

.gap-2 {
    gap: 0.5rem;
}

.p-6 {
    padding: 1.5rem;
}

.p-8 {
    padding: 2rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.mb-8 {
    margin-bottom: 2rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mt-2 {
    margin-top: 0.5rem;
}

.mt-4 {
    margin-top: 1rem;
}

.text-3xl {
    font-size: 1.875rem;
}

.text-2xl {
    font-size: 1.5rem;
}

.text-4xl {
    font-size: 2.25rem;
}

.font-bold {
    font-weight: 700;
}

.font-medium {
    font-weight: 500;
}

.text-sm {
    font-size: 0.875rem;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}

.space-y-2 > * + * {
    margin-top: 0.5rem;
}

.list-none {
    list-style: none;
}

@media (max-width: 768px) {
    .md\:grid-cols-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
