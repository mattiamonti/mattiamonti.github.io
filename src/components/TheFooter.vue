<script setup></script>
<template>
    <section>
        <div id="footer" v-motion-fade-visible>
            <p>©2023</p>
            <p>Designed & developed by Mattia Monti</p>
        </div>
    </section>
</template>
<style scoped>
section {
    padding: 1rem var(--padding-side) 1rem var(--padding-side);
    display: flex;
    justify-content: center;
}

#footer {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: fit-content;
    font-weight: 500;
}

@media only screen and (max-width: 600px) {
    section {
        padding: 1rem;
    }

    #footer {
        scale: 0.7;
    }
}
</style>