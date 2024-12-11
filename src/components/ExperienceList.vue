<script setup>
import ExperienceCard from './ExperienceCard.vue';

const props = defineProps({
    experiences: Array,
});

const emit = defineEmits(['selectExperience']);

</script>

<template>
    <div class="cards">
        <ExperienceCard v-for="experience in experiences" :key="experience.id" :experience="experience"
            @click="$emit('selectExperience', experience)" />
    </div>
</template>
