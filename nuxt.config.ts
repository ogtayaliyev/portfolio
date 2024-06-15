import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Activer les outils de développement
  devtools: { enabled: true },

  // Mode de génération statique
  target: "static",

  // Configuration pour le chemin du router
  router: {
    base: '/portfolio/',  // Adapter selon le chemin de déploiement sur GitHub Pages ou autre
  },

  // Modules de Nuxt.js
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "nuxt-icon"
  ],

  // Configuration de l'en-tête
  head: {
    title: "Ogtay Aliyev Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Description de votre portfolio" },  // Ajouter une description pertinente
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },  // Adapter le chemin de l'icône
    ],
  },

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
  buildModules: [
    // Module pour le support de TypeScript
    "@nuxt/typescript-build",
    
    // Module pour la génération d'une version optimisée de Tailwind CSS (requis pour @nuxtjs/tailwindcss)
    "@nuxtjs/tailwindcss"
  ],

  // Configuration de la build

})
