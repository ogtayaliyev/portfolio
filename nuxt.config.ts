import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Activer les outils de développement
  devtools: { enabled: true },

  // Mode de génération statique


  // Modules de Nuxt.js
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "nuxt-icon"
  ],


  // Ajout de fichiers CSS globaux
  css: [
    "~/public/css/main.css"
  ],

  // Liste des plugins à utiliser
  plugins: [
    // Ajouter vos plugins ici
  ],

  // Activer la prise en charge automatique des composants
  components: true,

  // Modules de build à utiliser


  // Configuration de la build

})
