export default {
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    title: "L'accord parfait",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Le lieu incontournable de votre beauté. Institut dans le 16e arrondissement de Paris.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/css/resetr.css", "@/assets/css/common.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/prismicLinks", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic",
  ],

  prismic: {
    endpoint: "https://laccord-parfait.cdn.prismic.io/api/v2",
    modern: true,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias.vue = "vue/dist/vue.common";
    },
  },

  generate: {
    fallback: "404.html", // Netlify reads a 404.html, Nuxt will load as an SPA
  },

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
};
