<script setup>
    import {useRoute} from "vue-router"
    import cars from "../data/cars.json"
    const route = useRoute()
    const car = cars.find(car => car.id === parseInt(route.params.id))
</script>

<template>
    <div v-if="car" class="contact">
        <h1>Contact Info</h1>
        <p>{{ car.contact.dealer }}</p>
        <p>{{ car.contact.phone }}</p>
    </div>
</template>

<style scoped>
    .contact {
        margin: 0 auto;
        gap: 1rem;
        padding: 1rem;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        justify-items: center;
    }
</style>