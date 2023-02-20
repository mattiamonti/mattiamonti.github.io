<script>
export default {}
</script>

<template>
    <nav>
        <div>
            <a href="" class="name-container">
                <div id="memoji"> </div>
                <p class="name">Mattia Monti</p>
            </a>
        </div>
        <div class="menu">
            <a href="#projects">
                <p>Works</p>
            </a>
            <a href="#about">
                <p>About</p>
            </a>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    width: auto;
    margin-top: 2rem;
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
}

.menu p {
    opacity: 0.6;
}

p {
    transition: ease-in-out 200ms;
}

.menu p:hover {
    opacity: 1;
    scale: 1.1;
}

#memoji {
    height: 3rem;
    width: 3rem;
    background-image: url('../assets/memoji/memoji_1.png');
    background-size: contain;
    background-repeat: no-repeat;
    transition: ease-in-out 200ms;
}

.name-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.name-container:hover #memoji {
    background-image: url('../assets/memoji/memoji_2.png');
}

@media only screen and (max-width: 600px) {
    .menu {
        display: none;
    }

    #memoji {
        width: 2.5rem;
        height: 2.5rem;
    }
}
</style>
