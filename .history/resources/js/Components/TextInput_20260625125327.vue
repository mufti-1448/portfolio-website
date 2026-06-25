<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="rounded-md shadow-sm transition-all duration-300"
        style="
            background-color: var(--color-bg-secondary);
            border: var(--glass-border);
            color: var(--color-text-primary);
            padding: 10px 16px;
            font-family: var(--font-primary);
            font-size: 1rem;
        "
        :style="{
            borderColor: 'rgba(148, 163, 184, 0.2)',
        }"
        @focus="$el.style.borderColor = 'rgba(56, 189, 248, 0.6)'"
        @blur="$el.style.borderColor = 'rgba(148, 163, 184, 0.2)'"
        v-model="model"
        ref="input"
    />
</template>

<style scoped>
input::placeholder {
    color: var(--color-text-tertiary);
}

input {
    width: 100%;
}
</style>