<template>
    <input
        :type="type"
        class="input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
    />
</template>

<script setup>
import { computed } from "vue";

defineProps({
    type: {
        type: String,
        default: "text",
    },
    modelValue: {
        type: String,
        required: true,
    },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.input {
    width: 100%;
    padding: 12px 16px;
    background-color: var(--color-bg-secondary);
    border: 1.5px solid rgba(148, 163, 184, 0.2);
    border-radius: 8px;
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    font-size: 16px;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input::placeholder {
    color: var(--color-text-tertiary);
}

.input:focus {
    outline: none;
    border-color: rgba(56, 189, 248, 0.6);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
}

/* Dark mode text visibility */
.input::placeholder {
    color: var(--color-text-tertiary);
}

/* Autofill styling */
.input:-webkit-autofill,
.input:-webkit-autofill:hover,
.input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px var(--color-bg-secondary) inset !important;
    -webkit-text-fill-color: var(--color-text-primary) !important;
    caret-color: var(--color-text-primary);
}
</style>
