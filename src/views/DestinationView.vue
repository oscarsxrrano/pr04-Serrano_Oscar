<script setup>
import GoBack from '@/components/GoBack.vue';
import ExperienceView from './ExperienceView.vue';
import { useRouter} from 'vue-router';
import data from "../data.json";

const router = useRouter()

</script>

<template>

    <GoBack/>
    
    <div class="destination">
        <h1>{{ data.destinations[$route.params.id - 1].name }}</h1>
        <img :src="'../../public/images/' + data.destinations[$route.params.id - 1].image" alt="foto pais">
    </div>
    
    <ExperienceView/>

</template>