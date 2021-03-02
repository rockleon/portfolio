<template>
  <div class="card-content">
    <v-sheet class="menu-bar primary-background">
      <div class="nav-btn">
        <v-icon color="white" class="mb-1" @click="toggleDrawer"
          >mdi-menu</v-icon
        >
      </div>
      <div class="mobile-name">Amey Gorde</div>
      <ul
        class="menu-ul"
        v-scroll-spy-active="{ class: 'menuActive' }"
        v-scroll-spy-link
      >
        <div align="center" class="menu-tabs first-tab">
          <a>About</a>
        </div>
        <div align="center" class="menu-tabs">
          <a>Skills</a>
        </div>
        <div align="center" class="menu-tabs">
          <a>Experience</a>
        </div>
        <div align="center" class="menu-tabs">
          <a>Courses</a>
        </div>
        <div align="center" class="menu-tabs">
          <a>Projects</a>
        </div>
      </ul>
    </v-sheet>
    <div class="filling"></div>
    <div class="divider-shadow"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$emit("toggleDrawer");
    },
  },
};
</script>

<style scoped>
.card-content {
  background-color: var(--v-background-base);
}

.menu-bar {
  padding: 10px 0px 0px;
  display: flex;
  flex-direction: row;
}
.menu-bar >>> a {
  color: white;
}

.menu-tabs {
  width: 20%;
  padding: 12px 12px 15px;
}

.menu-ul {
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
  width: 100%;
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

.nav-btn {
  padding: 0px 20px;
  display: none;
  align-items: center;
}

.mobile-name {
  display: none;
  width: 100%;
  font-size: 1.2em;
  align-items: center;
  padding: 0px 20px 10px;
}

@media only screen and (max-width: 1150px) {
  .nav-btn {
    display: flex;
  }
  .menu-ul {
    padding-left: 0px;
  }
}

@media only screen and (max-width: 600px) {
  .menu-ul {
    display: none;
  }
  .mobile-name {
    display: flex;
  }
}
</style>