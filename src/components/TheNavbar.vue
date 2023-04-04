<script setup>
import AppMenuButton from './AppMenuButton.vue';
import AppMenuButtonFilled from './AppMenuButtonFilled.vue';
</script>
<template>
    <div id="nav-container" v-motion-slide-top>
        <nav>
            <div id="first-cluster">
                <AppMenuButton name="Home"></AppMenuButton>
                <AppMenuButton name="Works"></AppMenuButton>
                <AppMenuButton name="About"></AppMenuButton>
            </div>
            <AppMenuButtonFilled name="Contact"></AppMenuButtonFilled>
        </nav>
    </div>
</template>
<style scoped>
#nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem var(--padding-side) 1rem var(--padding-side);
}

nav {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    background-color: rgba(0, 0, 0, 0.1);
    width: auto;
    border-radius: 10px;
    padding: 0.4rem;
}

#first-cluster {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
}
</style>