<template>
  <button 
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'secondary', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: v => ['sm', 'md', 'lg'].includes(v)
  },
  fullWidth: Boolean,
  disabled: Boolean
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  return [
    'btn',
    `btn-${props.variant}`,
    `btn-${props.size}`,
    { 'btn-full-width': props.fullWidth }
  ]
})
</script>

<style scoped>
.btn {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-out);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

/* Variants */
.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: var(--color-text-primary);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}

.btn-secondary {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: 1.5px solid rgba(148, 163, 184, 0.2);
}

.btn-secondary:hover:not(:disabled) {
  border-color: rgba(56, 189, 248, 0.5);
  color: var(--color-accent);
  background: rgba(30, 41, 59, 0.95);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
}

.btn-ghost:hover:not(:disabled) {
  color: var(--color-accent);
}

/* Sizes */
.btn-sm {
  padding: 8px 16px;
  font-size: var(--text-sm);
}

.btn-md {
  padding: 12px 24px;
  font-size: var(--text-base);
}

.btn-lg {
  padding: 16px 32px;
  font-size: var(--text-lg);
}

/* States */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-full-width {
  width: 100%;
}
</style>