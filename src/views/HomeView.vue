<script setup>
console.log("hola")
import data from "../data.json"
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="home">
        <h1>All Destinations</h1>

        <div class="destinations">
            <RouterLink v-for="destination in data.destinations" 
            :key="destination.id" 
            :to="{
                name: 'destination.show', 
                params: {id: destination.id, slug:destination.slug}}">

                <h2>{{ destination.name }}</h2>
                <img :src="`/images/${destination.image}`" :alt="destination.name">

            
            </RouterLink>
        </div>
    </div>

</template>

<style scoped>
    
</style>