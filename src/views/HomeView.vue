<script setup>
    import cars from "../data/cars.json"
    import {RouterLink} from "vue-router"
</script>

<template>
    <div>
        <h1>Home</h1>
        <div  class="cars">
            <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">
                <h2>{{ car.name }}</h2>
                <p>{{ car.price }}</p>
                <!-- add image from data -->
                <img :src="car.image" alt="car.name" />
            </RouterLink>
        </div>
    </div>
</template>

<style>
/* style cars into cards in a grid with 3 cols */
.cars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color: white;
}

/* responsive styles */
@media (max-width: 768px) {
    .cars {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .cars {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>