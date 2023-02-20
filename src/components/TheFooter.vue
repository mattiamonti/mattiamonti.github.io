<script>
export default {}
</script>

<template>
    <footer>
        <p>©2023</p>
        <p>Designed and developed by Mattia Monti</p>
    </footer>
</template>

<style scoped>
footer {
    width: full;
    display: flex;
    justify-content: space-between;
    background-color: #242424;
    padding: 2rem 4rem;
    margin-top: 8rem;
}

@media (prefers-color-scheme: light) {
    footer {
        background-color: #efefef;
    }

}

p {
    opacity: 0.8;
    font-size: 1em;
}

@media only screen and (max-width: 600px) {
    footer {
        margin-top: 4rem;
        padding: 1rem 1rem;
    }

    p {
        font-size: 0.8em;
    }

}
</style>