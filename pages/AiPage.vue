<script setup>
const config = useRuntimeConfig()
const NUXT_SITE_URL = config.public.NUXT_SITE_URL

const layout = 'pages'

useHead({
  title: 'Location 21: ИИ рекомендации',
  meta: [
    {
      name: 'description',
      content: 'Подбор образа с помощью искусственного интеллекта. Ai рекомендации',
    },
    {
      property: 'Location 21: ИИ рекомендации',
      content: 'Подбор образа с помощью искусственного интеллекта. Ai рекомендации',
    },
  ],
    link: [
    {
      rel: 'canonical',
      href: `${NUXT_SITE_URL}/aipage`,
    },
  ],
})
</script>
<template>
  <NuxtLayout :name="layout">
    <Ai />
  </NuxtLayout>
</template>
<style scoped></style>