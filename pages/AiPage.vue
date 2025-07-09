<script setup>
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
})
</script>
<template>
  <NuxtLayout :name="layout">
    <Ai />
  </NuxtLayout>
</template>
<style scoped></style>