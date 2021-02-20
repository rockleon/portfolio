<template>
  <div class="info-content" v-scroll-spy="{ offset: 105 }">
    <v-sheet class="content-sheet" color="card1" elevation="3">
      <about />
    </v-sheet>
    <!-- <v-sheet class="content-sheet stats-sheet" elevation="3">
      <stats />
    </v-sheet> -->
    <v-sheet class="content-sheet" elevation="3"><skills /></v-sheet>
    <v-sheet class="content-sheet" elevation="3"><experience /></v-sheet>
    <v-sheet class="content-sheet" elevation="3"><internship /></v-sheet>
    <v-sheet class="content-sheet" elevation="3"><projects /></v-sheet>
  </div>
</template>

<script>
import About from "./info/About.vue";
import Experience from "./info/Experience.vue";
import Internship from "./info/Internship.vue";
import Projects from "./info/Projects.vue";
import Skills from "./info/Skills.vue";
// import Stats from './info/Stats.vue';

export default {
  components: {
    About,
    Skills,
    Experience,
    Internship,
    Projects,
    // Stats,
  },
};
</script>

<style scoped>
.info-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-sheet {
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  width: 99%;
}

.stats-sheet {
  background-color: var(--v-card2-darken3) !important;
}
</style>