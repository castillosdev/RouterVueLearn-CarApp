<script setup>
import { ref } from "vue";
import {RouterView} from "vue-router"
import Nav from "./components/Nav.vue"

const count = ref(0);
</script>

<template>
  <div>
    <Nav />
    <RouterView />
    <!-- This Demonstrates that using hrefs in Vue 3 is not a good idea. -->
    <!-- <div class="flex flex-col justify-center items-center text-4xl">
      <h1 class="mb-5">This Should Stay The Same!</h1>
      {{ count  }}
      <div class="flex flex-row">
        <button class="pr-5" @click="count++">+</button>
        <button @click="count--">-</button>
      </div>
    </div> -->
  </div>
</template>