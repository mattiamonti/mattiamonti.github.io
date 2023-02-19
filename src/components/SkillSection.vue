<script>
import Skills from './Skills.vue';
import iconGh from '/src/assets/programming-logos/git.svg'
import iconPython from '/src/assets/programming-logos/python.svg'
import iconJava from '/src/assets/programming-logos/java.svg'
import iconCss from '/src/assets/programming-logos/css.svg'
import iconJs from '/src/assets/programming-logos/js.svg'
import iconHtml from '/src/assets/programming-logos/html.svg'
export default {
    data() {
        return {
            skills: [
                {
                    "name": "python",
                    "logo": iconPython
                },
                {
                    "name": "java",
                    "logo": iconJava
                },
                {
                    "name": "html",
                    "logo": iconHtml
                },
                {
                    "name": "css",
                    "logo": iconCss
                },
                {
                    "name": "js",
                    "logo": iconJs
                },
                {
                    "name": "git",
                    "logo": iconGh
                }
            ],
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