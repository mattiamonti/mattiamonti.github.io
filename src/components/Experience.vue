<script>
export default {
    props: {
        year: String,
        experience: String,
    }
}
</script>

<template>
    <div class="exp-container">
        <h4>{{ year }}</h4>
        <p>{{ experience }}</p>
    </div>
</template>

<style scoped>
.exp-container {
    display: flex;
    gap: 1rem;
    align-items: baseline;
    margin-bottom: 1rem;
}

h4 {
    min-width: 6rem;
    color: rgb(175, 81, 61);
}

@media (prefers-color-scheme: light) {
    h4 {
        color: rgb(222, 128, 108);
    }
}

@media only screen and (max-width: 600px) {
    .exp-container {
        gap: 0rem;
    }

    h4 {
        min-width: 3.5rem;
    }
}
</style>