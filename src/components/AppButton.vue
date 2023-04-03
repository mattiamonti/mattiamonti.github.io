<script setup>
defineProps({
    name: String,
    img: String,
})
</script>
<template>
    <div class="button-container">
        <div class="button">
            <img :src="img" alt="">
            <p class="text">{{ name }}</p>
        </div>
    </div>
</template>
<style scoped>
.button-container {
    margin-top: -1rem;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
}

.button {
    width: fit-content;
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 5px;
    transition: ease-in-out 300ms;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.button-container:active .button {
    background-color: rgba(0, 0, 0, 0.8)
}


.button-container:hover .button {
    scale: 0.95;
}

p.text {
    color: var(--color-white);
    font-weight: 700;
    font-size: 1.5rem;
    display: inline;
}

img {
    display: inline;
    filter: invert();
}
</style>