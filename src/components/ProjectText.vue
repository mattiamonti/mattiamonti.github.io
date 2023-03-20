<script>
export default {
    props: {
        id: Number,
        title: String,
        description: String,
    }
}
</script>

<template>
    <div class="text-container">
        <div class="text">
            <p class="caption">N.{{ id.toString().padStart(3, '0') }}</p>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <p class="click-cue">Click to read more!</p>
        </div>
    </div>
</template>

<style scoped>
.text-container {
    display: flex;
    align-items: center;
    padding-left: 2rem;
    transform: translateX(-10px);
    transition: ease-in-out 100ms;
}

.text-container:hover {
    background-color: #242424;
    border-radius: 0 10px 10px 0;
}

.click-cue {
    font-size: 1.15em;
    font-weight: bold;
    color: var(--accent-color);
    opacity: 0;
    transition: ease-in 300ms;
}

.text-container:hover .click-cue {
    opacity: 1;
}

p {
    margin-top: 1rem;
}

.caption {
    font-size: 1em;
    opacity: 0.6;
    font-weight: bold;
}

@media (prefers-color-scheme: light) {
    .text-container:hover {
        background-color: #efefef;
    }

    .click-cue {
        color: var(--accent-color);
    }
}

@media only screen and (max-width: 600px) {
    .text-container {
        transform: none;
        padding: 0 0.5rem;
    }
}
</style>