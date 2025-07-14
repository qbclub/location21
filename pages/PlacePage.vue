<script setup>
const config = useRuntimeConfig()
const NUXT_SITE_URL = config.public.NUXT_SITE_URL

const layout = 'pages'
useHead({
  title: 'Location 21: адрес, карта',
  meta: [
    {
      name: 'description',
      content: 'Адрес, карта, как добраться. Вызвать такси',
    },
    {
      property: 'Location 21: адрес, карта',
      content: 'Адрес, карта, как добраться. Вызвать такси',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${NUXT_SITE_URL}/placepage`,
    },
  ]
})
</script>
<template>
  <NuxtLayout :name="layout">
    <Place />
  </NuxtLayout>
</template>
<style scoped></style>