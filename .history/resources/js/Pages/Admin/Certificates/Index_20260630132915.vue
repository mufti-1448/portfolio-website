<script setup>
import { Link } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Button from "@/Components/UI/Button.vue";

defineProps({
    certificates: Array,
});
</script>

<template>
    <AdminLayout>
        <div>
            <!-- Header -->
            <div class="mb-8 flex justify-between items-center">
                <div>
                    <h2
                        class="text-3xl font-bold"
                        style="color: var(--color-text-primary)"
                    >
                        Certificates Management
                    </h2>
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-top: 4px;
                        "
                    >
                        Manage your certificates and achievements
                    </p>
                </div>
                <Link :href="route('admin.certificates.create')">
                    <Button variant="primary"> + New Certificate </Button>
                </Link>
            </div>

            <!-- Certificates Table -->
            <div
                class="rounded-lg overflow-hidden"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <!-- Empty State -->
                <div v-if="certificates.length === 0" class="p-8 text-center">
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-bottom: 16px;
                        "
                    >
                        No certificates yet. Add your first certificate!
                    </p>
                    <Link :href="route('admin.certificates.create')">
                        <Button variant="primary">
                            Add First Certificate
                        </Button>
                    </Link>
                </div>

                <!-- Table -->
                <table v-else class="w-full">
                    <thead
                        style="
                            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
                            background: rgba(148, 163, 184, 0.05);
                        "
                    >
                        <tr>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Title
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Issuer
                            </th>
                            <th
                                class="px-6 py-4 text-left text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Issue Date
                            </th>
                            <th
                                class="px-6 py-4 text-center text-sm font-semibold"
                                style="color: var(--color-text-primary)"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="cert in certificates"
                            :key="cert.id"
                            style="
                                border-bottom: 1px solid
                                    rgba(148, 163, 184, 0.1);
                            "
                        >
                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-primary)"
                            >
                                <div class="font-medium">{{ cert.title }}</div>
                            </td>

                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-secondary)"
                            >
                                {{ cert.issuer }}
                            </td>

                            <td
                                class="px-6 py-4 text-sm"
                                style="color: var(--color-text-secondary)"
                            >
                                {{
                                    new Date(
                                        cert.issue_date,
                                    ).toLocaleDateString()
                                }}
                            </td>

                            <td class="px-6 py-4 text-sm">
                                <div class="flex justify-center gap-2">
                                    <Link
                                        :href="
                                            route(
                                                'admin.certificates.show',
                                                cert.id,
                                            )
                                        "
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(56, 189, 248, 0.1);
                                            color: var(--color-accent);
                                        "
                                    >
                                        View
                                    </Link>
                                    <Link
                                        :href="
                                            route(
                                                'admin.certificates.edit',
                                                cert.id,
                                            )
                                        "
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(37, 99, 235, 0.1);
                                            color: var(--color-primary);
                                        "
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        @click="deleteCertificate(cert.id)"
                                        class="px-3 py-1 rounded text-xs font-medium transition-colors"
                                        style="
                                            background: rgba(239, 68, 68, 0.1);
                                            color: #ef4444;
                                        "
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div
                class="mt-6 text-sm"
                style="color: var(--color-text-secondary)"
            >
                Total Certificates:
                <span
                    style="color: var(--color-text-primary); font-semibold;"
                    >{{ certificates.length }}</span
                >
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteCertificate(certId) {
            if (confirm("Are you sure?")) {
                this.$inertia.delete(
                    route("admin.certificates.destroy", certId),
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
.mt-6 {
    margin-top: 1.5rem;
}
.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}
.text-3xl {
    font-size: 1.875rem;
}
.text-sm {
    font-size: 0.875rem;
}
.text-xs {
    font-size: 0.75rem;
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
.rounded-lg {
    border-radius: 0.5rem;
}
.overflow-hidden {
    overflow: hidden;
}
.w-full {
    width: 100%;
}
.flex {
    display: flex;
}
.justify-between {
    justify-content: space-between;
}
.justify-center {
    justify-content: center;
}
.items-center {
    align-items: center;
}
.gap-2 {
    gap: 0.5rem;
}
table {
    border-collapse: collapse;
}
tbody tr:hover {
    background-color: rgba(56, 189, 248, 0.05);
}
button {
    cursor: pointer;
}
a {
    text-decoration: none;
}
.rounded {
    border-radius: 0.25rem;
}
</style>
