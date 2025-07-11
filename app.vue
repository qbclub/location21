<script setup>
const config = useRuntimeConfig()
const apiKey = config.public.mapApiKey
useHead({
  title: "Location 21",
  meta: [
    // Мета-настройки
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'description', content: 'Барбершоп Location 21 — мужские стрижки, бритьё и уход за бородой в Перми. Запишитесь онлайн!' },
    { name: 'keywords', content: 'Пермь, барбершоп, мужская стрижка, борода, бритьё, барберы, салон, уход, парикмахерская' },
    { name: 'theme-color', content: '#ffffff' },

    // Для PWA
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },

    // Open Graph (для соцсетей)
    { property: 'og:title', content: 'Барбершоп Location 21 | Пермь' },
    { property: 'og:description', content: 'Мужской барбершоп в Перми. Стиль, комфорт, индивидуальный подход.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://location21barbershop.ru/' },
    { property: 'og:image', content: '/og-image.jpg' }, // Создай это изображение в папке public

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Барбершоп Location 21' },
    { name: 'twitter:description', content: 'Профессиональные стрижки и бритьё в Перми. Запишитесь к лучшим барберам.' },
    { name: 'twitter:image', content: '/og-image.jpg' }
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
