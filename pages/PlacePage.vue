<script setup>
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
})
</script>
<template>
    <NuxtLayout :name="layout">
        <Place />
    </NuxtLayout>
</template>
<style scoped></style>