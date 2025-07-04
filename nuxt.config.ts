// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "vuetify-nuxt-module",
    "@vite-pwa/nuxt",
    "@vite-pwa/nuxt",
    "vue3-carousel-nuxt",
  ],
  css: ["@/assets/styles/main.css"],
  ssr: true,

  runtimeConfig: {
    public: {
      mapApiKey: process.env.YA_MAP_API_KEY,
    },
  },
  fonts: {
    families: [{ name: "Montserrat", provider: "google" }],
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "myCustomTheme",
        themes: {
          myCustomTheme: {
            dark: false,
            colors: {
              primary: "#FF5252",
              secondary: "#424242",
              accent: "#EA4431",
              error: "#FF5252",
              info: "#2196F3",
              success: "#4CAF50",
              warning: "#FFC107",

              // Кастомные цвета
              myCustomColor: "#9C27B0",
              background: "rgb(20, 20, 20)",
            },
          },
        },
      },
    },
  },
  pwa: {
    registerType: "autoUpdate",
      workbox: {
      globDirectory: '.output/public',
      globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff2,webm,json}'],
      cleanupOutdatedCaches: true,
    },
    includeAssets: [
      "favicon.svg",
      "favicon.ico",
      "robots.txt",
      "images/apple-touch-icon.png",
    ],
    manifest: {
      name: "Барбершоп Location 21",
      short_name: "Location 21",
      description: "Пермь барбершоп",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: "android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },

        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },
});