<template>
  <div 
    :class="['card', { 'card-hoverable': hoverable }]"
    @click="clickable && $emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: true
  },
  clickable: Boolean
})

defineEmits(['click'])
</script>

<style scoped>
.card {
  background: var(--glass-background);
  backdrop-filter: var(--glass-backdrop-filter);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--glass-shadow);
  transition: all var(--duration-normal) var(--easing-in-out);
}

.card-hoverable:hover {
  transform: translateY(-8px);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.3);
}

.card-clickable {
  cursor: pointer;
}
</style>