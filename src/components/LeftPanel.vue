<template>
  <v-sheet class="panel-sheet" width="300" color="card1" elevation="5">
    <div>
      <v-sheet class="img-sheet primary-background">
        <v-avatar color="primary" size="90">
          <img :src="require('@/assets/images/id.jpg')" />
        </v-avatar>
        <span class="name">Amey Gorde</span>
        <span class="title-span">Software Engineer</span>
      </v-sheet>
      <div class="panel-content">
        <div
          v-for="(language, index) in languages"
          :key="index"
          class="progress-div"
        >
          <v-row no-gutters class="mb-1" justify="space-between">
            <span>{{ language.name }}</span>
            <span>{{ language.progress }}%</span>
          </v-row>
          <v-progress-linear :value="language.progress"></v-progress-linear>
        </div>
      </div>
    </div>
    <div>
      <v-divider class="mb-2"></v-divider>
      <v-btn text block class="mb-2" @click="downloadCV">
        <span class="btn-span">
          <v-icon small left>mdi-download</v-icon>
          Download CV
        </span>
      </v-btn>
      <v-sheet class="links-sheet primary-background">
        <v-icon
          medium
          color="white"
          @click="newTab('https://github.com/rockleon')"
          >mdi-github</v-icon
        >
        <v-icon
          medium
          color="white"
          @click="newTab('http://www.linkedin.com/in/ameygorde07')"
          >mdi-linkedin</v-icon
        >
        <v-icon medium color="white" @click="openMail">mdi-gmail</v-icon>
      </v-sheet>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "LeftPanel",
  data() {
    return {
      languages: [
        {
          name: "C/C++",
          progress: "90",
        },
        // {
        //   name: "Html/Css",
        //   progress: "80",
        // },
        {
          name: "Javascript",
          progress: "80",
        },
        {
          name: "Python",
          progress: "80",
        },
        {
          name: "Sql",
          progress: "70",
        },
        {
          name: "Php",
          progress: "60",
        },
      ],
    };
  },
  methods: {
    newTab(url) {
      window.open(url, "_blank", ["noopener", "noreferrer"]);
    },
    openMail() {
      var mail = document.createElement("a");
      mail.setAttribute("type", "hidden");
      mail.href = "mailto:ameysgorde@gmail.com";
      mail.click();
      mail.remove();
    },
    downloadCV() {
      window.open(
        "https://docs.google.com/document/d/1uJPi0qsy9xnYDtvQpw57eYi_VpXJ0x3DZbIenV1F_7s/view?usp=sharing",
        "_blank",
        ["noopener", "noreferrer"]
      );
    },
  },
};
</script>

<style scoped>
.panel-sheet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
}

.img-sheet {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-shadow: 0 2px 4px 0 rgb(15 15 20 / 10%) !important;
}

.name {
  padding: 10px;
  font-size: 1.35em;
  font-weight: 600;
}

.title-span {
  font-size: 0.9em;
}

.panel-content {
  padding: 20px 30px;
}

.progress-div {
  font-size: 0.85em;
  padding: 10px 0px;
}

.links-sheet {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 30px;
  box-shadow: 0 -2px 4px 0 rgb(15 15 20 / 10%) !important;
}

.btn-span {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>