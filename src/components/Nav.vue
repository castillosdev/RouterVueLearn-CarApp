<template>
    <div class="flex items-center justify-between bg-slate-600 p-4">
        <h1 class="text-xl font-bold">Nav</h1>
        <div class="space-x-4">
            <RouterLink active-class="text-red-500" class="text-blue-500 hover:text-blue-700" to="/">Home</RouterLink>
            <RouterLink active-class="text-red-500" class="text-blue-500 hover:text-blue-700" to="/about">About</RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from "vue-router"
</script>

<style scoped>
</style>