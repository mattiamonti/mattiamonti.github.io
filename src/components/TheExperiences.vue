<script setup>
import AppExperienceYear from './AppExperienceYear.vue';
const experiences_2023 = [
    { "text": 'prima esp' },
    { "text": 'seconda esp' },
    { "text": 'terza esp' }
]


</script>
<template>
    <section id="experience">
        <AppExperienceYear year="2023" :experiences="experiences_2023"></AppExperienceYear>
        <AppExperienceYear year="2022"></AppExperienceYear>
    </section>
</template>
<style scoped>
section {
    padding: 1rem 1rem 1rem var(--padding-side);
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>