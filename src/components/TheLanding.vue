<script setup>
import AppButton from './AppButton.vue';
</script>
<template>
    <section>
        <div>
            <h1>Creative Develø_<br>_per</h1>
            <a href="#projects">
                <AppButton name="See my works" img="/src/assets/microscope.svg"></AppButton>
            </a>
        </div>
        <div class="post-container">
            <div class="post">
                <h4>Hi! I'm Mattia Monti, currently a student of Internet of Things, Big Data, Machine learning at the
                    University of Udine in
                    Italy.</h4>
            </div>
            <div class="post">
                <h4>I’m intrested in bla bla bla web design and some shit.</h4>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    padding: 1rem var(--padding-side);
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

h1 {
    text-transform: uppercase;
    width: 50%;
}

.post-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    width: 100%;
}

.post {
    padding: 2rem 1rem;
    width: 60%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

@media only screen and (max-width: 600px) {
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    section div {
        width: fit-content;
    }

    .post {
        width: 100%;
    }
}
</style>