<script setup>
console.log("hola")
import data from "../data.json"
const url = '../country/'
</script>

<template>
    <div class="home">
        <h1>All Destinations</h1>

        <div class="destinations">
            <li v-for="(destination) in data.destinations" :key="destination.id" class="li">
                
                <RouterLink :to="url + destination.id" >
                    <h2>{{ destination.name }}</h2>
                    <img :src="'../../public/images/'  + destination.image" alt="foto-pais ">
                </RouterLink>
            </li>
        </div>
    </div>

</template>

<style scoped>
    .li {
        list-style-type: none;
    }
</style>