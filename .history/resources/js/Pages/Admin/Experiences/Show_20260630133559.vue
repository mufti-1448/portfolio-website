<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineProps({
    experience: Object,
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
                        {{ experience.title }}
                    </h2>
                    <p
                        style="
                            color: var(--color-text-secondary);
                            margin-top: 4px;
                        "
                    >
                        {{ experience.company }}
                    </p>
                </div>
                <div class="flex gap-2">
                    <a
                        :href="route('admin.experiences.edit', experience.id)"
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
                        :href="route('admin.experiences.index')"
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

            <div class="space-y-6">
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
                                >Company</span
                            >
                            <span
                                style="color: var(--color-text-primary); font-semibold;"
                                >{{ experience.company }}</span
                            >
                        </div>
                        <div class="flex justify-between">
                            <span style="color: var(--color-text-secondary)"
                                >Position</span
                            >
                            <span
                                style="color: var(--color-text-primary); font-semibold;"
                                >{{ experience.title }}</span
                            >
                        </div>
                        <div class="flex justify-between">
                            <span style="color: var(--color-text-secondary)"
                                >Start Date</span
                            >
                            <span
                                style="color: var(--color-text-primary); font-semibold;"
                            >
                                {{
                                    new Date(
                                        experience.start_date,
                                    ).toLocaleDateString()
                                }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span style="color: var(--color-text-secondary)"
                                >End Date</span
                            >
                            <span
                                style="color: var(--color-text-primary); font-"
                            >
                                {{
                                    experience.is_current
                                        ? "Present"
                                        : new Date(
                                              experience.end_date,
                                          ).toLocaleDateString()
                                }}
                            </span>
                        </div>
                        <div class="flex justify-between">
                            <span style="color: var(--color-text-secondary)"
                                >Status</span
                            >
                            <span
                                :style="{
                                    color: experience.is_current
                                        ? 'var(--color-accent)'
                                        : 'var(--color-text-secondary)',
                                }"
                                class="font-semibold"
                            >
                                {{
                                    experience.is_current
                                        ? "✓ Currently Working"
                                        : "Past Experience"
                                }}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    v-if="experience.description"
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
                        Description
                    </h3>
                    <p
                        style="
                            color: var(--color-text-secondary);
                            line-height: 1.8;
                            white-space: pre-wrap;
                        "
                    >
                        {{ experience.description }}
                    </p>
                </div>
            </div>

            <div class="mt-8">
                <button
                    @click="deleteExperience"
                    class="px-6 py-3 rounded-lg font-semibold"
                    style="
                        background: rgba(239, 68, 68, 0.1);
                        color: #ef4444;
                        border: 1.5px solid rgba(239, 68, 68, 0.3);
                    "
                >
                    🗑️ Delete Experience
                </button>
            </div>
        </div>
    </AdminLayout>
</template>

<script>
export default {
    methods: {
        deleteExperience() {
            if (confirm("Are you sure?")) {
                this.$inertia.delete(
                    route("admin.experiences.destroy", this.experience.id),
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
.text-3xl {
    font-size: 1.875rem;
}
.text-lg {
    font-size: 1.125rem;
}
.font-bold {
    font-weight: 700;
}
.font-semibold {
    font-weight: 600;
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
button {
    cursor: pointer;
}
a {
    text-decoration: none;
}
</style>
