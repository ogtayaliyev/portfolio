// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  
  // déplace les fichiers sources de la racine au dossier client
  srcDir: 'portfolio/',
  nitro: {
    output: {
      // placer la sortie statique dans le dossier ./public, 
      // pour que GitLab pages fonctionnent normalement
      // voir https://nitro.unjs.io/config#output
      publicDir: "public",
    },
  },
  dir: {
    // pour éviter un conflit avec les pages GitLab, qui requièrent
   // que la sortie de la construction soit dans le dossier ./public.
   // voir https://nuxt.com/docs/api/nuxt-config#public
   public: "static",
   static: "static",
 },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
        {
          name: 'theme-color',
          content: '#000091',
        },
        {
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ],
    },
  },
  routeRules: {
    // La page d'accueil est pré-rendue au moment du build
    '/**': { prerender: true },
  },
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
  runtimeConfig: {
    // pour rendre les variables d'environnement disponibles dans le code
    // cf. https://v3.nuxtjs.org/api/configuration/runtime-config
    public: {
      baseURL: process.env.BASE_URL,
      apiURL: process.env.API_URL,
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})