<script setup>
import TheGeometricShape from './TheGeometricShape.vue';
</script>

<template>
    <section>
        <div>
            <h1>Web Designer & Developer</h1>
            <p>I'm currently studying Internet of Things, Big Data, Machine learning at the University of Udine,
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
    width: 10ch;
}

p {
    margin-bottom: 2rem;
    width: 40ch;
}

@media only screen and (max-width: 600px) {
    section {
        display: block;
        width: 100%;
    }

    p {
        width: 30ch;
    }
}
</style>