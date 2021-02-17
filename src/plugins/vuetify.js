import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    // dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#F44336",
        secondary: "#F0F0F6",
        background: "#E0E0E6",
        card1: "#FFFFFF",
        card2: "#F4F4F6",
        text: "000000",
        error: "#FD322B",
        info: "#3AA0F3",
        success: "#4ACB41",
        warning: "#FF9500",
      },
    },
  },
});