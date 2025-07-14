<script setup>
const config = useRuntimeConfig()
const NUXT_SITE_URL = config.public.NUXT_SITE_URL
const layout = 'pages'
useHead({
  title: 'Location 21: Цены и услуги',
  meta: [
    {
      name: 'description',
      content: 'Цены и услуги барбершопа Location 21',
    },
    {
      property: 'Location 21: Цены и услуги',
      content: 'Цены и услуги барбершопа Location 21',
    },
  ],
      link: [
    {
      rel: 'canonical',
      href: `${NUXT_SITE_URL}/servicespage`,
    },
  ],
})
</script>
<template>
    <NuxtLayout :name="layout">
        <Services />
    </NuxtLayout>
</template>
<style scoped></style>