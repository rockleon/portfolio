<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary width="300px" class="drawer">
      <left-panel />
    </v-navigation-drawer>
    <div class="frame-wrap" style="top: 0px"></div>
    <v-main>
      <div class="container-0">
        <left-panel class="fixed left-panel" />
        <div class="container-1">
          <div class="menu-div">
            <menu-bar class="fixed" @toggleDrawer="toggleDrawer" />
            <info-content class="info-content" />
          </div>
        </div>
      </div>
    </v-main>
    <div class="frame-wrap" style="bottom: 0px"></div>
  </v-app>
</template>

<script>
import InfoContent from "./components/InfoContent.vue";
import LeftPanel from "./components/LeftPanel.vue";
import MenuBar from "./components/MenuBar.vue";

export default {
  name: "App",
  components: {
    LeftPanel,
    MenuBar,
    InfoContent,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
    url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
}

.v-main__wrap {
  background-color: var(--v-background-base);
  width: 100%;
  padding: 0px 40px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}

.frame-wrap {
  height: 15px;
  background-color: var(--v-background2-base);
  z-index: 5;
  position: sticky;
}

.container-0 {
  display: flex;
  flex-direction: row;
}

.container-1 {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: calc(100vw - 400px);
}

.primary-background {
  background-color: var(--v-primary-base) !important;
  color: white !important;
}

.info-card-title {
  font-weight: 600;
  font-size: 1.5em;
}

.info-card-underline {
  width: 30px;
  height: 5px;
  background-color: var(--v-primary-base);
  border-radius: 10px;
}

.info-title {
  font-size: 1.35em;
}

.fixed {
  position: sticky;
  position: -webkit-sticky;
  top: 15px;
  z-index: 7;
}

.left-panel {
  height: calc(100vh - 30px);
}

.drawer {
  z-index: 10 !important;
  display: none !important;
}

.text-14 {
  font-size: 0.88em;
}

@media only screen and (max-width: 1150px) {
  .v-main__wrap {
    padding: 0px;
  }
  .left-panel {
    display: none !important;
  }
  .drawer {
    display: flex !important;
  }
  .drawer .panel-sheet {
    height: 100vh;
  }
  .info-content {
    padding: 0px 20px;
  }
  .container-1 {
    width: 100%;
    padding-left: 0px;
  }
}

@media only screen and (max-width: 600px) {
  .info-content {
    padding: 0px 10px;
  }
}
</style>