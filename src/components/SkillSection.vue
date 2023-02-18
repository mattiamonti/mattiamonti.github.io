<script>
import Skills from './Skills.vue';
import skill_list from '../assets/skills.json'
export default {
    data() {
        return {
            skills: skill_list,
        }
    },
    components: {
        Skills,
    }
}
</script>

<template>
    <section>
        <div class="icons-container">
            <Skills v-for="skill in skills" :name="skill.name" :logo="skill.logo"></Skills>
        </div>
    </section>
</template>

<style>
.icons-container {
    width: full;
    padding: 0.5rem 0;
    background-color: #242424;
    display: flex;
    gap: 1rem;
    justify-content: center;
}

@media (prefers-color-scheme: light) {
    .icons-container {
        background-color: #efefef;
    }
}
</style>