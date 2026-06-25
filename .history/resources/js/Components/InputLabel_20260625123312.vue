<template>
    <label
        :for="forAttribute"
        style="
            color: var(--color-text-secondary);
            font-weight: 500;
            display: block;
            margin-bottom: 6px;
        "
    >
        <slot></slot>
    </label>
</template>

<script setup>
defineProps({
    forAttribute: {
        type: String,
        required: true,
    },
});
</script>
