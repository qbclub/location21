<script setup>
const layout = 'sign'
useHead({
    title: 'Location 21: запись',
    meta: [
        {
            name: 'description',
            content: 'Запись на услуги Location 21. Выбор услуг, мастера, даты и времени',
        },
        {
            property: 'Location 21: запись',
            content: 'Запись на услуги Location 21. Выбор услуг, мастера, даты и времени',
        },
    ],
})
</script>

<template>
    <ClientOnly>
        <NuxtLayout :name="layout">
            <div style="height: 100%; max-width: 100%; overflow: auto">
                <iframe src="https://n962263.yclients.com/company/894109/widget" width="100%" height="90%"
                    style="height: 90dvh; border: none; overflow: scroll;" frameborder="0"  />
            </div>
        </NuxtLayout>
    </ClientOnly>
</template>
