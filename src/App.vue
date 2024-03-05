<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <home />
      <about />
      <download />
      <!-- <pricing /> -->
      <contact />
    </v-main>
    

        <!-- <v-scale-transition>
        <v-btn
          fab
          v-show="fab"
          v-scroll="onScroll"
          dark
          fixed
          bottom
          left
          color="secondary"
          @click="toggleLanguage">
            <img src="@/assets/img/en.png" alt="English" v-if="language === 'en'" class="flag-icon">
            <img src="@/assets/img/es.png" alt="Español" v-else class="flag-icon">
        </v-btn>
    </v-scale-transition> -->


    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style scoped>
.v-app {
  font-family: Montserrat;
}

.v-main {
  font-family: Montserrat;
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.language-button {
    padding: 5px; /* Ajusta el padding según sea necesario */
  }

  .flag-icon {
    width: 30px; /* Ajusta el tamaño de la imagen según sea necesario */
    height: auto;
    vertical-align: middle;
  }
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import download from "./components/DownloadSection";
import pricing from "./components/PricingSection";
import contact from "./components/ContactSection";


export default {
  name: "App",


  components: {
    navigation,
    foote,
    home,
    about,
    download,
    pricing,
    contact,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
    
    

  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },

  },
};
</script>
