<script setup>
    import {useRoute, RouterView, useRouter} from "vue-router"
    import cars from "../data/cars.json"

    const route = useRoute()
    const router = useRouter()
    const carId = parseInt(route.params.id)
    const car = cars.find(car => car.id === carId);
    const showContact = () => {
        router.push(`/cars/${carId}/contact`)
    }
</script>
<template>
    <div v-if="car" class="car">
        <img :src="car.image" alt="car.name" />
        <h1>{{ car.name }}</h1>
        <p>{{ car.price }}</p>
        <button @click="showContact">Show Contact Information</button>
        
        <RouterView />
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>

<style scoped>
/* style cars into cards in a grid with 3 cols */
<style scoped>
.car {
    margin: 0 auto;
    gap: 1rem;
    padding: 1rem;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.car img {
    width: 50%;
    height: 100%;
    border-radius: 5px;
}

.car button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

/* Responsive styles */
@media (max-width: 768px) {
    .car {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}
</style>