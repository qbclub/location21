<script setup>
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
})
</script>
<template>
    <NuxtLayout :name="layout">
        <WorkingHours />
    </NuxtLayout>
</template>
<style scoped></style>