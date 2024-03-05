// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: 'en', // Idioma predeterminado
    translations: {
        en: {
            home: 'Home',
            features: 'Features',
            demos: 'Demos',
            contactUs: 'Contact Us',
            slogan: 'Building Simplified Software Solutions for a Structured Demanding World.',
            knowMore: 'Know More',
            watchVideo: 'Watch the video'
            // Agregar más traducciones según sea necesario
          },
          es: {
            home: 'Inicio',
            features: 'Características',
            demos: 'Demos',
            contactUs: 'Contáctanos',
            slogan: 'Construyendo Soluciones de Software Simplificadas para un Mundo Estructurado y Exigente.',
            knowMore: 'Saber Más',
            watchVideo: 'Mirar el Video'
            // Agregar más traducciones según sea necesario
          }
    }
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    }
  },
  actions: {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language);
    }
  },
  getters: {
    currentLanguage: state => state.language,
    currentTranslations: state => state.translations[state.language]
  }
});
