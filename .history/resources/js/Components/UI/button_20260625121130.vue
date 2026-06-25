<template>
  <button 
    :class="[
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      { 'btn-full-width': fullWidth }
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
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
</script>

<style scoped>
.btn {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing-out);
  border: none;
}

/* Variants */
.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: var(--color-text-primary);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

.btn-secondary {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: var(--glass-border);
}

.btn-secondary:hover:not(:disabled) {
  border-color: rgba(56, 189, 248, 0.5);
  color: var(--color-accent);
}

/* Sizes */
.btn-sm { padding: 8px 16px; font-size: var(--text-sm); }
.btn-md { padding: 12px 24px; font-size: var(--text-base); }
.btn-lg { padding: 16px 32px; font-size: var(--text-lg); }

/* States */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-full-width {
  width: 100%;
}
</style>