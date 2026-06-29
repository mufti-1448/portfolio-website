<script setup>
import { ref } from "vue";
import axios from "axios";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Button from "@/Components/UI/Button.vue";

const form = ref({
    title: "",
    description: "",
    image: null,
    tech_stack: [],
    github_url: "",
    live_url: "",
    is_featured: false,
});

const techOptions = [
    "Vue.js",
    "Laravel",
    "MySQL",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Python",
    "Django",
];
const errors = ref({});
const isSubmitting = ref(false);

const handleImageUpload = (event) => {
    form.value.image = event.target.files[0];
};

const toggleTech = (tech) => {
    const index = form.value.tech_stack.indexOf(tech);
    if (index > -1) {
        form.value.tech_stack.splice(index, 1);
    } else {
        form.value.tech_stack.push(tech);
    }
};

const submitForm = async () => {
    isSubmitting.value = true;
    errors.value = {};

    try {
        const formData = new FormData();
        formData.append("title", form.value.title);
        formData.append("description", form.value.description);
        formData.append("github_url", form.value.github_url);
        formData.append("live_url", form.value.live_url);
        formData.append("is_featured", form.value.is_featured ? 1 : 0);
        formData.append("tech_stack", JSON.stringify(form.value.tech_stack));

        if (form.value.image) {
            formData.append("image", form.value.image);
        }

        // Submit using axios
        const response = await axios.post(
            route("admin.projects.store"),
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
        );

        // If successful, redirect to projects index
        if (response.status === 200 || response.status === 201) {
            window.location.href = route("admin.projects.index");
        }
    } catch (error) {
        if (error.response && error.response.data.errors) {
            errors.value = error.response.data.errors;
        } else {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
        isSubmitting.value = false;
    }
};
</script>
<template>
    <AdminLayout>
        <div>
            <!-- Header -->
            <div class="mb-8">
                <h2
                    class="text-3xl font-bold"
                    style="color: var(--color-text-primary)"
                >
                    Create New Project
                </h2>
                <p style="color: var(--color-text-secondary); margin-top: 4px">
                    Add a new project to your portfolio
                </p>
            </div>

            <!-- Form -->
            <div
                class="max-w-2xl p-8 rounded-lg"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <form @submit.prevent="submitForm" class="space-y-6">
                    <!-- Title -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            Project Title *
                        </label>
                        <input
                            v-model="form.title"
                            type="text"
                            required
                            placeholder="My Awesome Project"
                            class="w-full px-4 py-2 rounded-lg"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                            "
                        />
                        <p
                            v-if="errors.title"
                            class="text-xs mt-1"
                            style="color: #ef4444"
                        >
                            {{ errors.title }}
                        </p>
                    </div>

                    <!-- Description -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            Description *
                        </label>
                        <textarea
                            v-model="form.description"
                            required
                            rows="5"
                            placeholder="Describe your project..."
                            class="w-full px-4 py-2 rounded-lg resize-none"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                            "
                        ></textarea>
                        <p
                            v-if="errors.description"
                            class="text-xs mt-1"
                            style="color: #ef4444"
                        >
                            {{ errors.description }}
                        </p>
                    </div>

                    <!-- Image Upload -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            Project Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            @change="handleImageUpload"
                            class="w-full px-4 py-2 rounded-lg"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                            "
                        />
                        <p
                            class="text-xs mt-1"
                            style="color: var(--color-text-secondary)"
                        >
                            Recommended: 400x300px
                        </p>
                        <p
                            v-if="errors.image"
                            class="text-xs mt-1"
                            style="color: #ef4444"
                        >
                            {{ errors.image }}
                        </p>
                    </div>

                    <!-- Tech Stack -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-3"
                            style="color: var(--color-text-primary)"
                        >
                            Tech Stack
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <button
                                v-for="tech in techOptions"
                                :key="tech"
                                type="button"
                                @click="toggleTech(tech)"
                                class="px-3 py-1 rounded-lg text-sm font-medium transition-all"
                                :style="{
                                    background: form.tech_stack.includes(tech)
                                        ? 'var(--color-primary)'
                                        : 'var(--color-bg-secondary)',
                                    border:
                                        '1.5px solid ' +
                                        (form.tech_stack.includes(tech)
                                            ? 'var(--color-primary)'
                                            : 'rgba(148, 163, 184, 0.2)'),
                                    color: form.tech_stack.includes(tech)
                                        ? 'white'
                                        : 'var(--color-text-secondary)',
                                }"
                            >
                                {{ tech }}
                            </button>
                        </div>
                        <p
                            v-if="errors.tech_stack"
                            class="text-xs mt-2"
                            style="color: #ef4444"
                        >
                            {{ errors.tech_stack }}
                        </p>
                    </div>

                    <!-- GitHub URL -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            GitHub URL
                        </label>
                        <input
                            v-model="form.github_url"
                            type="url"
                            placeholder="https://github.com/..."
                            class="w-full px-4 py-2 rounded-lg"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                            "
                        />
                        <p
                            v-if="errors.github_url"
                            class="text-xs mt-1"
                            style="color: #ef4444"
                        >
                            {{ errors.github_url }}
                        </p>
                    </div>

                    <!-- Live URL -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            Live URL
                        </label>
                        <input
                            v-model="form.live_url"
                            type="url"
                            placeholder="https://..."
                            class="w-full px-4 py-2 rounded-lg"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                            "
                        />
                        <p
                            v-if="errors.live_url"
                            class="text-xs mt-1"
                            style="color: #ef4444"
                        >
                            {{ errors.live_url }}
                        </p>
                    </div>

                    <!-- Featured -->
                    <div class="flex items-center gap-3">
                        <input
                            v-model="form.is_featured"
                            type="checkbox"
                            class="w-4 h-4 rounded"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                cursor: pointer;
                            "
                        />
                        <label
                            class="text-sm font-semibold"
                            style="
                                color: var(--color-text-primary);
                                cursor: pointer;
                            "
                        >
                            Mark as Featured
                        </label>
                    </div>

                    <!-- Submit Buttons -->
                    <div class="flex gap-3 pt-4">
                        <Button
                            type="submit"
                            variant="primary"
                            :disabled="isSubmitting"
                        >
                            {{
                                isSubmitting ? "Creating..." : "Create Project"
                            }}
                        </Button>
                        <a
                            :href="route('admin.projects.index')"
                            class="px-6 py-2 rounded-lg font-semibold transition-all"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                                text-decoration: none;
                                display: inline-block;
                            "
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.mb-8 {
    margin-bottom: 2rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-3 {
    margin-top: 0.75rem;
}

.mt-2 {
    margin-top: 0.5rem;
}

.mt-1 {
    margin-top: 0.25rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mb-3 {
    margin-bottom: 0.75rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.pt-4 {
    padding-top: 1rem;
}

.p-8 {
    padding: 2rem;
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

.rounded-lg {
    border-radius: 0.5rem;
}

.w-full {
    width: 100%;
}

.w-4 {
    width: 1rem;
}

.h-4 {
    height: 1rem;
}

.max-w-2xl {
    max-width: 42rem;
}

.space-y-6 > * + * {
    margin-top: 1.5rem;
}

.flex {
    display: flex;
}

.flex-wrap {
    flex-wrap: wrap;
}

.items-center {
    align-items: center;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

input,
textarea {
    font-family: var(--font-primary);
}

input::placeholder,
textarea::placeholder {
    color: var(--color-text-tertiary);
}

input:focus,
textarea:focus {
    outline: none;
    border-color: rgba(56, 189, 248, 0.6);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

a {
    text-decoration: none;
}

.resize-none {
    resize: none;
}
</style>
