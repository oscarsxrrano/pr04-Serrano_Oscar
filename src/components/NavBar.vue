<script setup>
import data from '../data.json'
const url = '../country/'
</script>

<template>
    <nav id="nav">
        <ul>
            <RouterLink class="rout" to="/">Home</RouterLink>
            <RouterLink v-for="(country, i) in data.destinations" :to="url + country.id" :key="i">
                {{ country.name }}
            </RouterLink>
        </ul>
    </nav>   
</template>