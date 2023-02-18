<script>
import Experience from './Experience.vue'
import experience_list from '../assets/experiences.json'
export default {
    data() {
        return {
            experiences: experience_list,
        }
    },
    components: {
        Experience,
    }
}
</script>

<template>
    <section id="about">
        <h2>Experience</h2>
        <Experience v-for="exp in experiences" :year="exp.year" :experience="exp.exp"></Experience>
    </section>
</template>

<style scoped>

</style>