<script setup>
const config = useRuntimeConfig()
const NUXT_SITE_URL = config.public.NUXT_SITE_URL
const layout = 'pages'
useHead({
  title: 'Location 21: Расписание',
  meta: [
    {
      name: 'description',
      content: 'Время работы барбершопа Location 21',
    },
    {
      property: 'Location 21: Расписание',
      content: 'Время работы барбершопа Location 21',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${NUXT_SITE_URL}/workinghourspage`,
    },
  ],
})
</script>
<template>
    <NuxtLayout :name="layout">
        <WorkingHours />
    </NuxtLayout>
</template>
<style scoped></style>