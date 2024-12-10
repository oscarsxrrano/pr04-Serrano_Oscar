<script setup>
import GoBack from '@/components/GoBack.vue';
import ExperienceView from './ExperienceView.vue';
import { useRouter, useRoute} from 'vue-router';
import data from "../data.json";

const router = useRouter();
const route = useRoute();

const destination = data.destinations[route.params.id - 1];
</script>

<template>

    <GoBack/>
    
    <div class="destination">
        <h1>{{ data.destinations[$route.params.id - 1].name }}</h1>
        <img :src="'../../public/images/' + destination.image" alt="foto pais">
        <p>
            {{ destination.description }}
        </p>
    </div>
    
    <ExperienceView :destinationId="route.params.id"/>
    

</template>