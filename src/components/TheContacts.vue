<script setup>
import AppButton from './AppButton.vue';
</script>
<template>
    <section id="contact">
        <div>
            <a href="https://www.linkedin.com/in/montimattia/" target="_blank">
                <AppButton name="@ LinkedIn"></AppButton>
            </a>
            <a href="https://github.com/mattiamonti" target="_blank">
                <AppButton name="@ Github"></AppButton>
            </a>
            <a href="mailto:mattiamonti2001@gmail.com" target="_blank">
                <AppButton name="Email"></AppButton>
            </a>
        </div>
    </section>
</template>
<style scoped>
section {
    padding: 1rem var(--padding-side) 1rem 1rem;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

section div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>