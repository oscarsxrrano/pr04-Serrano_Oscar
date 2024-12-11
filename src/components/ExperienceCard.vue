<script setup>
const props = defineProps({
    experience: Object,
});


const emit = defineEmits(['click']);
</script>

<template>
    <div class="card" @click="$emit('click', experience)">
        <img :src="'../../public/images/' + experience.image" alt="imatge de {{ experience.name }}" />

        <div class="card__text">
            {{ experience.name }}
        </div>
    </div>
</template>
