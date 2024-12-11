<script setup>
import ExperienceList from '@/components/ExperienceList.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import data from "../data.json";

const route = useRoute();
const selectedExperience = ref(null);

const destination = ref(null);

const cargarPais = () => {
    selectedExperience.value = null;
    destination.value = data.destinations[route.params.id - 1];
};



cargarPais();


watch(() => route.params.id, cargarPais);

const activarExp = (experience) => {
    selectedExperience.value = experience;
};
</script>

<template>
    <div>

        <div class="destination-details" v-if="destination">
            <img :src="'../../public/images/' + destination.image" alt="imatge de {{ destination.name }}" />
            <div>
                <h1>{{ destination.name }}</h1>
                <p>{{ destination.description }}</p>
            </div>
        </div>

        <div class="experiences" v-if="destination">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <ExperienceList :experiences="destination.experiences" @selectExperience="activarExp" />
        </div>

        <div v-if="selectedExperience" class="experience-details">
            <h2>{{ selectedExperience.name }}</h2>
            <img :src="'../../public/images/' + selectedExperience.image"
                alt="imatge de {{ selectedExperience.name }}" />


            <p>{{ selectedExperience.description }}</p>
        </div>

    </div>
</template>

<style scoped>
.experience-details {
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
}

.experience-details img {
    max-width: 400px;
}
</style>
