<template>
    <div
        class="min-h-screen flex items-center justify-center"
        style="background-color: var(--color-bg-primary)"
    >
        <!-- Background Elements (optional) -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute top-20 right-20 w-72 h-72 rounded-full"
                style="background: rgba(56, 189, 248, 0.1); filter: blur(40px)"
            ></div>
            <div
                class="absolute bottom-20 left-20 w-72 h-72 rounded-full"
                style="background: rgba(37, 99, 235, 0.1); filter: blur(40px)"
            ></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 w-full max-w-md px-4">
            <!-- Logo / Title -->
            <div class="mb-8 text-center">
                <h1
                    class="text-3xl font-bold"
                    style="color: var(--color-accent)"
                >
                    Portfolio
                </h1>
            </div>

            <!-- Card -->
            <div
                class="rounded-lg p-8"
                style="
                    background: var(--glass-background);
                    border: var(--glass-border);
                    box-shadow: var(--glass-shadow);
                "
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.absolute {
    position: absolute;
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.overflow-hidden {
    overflow: hidden;
}

.pointer-events-none {
    pointer-events: none;
}

.top-20 {
    top: 5rem;
}

.right-20 {
    right: 5rem;
}

.w-72 {
    width: 18rem;
}

.h-72 {
    height: 18rem;
}

.rounded-full {
    border-radius: 9999px;
}

.bottom-20 {
    bottom: 5rem;
}

.left-20 {
    left: 5rem;
}

.relative {
    position: relative;
}

.z-10 {
    z-index: 10;
}

.w-full {
    width: 100%;
}

.max-w-md {
    max-width: 28rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.mb-8 {
    margin-bottom: 2rem;
}

.text-center {
    text-align: center;
}

.text-3xl {
    font-size: 1.875rem;
}

.font-bold {
    font-weight: 700;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.p-8 {
    padding: 2rem;
}
</style>
