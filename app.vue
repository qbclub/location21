<script setup>
const config = useRuntimeConfig()
const apiKey = config.public.mapApiKey
useHead({
  title: "Location 21",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'description', content: 'Онлайн-платформа для заказа еды и товаров в магазинах и кафе Глазова.' },
    { name: 'keywords', content: 'Глазов, доставка, QR-меню, витрина, онлайн-магазин, кафе, ресторан, заказы, товары, меню, еда' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { property: 'og:title', content: 'Location 21' },
    { property: 'og:description', content: 'Онлайн-платформа для заказа еды и товаров в магазинах и кафе Глазова.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://glazovest.ru/' },
    { property: 'og:image', content: '/apple-touch-icon.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Location 21' },
    { name: 'twitter:description', content: 'Приложение для заказа еды, товаров и управления кафе и магазинами в Глазове.' },
    { name: 'twitter:image', content: '/apple-touch-icon.png' }
  ],
  

  link: [

    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: '/android-chrome-512x512.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: '/pwa-512x512.png',
    },

  ],
  script: [
    {
      src: `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`,
      type: 'text/javascript',
    },
  ],

})
</script>
<template>

  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
