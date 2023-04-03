<script setup>
defineProps({
    name: String
})
</script>
<template>
    <div class="menu-button">
        <p class="menu-text">{{ name }}</p>
    </div>
</template>
<style scoped>
.menu-button {
    width: fit-content;
    padding: 1rem 1rem;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 5px;
    transition: ease-in-out 200ms;
}


.menu-button:hover {
    background-color: rgba(0, 0, 0, 0.6);
}

.menu-button:active {
    scale: 0.9;
}

p.menu-text {
    color: var(--color-white);
    font-weight: 600;
}
</style>