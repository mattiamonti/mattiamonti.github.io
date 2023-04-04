<script setup>
import { ref } from 'vue'
const show = ref(false)

defineProps({
    title: String,
    description: String,
    img: String,
})
</script>
<template>
    <div class="project-container">
        <div class="line"> </div>
        <div class="project" v-motion-slide-visible-left>
            <div @mouseenter="show = true" @mouseleave="show = false">
                <h2>Project 1</h2>
                <div class="spacer"> </div>
                <p>Lorem ipsum dolor sit amen ipsum dolor sit amen ipsum dolor sit amen</p>
            </div>
            <p class="link">View more</p>
        </div>
    </div>
    <div v-if="show" class="prova-img" v-motion-fade></div>
</template>
<style scoped>
.prova-img {
    width: 30vw;
    height: 30vw;
    position: absolute;
    border-radius: 10px;
    right: 4%;
    background-color: red;
    z-index: 10;
}

.project-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.line {
    width: 100%;
    height: 0.5rem;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.project {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.project div {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.spacer {
    width: 0.25rem;
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h2,
p,
.spacer {
    margin: 0;
    display: inline;
}

p.link {
    color: var(--color-black);
    font-weight: 700;
    font-size: 1.5rem;
    display: inline;
    transition: ease-in-out 300ms;
}

p.link:hover {
    text-decoration: underline;

}
</style>