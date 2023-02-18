<script>
export default {

}
</script>

<template>
    <div class="image-container rotating">
        <img src="../assets/geometric-shape/geom1.svg" alt="" id="geom1">
        <img src="../assets/geometric-shape/geom2.svg" alt="" id="geom2">
        <img src="../assets/geometric-shape/geom3.svg" alt="" id="geom3">
    </div>
</template>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
}

img {
    position: absolute;
    scale: 0.8;
    transition: ease-in-out 300ms;
}

#geom1 {
    z-index: 4;
}

#geom2 {
    z-index: 3;
}

#geom3 {
    z-index: 2;
}

.image-container:hover>#geom1 {
    transform: translate(2rem, -2rem);
}

.image-container:hover>#geom2 {
    transform: translate(-2rem, -0rem);
}

.image-container:hover>#geom3 {
    transform: translate(2rem, 2rem);
}

@-webkit-keyframes rotating

/* Safari and Chrome */
    {
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes rotating {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.rotating {
    -webkit-animation: rotating 30s linear infinite;
    -moz-animation: rotating 30s linear infinite;
    -ms-animation: rotating 30s linear infinite;
    -o-animation: rotating 30s linear infinite;
    animation: rotating 120s linear infinite;
}
</style>