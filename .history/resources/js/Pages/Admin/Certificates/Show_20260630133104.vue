<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineProps({
    certificate: Object,
});
</script>

<template>
    <AdminLayout>
        <div>
            <div class="mb-8 flex justify-between items-center">
                <div>
                    <h2
                        class="text-3xl font-bold"
                        style="color: var(--color-text-primary)"
                    >
                        {{ certificate.title }}
                    </h2>
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-top: 4px;
                        "
                    >
                        Certificate Details
                    </p>
                </div>
                <div class="flex gap-2">
                    <a
                        :href="route('admin.certificates.edit', certificate.id)"
                        class="px-4 py-2 rounded-lg font-semibold"
                        style="
                            background: var(--color-primary);
                            color: white;
                            text-decoration: none;
                        "
                    >
                        Edit
                    </a>
                    <a
                        :href="route('admin.certificates.index')"
                        class="px-4 py-2 rounded-lg font-semibold"
                        style="
                            background: var(--color-bg-secondary);
                            border: 1.5px solid rgba(148, 163, 184, 0.2);
                            color: var(--color-text-primary);
                            text-decoration: none;
                        "
                    >
                        Back
                    </a>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1">
                    <div
                        v-if="certificate.image"
                        class="mb-6 rounded-lg overflow-hidden"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            aspect-ratio: 3/4;
                        "
                    >
                        <img
                            :src="'/storage/' + certificate.image"
                            :alt="certificate.title"
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        class="p-6 rounded-lg"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                        "
                    >
                        <h3
                            class="text-lg font-semibold mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            Links
                        </h3>
                        <a
                            v-if="certificate.credential_url"
                            :href="certificate.credential_url"
                            target="_blank"
                            class="flex items-center gap-3 px-4 py-2 rounded-lg"
                            style="
                                background: var(--color-primary);
                                color: white;
                                text-decoration: none;
                            "
                        >
                            <span>🔗</span>
                            <span class="text-sm font-medium">Credential</span>
                        </a>
                        <p
                            v-else
                            class="text-sm"
                            style="color: var(--color-text-secondary)"
                        >
                            No links added
                        </p>
                    </div>
                </div>

                <div class="lg:col-span-2 space-y-6">
                    <div
                        class="p-6 rounded-lg"
                        style="
                            background: var(--glass-background);
                            border: var(--glass-border);
                            box-shadow: var(--glass-shadow);
                        "
                    >
                        <h3
                            class="text-lg font-semibold mb-4"
                            style="color: var(--color-text-primary)"
                        >
                            Information
                        </h3>
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span style="color: var(--color-text-secondary)"
                                    >Issuer</span
                                >
                                <span
                                    style="color: var(--color-text-primary); font-weight: 600;"
                                    >{{ certificate.issuer }}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span style="color: var(--color-text-secondary)"
                                    >Issue Date</span
                                >
                                <span
                                    style="color: var(--color-text-primary); font-weight: 600;"
                                >
                                    {{
                                        new Date(
                                            certificate.issue_date,
                                        ).toLocaleDateString()
                                    }}
                                </span>
                            </div>
                            <div
                                v-if="certificate.expiry_date"
                                class="flex justify-between"
                            >
                                <span style="color: var(--color-text-secondary)"
                                    >Expiry Date</span
                                >
                                <span
                                    style="color: var(--color-text-primary); font-semibold;"
                                >
                                    {{
                                        new Date(
                                            certificate.expiry_date,
                                        ).toLocaleDateString()
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8">
                <button
                    @click="deleteCertificate"
                    class="px-6 py-3 rounded-lg font-semibold"
                    style="
                        background: rgba(239, 68, 68, 0.1);
                        color: #ef4444;
                        border: 1.5px solid rgba(239, 68, 68, 0.3);
                    "
                >
                    🗑️ Delete Certificate
                </button>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteCertificate() {
            if (confirm("Are you sure?")) {
                this.$inertia.delete(
                    route("admin.certificates.destroy", this.certificate.id),
                );
            }
        },
    },
};
</script>

<style scoped>
.mb-8 {
    margin-bottom: 2rem;
}
.mb-6 {
    margin-bottom: 1.5rem;
}
.mb-4 {
    margin-bottom: 1rem;
}
.mt-8 {
    margin-top: 2rem;
}
.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}
.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}
.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.p-6 {
    padding: 1.5rem;
}
.rounded-lg {
    border-radius: 0.5rem;
}
.overflow-hidden {
    overflow: hidden;
}
.text-3xl {
    font-size: 1.875rem;
}
.text-lg {
    font-size: 1.125rem;
}
.text-sm {
    font-size: 0.875rem;
}
.font-bold {
    font-weight: 700;
}
.font-semibold {
    font-weight: 600;
}
.font-medium {
    font-weight: 500;
}
.grid {
    display: grid;
}
.grid-cols-1 {
    grid-template-columns: 1fr;
}
.lg\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
}
.lg\:col-span-1 {
    grid-column: span 1;
}
.lg\:col-span-2 {
    grid-column: span 2;
}
.gap-8 {
    gap: 2rem;
}
.space-y-6 > * + * {
    margin-top: 1.5rem;
}
.space-y-4 > * + * {
    margin-top: 1rem;
}
.flex {
    display: flex;
}
.justify-between {
    justify-content: space-between;
}
.items-center {
    align-items: center;
}
.gap-3 {
    gap: 0.75rem;
}
a {
    text-decoration: none;
}
button {
    cursor: pointer;
}
@media (max-width: 1024px) {
    .lg\:grid-cols-3 {
        grid-template-columns: 1fr;
    }
    .lg\:col-span-1 {
        grid-column: span 1;
    }
    .lg\:col-span-2 {
        grid-column: span 1;
    }
}
</style>
