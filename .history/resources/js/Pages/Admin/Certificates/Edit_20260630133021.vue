<script setup>
import { ref } from 'vue';
import axios from 'axios';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Button from '@/Components/UI/Button.vue';

const props = defineProps({
    certificate: Object,
});

const form = ref({
    title: '',
    issuer: '',
    issue_date: '',
    expiry_date: '',
    credential_url: '',
    image: null,
});

const errors = ref({});
const isSubmitting = ref(false);

const initializeForm = () => {
    if (props.certificate) {
        form.value.title = props.certificate.title || '';
        form.value.issuer = props.certificate.issuer || '';
        form.value.issue_date = props.certificate.issue_date || '';
        form.value.expiry_date = props.certificate.expiry_date || '';
        form.value.credential_url = props.certificate.credential_url || '';
    }
};

const submitForm = async () => {
    isSubmitting.value = true;
    errors.value = {};

    try {
        const formData = new FormData();
        formData.append('title', form.value.title);
        formData.append('issuer', form.value.issuer);
        formData.append('issue_date', form.value.issue_date);
        formData.append('expiry_date', form.value.expiry_date);
        formData.append('credential_url', form.value.credential_url);
        formData.append('_method', 'PUT');
        
        if (form.value.image) {
            formData.append('image', form.value.image);
        }

        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        
        const response = await axios.post(route('admin.certificates.update', props.certificate.id), formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRF-TOKEN': csrfToken,
            },
        });

        if (response.status === 200 || response.status === 201) {
            window.location.href = route('admin.certificates.index');
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

initializeForm();
</script>

<template>
    <AdminLayout>
        <div>
            <div class="mb-8">
                <h2 class="text-3xl font-bold" style="color: var(--color-text-primary)">
                    Edit Certificate
                </h2>
                <p style="color: var(--color-text-secondary); margin-top: 4px;">
                    Update certificate information
                </p>
            </div>

            <div class="max-w-2xl p-8 rounded-lg"
                style="background: var(--glass-background); border: var(--glass-border); box-shadow: var(--glass-shadow);">
                <form @submit.prevent="submitForm" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Certificate Title *
                        </label>
                        <input v-model="form.title" type="text" required
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                        <p v-if="errors.title" class="text-xs mt-1" style="color: #ef4444;">{{ errors.title }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Issuer *
                        </label>
                        <input v-model="form.issuer" type="text" required
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                        <p v-if="errors.issuer" class="text-xs mt-1" style="color: #ef4444;">{{ errors.issuer }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Issue Date *
                        </label>
                        <input v-model="form.issue_date" type="date" required
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Expiry Date
                        </label>
                        <input v-model="form.expiry_date" type="date"
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Credential URL
                        </label>
                        <input v-model="form.credential_url" type="url"
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-2" style="color: var(--color-text-primary)">
                            Certificate Image
                        </label>
                        <input type="file" accept="image/*" @change="(e) => form.image = e.target.files[0]"
                            class="w-full px-4 py-2 rounded-lg"
                            style="background: var(--color-bg-secondary); border: 1.5px solid rgba(148, 163, 184, 0.2); color: var(--color-text-primary);" />
                    </div>

                    <div class="flex gap-3 pt-4">
                        <Button type="submit" variant="primary" :disabled="isSubmitting">
                            {{ isSubmitting ? 'Updating...' : 'Update Certificate' }}
                        </Button>
                        <a :href="route('admin.certificates.index')"
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
.max-w-2xl { max-width: 42rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.flex { display: flex; }
.gap-3 { gap: 0.75rem; }
input { font-family: var(--font-primary); }
input:focus { outline: none; border-color: rgba(56, 189, 248, 0.6); box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1); }
button:disabled { opacity: 0.6; cursor: not-allowed; }
</style>