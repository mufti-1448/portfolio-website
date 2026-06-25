<template>
    <div
        v-if="message"
        style="color: var(--color-error); font-size: 14px; margin-top: 6px"
    >
        {{ message }}
    </div>
</template>

<script setup>
defineProps({
    message: {
        type: [String, Array],
        default: "",
    },
});
</script>
