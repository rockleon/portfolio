<template>
  <div class="card-content">
    <v-sheet class="menu-bar primary-background">
      <ul
        class="menu-ul"
        v-scroll-spy-active="{ class: 'menuActive' }"
        v-scroll-spy-link
      >
        <v-col cols="2" align="center">
          <a>About</a>
        </v-col>
        <v-col cols="2" align="center">
          <a>Skills</a>
        </v-col>
        <v-col cols="2" align="center">
          <a>Experience</a>
        </v-col>
        <v-col cols="2" align="center">
          <a>Courses</a>
        </v-col>
        <v-col cols="2" align="center">
          <a>Projects</a>
        </v-col>
      </ul>
    </v-sheet>
    <div class="filling"></div>
    <div class="divider-shadow"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-content {
  background-color: var(--v-background-base);
}

.menu-bar {
  padding: 10px 0px 0px;
}
.menu-bar >>> a {
  color: white;
}

.menu-ul {
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
}

.menuActive {
  padding-bottom: 15px;
  background-color: var(--v-background-base);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  /* transition: all 0.05s; */
}
.menuActive a {
  color: var(--v-primary-base);
}

.filling {
  height: 19px;
}

.divider-shadow {
  height: 1px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--v-primary-lighten4);
  box-shadow: 0 3px 4px 0 var(--v-primary-lighten3);
}

/* .menu-ul a {
  width
} */
</style>