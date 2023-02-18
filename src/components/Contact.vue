<script>
export default {
}
</script>

<template>
    <div>
        <a href="mailto:mattiamonti2001@gmail.com">
            <h2>Contact me ➫</h2>
        </a>

        <div class="links">
            <a href="https://github.com/mattiamonti" target="_blank"><img src="../assets/programming-logos/github.svg"
                    alt="Github"></a>
            <a href="https://www.linkedin.com/in/montimattia/" target="_blank"><img
                    src="../assets/programming-logos/linkedin.svg" alt="LinkedIn"></a>
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-top: 8rem;
    text-align: center;
    transition: ease-in-out 200ms;
}

h2:hover {
    color: rgb(175, 81, 61);
    scale: 1.1;
}

.links {
    display: flex;
    justify-content: center;
    gap: 3rem;
}

img {
    filter: invert(0.4);
}

img:hover {
    filter: invert(0.8);
    scale: 1.1;
}

@media (prefers-color-scheme: light) {
    h2:hover {
        color: rgb(222, 128, 108);
    }

    img {
        filter: invert(0.6);
    }

    img:hover {
        filter: invert(0.2);
    }
}
</style>
