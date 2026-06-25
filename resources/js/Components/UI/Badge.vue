<template>
  <span :class="['badge', `badge-${variant}`]">
    {{ text }}
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  text: String
})
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-primary {
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.3);
  color: var(--color-primary);
}

.badge-accent {
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: var(--color-accent);
}

.badge-success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--color-success);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #F59E0B;
}

.badge-error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: var(--color-error);
}
</style>