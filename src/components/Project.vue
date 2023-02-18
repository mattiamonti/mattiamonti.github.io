<script >
import ProjectText from './ProjectText.vue';
export default {
    props: {
        id: Number,
        title: String,
        img_name: String,
        page_html: String,
        description: String,
    },
    methods: {
        changePage() {
            const link = document.getElementById('link')
            link.href = '/src/pages/' + this.page_html
        }
    },
    components: {
        ProjectText,
    }
}
</script>

<template>
    <a id="link" target="_blank">
        <div class="container" @click="changePage()">
            <div class="image-container">
                <img alt="" :src="'/src/assets/project-images/' + img_name">
            </div>

            <ProjectText :title="this.title" :id="this.id" :description="this.description"></ProjectText>
        </div>
    </a>
</template>

<style scoped>
.container {
    width: 70%;
    height: 30vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 6rem;
}

.image-container {
    display: flex;
    justify-content: right;
    height: inherit;
}

img {
    height: 100%;
    border-radius: 10px;
    z-index: 10;
}
</style>