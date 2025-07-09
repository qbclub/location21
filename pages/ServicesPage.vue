<script setup>
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
})
</script>
<template>
    <NuxtLayout :name="layout">
        <Services />
    </NuxtLayout>
</template>
<style scoped></style>