<template>
    <AuthenticatedLayout>
        <div style="padding: 40px; max-width: 1200px; margin: 0 auto">
            <h1 class="h1" style="margin-bottom: 40px">Component Testing</h1>

            <!-- Button Variants -->
            <section style="margin-bottom: 40px">
                <h2 class="h3" style="margin-bottom: 20px">Buttons</h2>
                <div style="display: flex; gap: 12px; flex-wrap: wrap">
                    <Button variant="primary" size="md">Primary Button</Button>
                    <Button variant="secondary" size="md"
                        >Secondary Button</Button
                    >
                    <Button variant="ghost" size="md">Ghost Button</Button>
                    <Button variant="primary" size="lg" full-width
                        >Full Width</Button
                    >
                </div>
            </section>

            <!-- Card -->
            <section style="margin-bottom: 40px">
                <h2 class="h3" style="margin-bottom: 20px">Cards</h2>
                <Card hoverable>
                    <h3 class="h4" style="margin-bottom: 12px">Sample Card</h3>
                    <p class="body-small">
                        This is a card component with glassmorphism effect
                    </p>
                </Card>
            </section>

            <!-- Badges -->
            <section>
                <h2 class="h3" style="margin-bottom: 20px">Badges</h2>
                <div style="display: flex; gap: 12px; flex-wrap: wrap">
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
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Button from "@/Components/UI/Button.vue"
import Card from "@/Components/UI/Card.vue";
import Badge from "@/Components/UI/Badge.vue";
</script>
