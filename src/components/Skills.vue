<script>
export default {
    props: {
        name: String,
        logo: String,
    },
    data() {
        return {
            path: 'src/assets/programming-logos/'
        }
    }
}
</script>

<template>
    <img :src="path + logo" :alt="name">
</template>

<style scoped>
img {
    margin: 0 1rem;
    filter: invert(0.4);
}

@media (prefers-color-scheme: dark) {
    img {
        filter: invert(0.8);
    }
}
</style>