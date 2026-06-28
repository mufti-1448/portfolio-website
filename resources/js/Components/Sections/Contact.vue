<script setup>
import { ref } from 'vue';
import Button from '@/Components/UI/Button.vue';

const formData = ref({
    name: '',
    email: '',
    message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

const handleSubmit = async () => {
    isSubmitting.value = true;
    submitStatus.value = null;

    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Form data:', formData.value);
        
        // Reset form
        formData.value = {
            name: '',
            email: '',
            message: '',
        };
        
        submitStatus.value = 'success';
        
        // Clear success message after 3 seconds
        setTimeout(() => {
            submitStatus.value = null;
        }, 3000);
    } catch (error) {
        submitStatus.value = 'error';
    } finally {
        isSubmitting.value = false;
    }
};

const contactInfo = [
    {
        label: 'Email',
        value: 'ali@example.com',
        icon: '📧',
        href: 'mailto:ali@example.com',
    },
    {
        label: 'WhatsApp',
        value: '+62 812 3456 7890',
        icon: '💬',
        href: 'https://wa.me/62812345678',
    },
    {
        label: 'LinkedIn',
        value: '@aliportfolio',
        icon: '💼',
        href: 'https://linkedin.com/in/aliportfolio',
    },
    {
        label: 'GitHub',
        value: '@alidev',
        icon: '🐙',
        href: 'https://github.com/alidev',
    },
];
</script>

<template>
    <!-- Contact Section -->
    <section
        id="contact"
        class="relative py-20"
        style="background-color: var(--color-bg-primary)"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Title -->
            <div class="mb-16 text-center">
                <h2
                    class="text-4xl md:text-5xl font-bold"
                    style="color: var(--color-text-primary)"
                >
                    Get in
                    <span style="color: var(--color-accent)">Touch</span>
                </h2>
                <p style="color: var(--color-text-secondary); margin-top: 8px;">
                    Have a project in mind? Let's talk about it
                </p>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Left: Contact Info -->
                <div
                    class="space-y-6"
                    style="animation: slideInLeft 600ms ease-out forwards;"
                >
                    <h3
                        class="text-2xl font-semibold"
                        style="color: var(--color-text-primary)"
                    >
                        Contact Information
                    </h3>

                    <!-- Contact Info Cards -->
                    <div class="space-y-4">
                        <a
                            v-for="info in contactInfo"
                            :key="info.label"
                            :href="info.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                            style="
                                background: var(--glass-background);
                                border: var(--glass-border);
                                box-shadow: var(--glass-shadow);
                            "
                            @mouseenter="$event.currentTarget.style.transform = 'translateX(8px)'; $event.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)'"
                            @mouseleave="$event.currentTarget.style.transform = 'translateX(0)'; $event.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)'"
                        >
                            <span class="text-3xl">{{ info.icon }}</span>
                            <div>
                                <p
                                    class="text-sm font-semibold"
                                    style="color: var(--color-text-secondary)"
                                >
                                    {{ info.label }}
                                </p>
                                <p
                                    class="text-lg font-medium"
                                    style="color: var(--color-text-primary)"
                                >
                                    {{ info.value }}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Right: Contact Form -->
                <div
                    class="p-8 rounded-lg"
                    style="
                        background: var(--glass-background);
                        border: var(--glass-border);
                        box-shadow: var(--glass-shadow);
                        animation: slideInRight 600ms ease-out forwards;
                    "
                >
                    <h3
                        class="text-2xl font-semibold mb-6"
                        style="color: var(--color-text-primary)"
                    >
                        Send me a Message
                    </h3>

                    <!-- Success Message -->
                    <div
                        v-if="submitStatus === 'success'"
                        class="mb-6 p-4 rounded-lg"
                        style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3);"
                    >
                        <p style="color: var(--color-success);" class="text-sm font-medium">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </p>
                    </div>

                    <!-- Error Message -->
                    <div
                        v-if="submitStatus === 'error'"
                        class="mb-6 p-4 rounded-lg"
                        style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3);"
                    >
                        <p style="color: var(--color-error);" class="text-sm font-medium">
                            ✗ Something went wrong. Please try again.
                        </p>
                    </div>

                    <!-- Form -->
                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <!-- Name Input -->
                        <div>
                            <label
                                class="block text-sm font-medium mb-2"
                                style="color: var(--color-text-secondary)"
                            >
                                Your Name
                            </label>
                            <input
                                v-model="formData.name"
                                type="text"
                                required
                                placeholder="John Doe"
                                class="w-full px-4 py-3 rounded-lg transition-all duration-300"
                                style="
                                    background: var(--color-bg-secondary);
                                    border: 1.5px solid rgba(148, 163, 184, 0.2);
                                    color: var(--color-text-primary);
                                "
                                @focus="$event.target.style.borderColor = 'rgba(56, 189, 248, 0.6)'; $event.target.style.boxShadow = '0 0 0 3px rgba(56, 189, 248, 0.1)'"
                                @blur="$event.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'; $event.target.style.boxShadow = 'none'"
                            />
                        </div>

                        <!-- Email Input -->
                        <div>
                            <label
                                class="block text-sm font-medium mb-2"
                                style="color: var(--color-text-secondary)"
                            >
                                Your Email
                            </label>
                            <input
                                v-model="formData.email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                class="w-full px-4 py-3 rounded-lg transition-all duration-300"
                                style="
                                    background: var(--color-bg-secondary);
                                    border: 1.5px solid rgba(148, 163, 184, 0.2);
                                    color: var(--color-text-primary);
                                "
                                @focus="$event.target.style.borderColor = 'rgba(56, 189, 248, 0.6)'; $event.target.style.boxShadow = '0 0 0 3px rgba(56, 189, 248, 0.1)'"
                                @blur="$event.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'; $event.target.style.boxShadow = 'none'"
                            />
                        </div>

                        <!-- Message Textarea -->
                        <div>
                            <label
                                class="block text-sm font-medium mb-2"
                                style="color: var(--color-text-secondary)"
                            >
                                Message
                            </label>
                            <textarea
                                v-model="formData.message"
                                required
                                rows="5"
                                placeholder="Tell me about your project..."
                                class="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none"
                                style="
                                    background: var(--color-bg-secondary);
                                    border: 1.5px solid rgba(148, 163, 184, 0.2);
                                    color: var(--color-text-primary);
                                    font-family: var(--font-primary);
                                "
                                @focus="$event.target.style.borderColor = 'rgba(56, 189, 248, 0.6)'; $event.target.style.boxShadow = '0 0 0 3px rgba(56, 189, 248, 0.1)'"
                                @blur="$event.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'; $event.target.style.boxShadow = 'none'"
                            ></textarea>
                        </div>

                        <!-- Submit Button -->
                        <div class="pt-2">
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                :disabled="isSubmitting"
                            >
                                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.relative {
    position: relative;
}

.max-w-7xl {
    max-width: 80rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.sm\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.py-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.grid {
    display: grid;
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.lg\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-12 {
    gap: 3rem;
}

.gap-4 {
    gap: 1rem;
}

.mb-16 {
    margin-bottom: 4rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.p-4 {
    padding: 1rem;
}

.p-8 {
    padding: 2rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.text-4xl {
    font-size: 2.25rem;
}

.md\:text-5xl {
    font-size: 3rem;
}

.text-3xl {
    font-size: 1.875rem;
}

.text-2xl {
    font-size: 1.5rem;
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

.space-y-6 > * + * {
    margin-top: 1.5rem;
}

.space-y-4 > * + * {
    margin-top: 1rem;
}

.space-y-4 {
    display: flex;
    flex-direction: column;
}

.space-y-4 > * + * {
    margin-top: 1rem;
}

.space-y-4 > * {
    margin-top: 0;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.items-start {
    align-items: flex-start;
}

.items-center {
    align-items: center;
}

.gap-4 {
    gap: 1rem;
}

.w-full {
    width: 100%;
}

.text-center {
    text-align: center;
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.duration-300 {
    transition-duration: 300ms;
}

.pt-2 {
    padding-top: 0.5rem;
}

input,
textarea {
    font-family: var(--font-primary);
}

input::placeholder,
textarea::placeholder {
    color: var(--color-text-tertiary);
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

@media (max-width: 1024px) {
    .lg\:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .md\:text-5xl {
        font-size: 2.25rem;
    }

    .gap-12 {
        gap: 2rem;
    }
}
</style>