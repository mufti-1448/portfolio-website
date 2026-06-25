<script setup>
import { onMounted, ref } from "vue";

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input :type="type" class="input" v-bind="$attrs" />
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: "text",
    },
});
</script>

<style scoped>
.input {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg-secondary);
    border: var(--glass-border);
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    font-size: var(--text-base);
    transition: all var(--duration-normal) var(--easing-out);
}

.input::placeholder {
    color: var(--color-text-tertiary);
}

.input:focus {
    outline: none;
    border-color: rgba(56, 189, 248, 0.6);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
    background: var(--color-bg-primary);
}
</style>
