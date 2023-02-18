<script setup>
import TheGeometricShape from './TheGeometricShape.vue';
</script>

<template>
    <section>
        <div>
            <h1>Web Designer <br /> & Developer</h1>
            <p>I'm currently studying Internet of Things, Big Data,<br /> Machine learning at the University of Udine,
                in Italy.</p>
        </div>
        <TheGeometricShape></TheGeometricShape>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 2rem;
    min-height: 60vh;
}

h1 {
    margin-bottom: 2rem;
}

p {
    margin-bottom: 2rem;
}
</style>