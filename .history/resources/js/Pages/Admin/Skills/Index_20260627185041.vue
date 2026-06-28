<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
</script>

<template>
    <AdminLayout>
        <div>
            <h2
                class="text-3xl font-bold mb-8"
                style="color: var(--color-text-primary)"
            >
                Skills Management
            </h2>
            <div
                class="p-8 rounded-lg text-center"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                "
            >
                <p style="color: var(--color-text-secondary)">
                    Skills management page coming soon...
                </p>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.mb-8 {
    margin-bottom: 2rem;
}

.p-8 {
    padding: 2rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.text-3xl {
    font-size: 1.875rem;
}

.font-bold {
    font-weight: 700;
}

.text-center {
    text-align: center;
}
</style>
