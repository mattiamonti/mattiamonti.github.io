<script setup>
import AppProject from './AppProject.vue';
</script>
<template>
    <section id="projects">
        <AppProject></AppProject>
        <AppProject></AppProject>
        <AppProject></AppProject>

    </section>
</template>
<style scoped>
section {
    padding: 1rem var(--padding-side);
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
</style>