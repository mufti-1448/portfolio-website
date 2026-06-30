<script setup>
import { ref } from 'vue';
import axios from 'axios';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Button from '@/Components/UI/Button.vue';

const form = ref({
    name: '',
    category: 'Frontend',
    icon: '',
    proficiency: 3,
});

const categories = ['Frontend', 'Backend', 'Database', 'Tools'];
const proficiencyLevels = [
    { value: 1, label: '⭐ Beginner' },
    { value: 2, label: '⭐⭐ Basic' },
    { value: 3, label: '⭐⭐⭐ Intermediate' },
    { value: 4, label: '⭐⭐⭐⭐ Advanced' },
    { value: 5, label: '⭐⭐⭐⭐⭐ Expert' },
];

const errors = ref({});
const isSubmitting = ref(false);

const submitForm = async () => {
    isSubmitting.value = true;
    errors.value = {};

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        const response = await axios.post(route('admin.skills.store'), {
            name: form.value.name,
            category: form.value.category,
            icon: form.value.icon,
            proficiency: form.value.proficiency,
            _token: csrfToken,
        }, {
            headers: {
                'X-CSRF-TOKEN': csrfToken,
            },
        });

        if (response.status === 200 || response.status === 201) {
            window.location.href = route('admin.skills.index');
        }
    } catch (error) {
        console.error('Error:', error.response?.data?.errors || error.message);
        
        if (error.response && error.response.data.errors) {
            errors.value = error.response.data.errors;
        } else {
            alert('Something went wrong. Please try again.');
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
                    Add New Skill
                </h2>
                <p style="color: var(--color-text-secondary); margin-top: 4px;">
                    Add a new technical skill to your profile
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
                    <!-- Skill Name -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            Skill Name *
                        </label>
                        <input
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="e.g., Vue.js"
                            class="w-full px-4 py-2 rounded-lg"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                            "
                        />
                        <p v-if="errors.name" class="text-xs mt-1" style="color: #ef4444;">
                            {{ errors.name }}
                        </p>
                    </div>

                    <!-- Category -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            Category *
                        </label>
                        <select
                            v-model="form.category"
                            required
                            class="w-full px-4 py-2 rounded-lg"
                            style="
                                background: var(--color-bg-secondary);
                                border: 1.5px solid rgba(148, 163, 184, 0.2);
                                color: var(--color-text-primary);
                            "
                        >
                            <option v-for="cat in categories" :key="cat" :value="cat">
                                {{ cat }}
                            </option>
                        </select>
                        <p v-if="errors.category" class="text-xs mt-1" style="color: #ef4444;">
                            {{ errors.category }}
                        </p>
                    </div>

                    <!-- Icon/Emoji -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-2"
                            style="color: var(--color-text-primary)"
                        >
                            Icon (Emoji)
                        </label>
                        <div class="flex gap-2">
                            <input
                                v-model="form.icon"
                                type="text"
                                placeholder="e.g., 💚"
                                maxlength="2"
                                class="flex-1 px-4 py-2 rounded-lg text-center text-2xl"
                                style="
                                    background: var(--color-bg-secondary);
                                    border: 1.5px solid rgba(148, 163, 184, 0.2);
                                    color: var(--color-text-primary);
                                "
                            />
                            <div
                                class="px-4 py-2 rounded-lg flex items-center justify-center text-3xl"
                                style="background: var(--color-bg-secondary);"
                            >
                                {{ form.icon || '👍' }}
                            </div>
                        </div>
                        <p class="text-xs mt-1" style="color: var(--color-text-secondary);">
                            Paste emoji from emoji picker
                        </p>
                        <p v-if="errors.icon" class="text-xs mt-1" style="color: #ef4444;">
                            {{ errors.icon }}
                        </p>
                    </div>

                    <!-- Proficiency Level -->
                    <div>
                        <label
                            class="block text-sm font-semibold mb-3"
                            style="color: var(--color-text-primary)"
                        >
                            Proficiency Level *
                        </label>
                        <div class="space-y-2">
                            <label
                                v-for="level in proficiencyLevels"
                                :key="level.value"
                                class="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer"
                                style="
                                    background: var(--color-bg-secondary);
                                    border: 1.5px solid rgba(148, 163, 184, 0.2);
                                    transition: all 0.3s;
                                "
                                :style="{
                                    borderColor: form.proficiency === level.value ? 'var(--color-primary)' : 'rgba(148, 163, 184, 0.2)',
                                    background: form.proficiency === level.value ? 'rgba(37, 99, 235, 0.1)' : 'var(--color-bg-secondary)',
                                }"
                            >
                                <input
                                    type="radio"
                                    :value="level.value"
                                    v-model.number="form.proficiency"
                                    class="w-4 h-4"
                                />
                                <span style="color: var(--color-text-primary); font-weight: 500;">
                                    {{ level.label }}
                                </span>
                            </label>
                        </div>
                        <p v-if="errors.proficiency" class="text-xs mt-2" style="color: #ef4444;">
                            {{ errors.proficiency }}
                        </p>
                    </div>

                    <!-- Submit Buttons -->
                    <div class="flex gap-3 pt-4">
                        <Button
                            type="submit"
                            variant="primary"
                            :disabled="isSubmitting"
                        >
                            {{ isSubmitting ? 'Adding...' : 'Add Skill' }}
                        </Button>
                        <a
                            :href="route('admin.skills.index')"
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

.mb-3 {
    margin-bottom: 0.75rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
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

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
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

.text-2xl {
    font-size: 1.5rem;
}

.text-3xl {
    font-size: 1.875rem;
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

.space-y-2 > * + * {
    margin-top: 0.5rem;
}

.flex {
    display: flex;
}

.flex-1 {
    flex: 1;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

input,
select {
    font-family: var(--font-primary);
}

input::placeholder,
textarea::placeholder {
    color: var(--color-text-tertiary);
}

input:focus,
select:focus,
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

input[type="radio"] {
    cursor: pointer;
}
</style>