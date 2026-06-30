<script setup>
import { ref } from 'vue';
import axios from 'axios';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Button from '@/Components/UI/Button.vue';

const form = ref({
    title: '',
    company: '',
    description: '',
    start_date: '',
    end_date: '',
    is_current: false,
});

const errors = ref({});
const isSubmitting = ref(false);

const submitForm = async () => {
    isSubmitting.value = true;
    errors.value = {};

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        const response = await axios.post(route('admin.experiences.store'), {
            title: form.value.title,
            company: form.value.company,
            description: form.value.description,
            start_date: form.value.start_date,
            end_date: form.value.end_date,
            is_current: form.value.is_current ? 1 : 0,
            _token: csrfToken,
        }, {
            headers: {
                'X-CSRF-TOKEN': csrfToken,
            },
        });

        if (response.status === 200 || response.status === 201) {
            window.location.href = route('admin.experiences.index');
        }
    } catch (error) {
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
            <div class="mb-8">
                <h2 class="text-3xl font-bold" style="color: var(--color-text-primary)">
                    Add New Experience
                </h2>
                <p style="color: var(--color-text-secondary); margin-top: 4px;">
                    Add a new work experience to your profile
                </p>
            </div>

            <div class="max-w-2xl p-8 rounded-lg"
                style="background: var(--glass-background); border: var(--glass-border); box-shadow: var(--glass-shadow);">
                <form @submit.prevent="submitForm" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Job Title *
                        </label>
                        <input v-model="form.title" type="text" required placeholder="e.g., Software Developer"
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                        <p v-if="errors.title" class="text-xs mt-1" style="color: #ef4444;">{{ errors.title }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Company *
                        </label>
                        <input v-model="form.company" type="text" required placeholder="e.g., Tech Company Inc."
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                        <p v-if="errors.company" class="text-xs mt-1" style="color: #ef4444;">{{ errors.company }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Description
                        </label>
                        <textarea v-model="form.description" rows="4" placeholder="Describe your role and achievements..."
                            class="w-full px-4 py-2 rounded-lg resize-none"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);">
                        </textarea>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Start Date *
                        </label>
                        <input v-model="form.start_date" type="date" required
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                        <p v-if="errors.start_date" class="text-xs mt-1" style="color: #ef4444;">{{ errors.start_date }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            End Date
                        </label>
                        <input v-model="form.end_date" type="date" :disabled="form.is_current"
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                    </div>

                    <div class="flex items-center gap-3">
                        <input v-model="form.is_current" type="checkbox" class="w-4 h-4"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); cursor: pointer;" />
                        <label class="text-sm font-semibold" style="color: var(--color-text-primary); cursor: pointer;">
                            Currently working here
                        </label>
                    </div>

                    <div class="flex gap-3 pt-4">
                        <Button type="submit" variant="primary" :disabled="isSubmitting">
                            {{ isSubmitting ? 'Adding...' : 'Add Experience' }}
                        </Button>
                        <a :href="route('admin.experiences.index')"
                            class="px-6 py-2 rounded-lg font-semibold"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary); text-decoration: none; display: inline-block;">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.mb-8 { margin-bottom: 2rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mt-4 { margin-top: 1rem; }
.mt-1 { margin-top: 0.25rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.pt-4 { padding-top: 1rem; }
.p-8 { padding: 2rem; }
.text-3xl { font-size: 1.875rem; }
.text-sm { font-size: 0.875rem; }
.text-xs { font-size: 0.75rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.rounded-lg { border-radius: 0.5rem; }
.w-full { width: 100%; }
.w-4 { width: 1rem; }
.h-4 { height: 1rem; }
.max-w-2xl { max-width: 42rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.flex { display: flex; }
.items-center { align-items: center; }
.gap-3 { gap: 0.75rem; }
input, textarea { font-family: var(--font-primary); }
input:focus, textarea:focus { outline: none; border-color: rgba(56, 189, 248, 0.6); box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1); }
button:disabled { opacity: 0.6; cursor: not-allowed; }
textarea { resize: vertical; }
</style>