<script>
import Project from "./Project.vue"
import projects_data from "../assets/projects.json"
export default {
  data() {
    return {
      projects: projects_data,
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
}

h2 {
  text-align: center;
}
</style>