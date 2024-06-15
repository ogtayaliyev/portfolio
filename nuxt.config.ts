export default defineNuxtConfig({
  devtools: { enabled: true },

  // Mode de génération statique
  target: "static",

  // Configuration pour le chemin du router
  router: {
    base: "/portfolio/",
  },

  // Modules de Nuxt
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "nuxt-icon"],

  // Autres configurations de votre application Nuxt
  head: {
    title: "Ogtay Aliyev Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/public/css/main.css"],
  plugins: [
    // Ajoutez vos plugins ici
  ],
  components: true,
  buildModules: [
    // Ajoutez vos modules de build ici
  ],
  build: {
    // Ajoutez vos configurations de build ici
  },
});
