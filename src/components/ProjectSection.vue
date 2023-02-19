<script>
import Project from "./Project.vue"
import imgMarkdownEditor from '/src/assets/project-images/MarkdownEditor.png'
//import pageMarkdownEditor from '/src/pages/MarkdownEditor.html'
export default {
  data() {
    return {
      projects: [
        {
          "id": 1,
          "title": "Markdown editor",
          "img_name": imgMarkdownEditor,
          "page_html": "/pages/markdown-editor/MarkdownEditor.html",
          "description": "Web app created with VueJS"
        },
      ],
    }
  },
  components: {
    Project,
  }
}
</script>

<template>
  <section id="projects">
    <h2>Projects</h2>
    <Project v-for="project in projects" :id="project.id" :title="project.title" :img_name="project.img_name"
      :page_html="project.page_html" :description="project.description"></Project>
  </section>
</template>

<style scoped>
section {
  min-height: 60vh;
  margin-top: 8rem;
  margin-bottom: 8rem;
}

h2 {
  text-align: center;
}
</style>