<template>
  <AuthenticatedLayout>
    <div style="padding: 40px; max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 40px; color: #F8FAFC;">
        Component Testing
      </h1>

      <!-- Button Variants -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 20px; color: #F8FAFC;">
          Buttons
        </h2>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <Button variant="primary" size="md">Primary Button</Button>
          <Button variant="secondary" size="md">Secondary Button</Button>
          <Button variant="ghost" size="md">Ghost Button</Button>
        </div>
      </section>

      <!-- Card -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 20px; color: #F8FAFC;">
          Cards
        </h2>
        <Card hoverable>
          <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 12px; color: #F8FAFC;">
            Sample Card
          </h3>
          <p style="color: #94A3B8; line-height: 1.6;">
            This is a card component with glassmorphism effect
          </p>
        </Card>
      </section>

      <!-- Badges -->
      <section>
        <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 20px; color: #F8FAFC;">
          Badges
        </h2>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <Badge variant="primary" text="Vue.js" />
          <Badge variant="accent" text="Laravel" />
          <Badge variant="success" text="Completed" />
          <Badge variant="warning" text="In Progress" />
          <Badge variant="error" text="Error" />
        </div>
      </section>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Button from '@/Components/UI/Button.vue'
import Card from '@/Components/UI/Card.vue'
import Badge from '@/Components/UI/Badge.vue'
</script>