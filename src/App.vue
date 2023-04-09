<script setup>
import TheNavbar from './components/TheNavbar.vue';
import TheLanding from './components/TheLanding.vue';
import TheProjects from './components/TheProjects.vue';
import TheFooter from './components/TheFooter.vue';
import TheExperiences from './components/TheExperiences.vue';
import TheContacts from './components/TheContacts.vue'
</script>

<template>
  <TheNavbar></TheNavbar>
  <TheLanding></TheLanding>
  <div class="spacer"></div>
  <TheProjects></TheProjects>
  <div class="spacer"></div>
  <div id="exp">
    <TheExperiences></TheExperiences>
    <TheContacts></TheContacts>
  </div>
  <div class="spacer-sm"></div>
  <TheFooter></TheFooter>
</template>

<style scoped>
#exp {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.spacer {
  height: 12rem;
}

.spacer-sm {
  height: 6rem;
}

@media only screen and (max-width: 600px) {
  #exp {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
}
</style>
