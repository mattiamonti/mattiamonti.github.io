<script setup>
import TheNavbar from "./components/TheNavbar.vue"
import Landing from "./components/Landing.vue"
import ProjectSection from "./components/ProjectSection.vue";
import SkillSection from "./components/SkillSection.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div id="content">
    <TheNavbar></TheNavbar>
    <Landing></Landing>
    <ProjectSection></ProjectSection>
  </div>
  <SkillSection></SkillSection>
  <div id="content">
    <About></About>
    <Contact></Contact>
  </div>
  <TheFooter></TheFooter>
</template>

<style scoped>

</style>
