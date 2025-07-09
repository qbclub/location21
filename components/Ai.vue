<script setup>
import photo1 from '~/assets/images/ai_photo1.jpg'
import photo2 from '~/assets/images/ai_photo2.jpg'
import photo3 from '~/assets/images/ai_photo3.jpg'
import photo4 from '~/assets/images/ai_photo4.jpg'
import photo5 from '~/assets/images/ai_photo5.jpg'
import { animate } from 'motion'

const imageUrls = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5
]
const currentIndex = ref(0)
const imgRef = ref(null)

const showNextImage = async () => {
    if (!imgRef.value) return

    // Анимация исчезновения
    await animate(imgRef.value, {
        opacity: [1, 0],
        filter: ['blur(0px)', 'blur(20px)'],
        scale: [1, 0.9]
    }, { duration: 0.6 })

    // Переход к следующей
    currentIndex.value = (currentIndex.value + 1) % imageUrls.length
    await new Promise(resolve => setTimeout(resolve, 500));
    await nextTick()



    if (!imgRef.value) return

    // Анимация появления
    await animate(imgRef.value, {
        opacity: [0, 1],
        filter: ['blur(20px)', 'blur(0px)'],
        scale: [0.9, 1]
    }, { duration: 1.2, easing: 'ease-out' })
}




onMounted(async () => {
    setInterval(showNextImage, 10000)
})
</script>
<template>


    <v-row style="background: rgb(20, 20, 20); color: white;" class=" ma-0 ">

        <v-col cols="12" md="4" class="pt-8 pb-8">
            <div class="justify-center align-start align-md-center d-flex text-center  h-100">

                <div
                    style="font-size: clamp(1.5rem, 0.5625rem + 3vw, 2.25rem); font-weight: 900; color: white; ">
                    AI рекомендации
                    <v-divider color="accent" opacity="1" :thickness="5" class="ma-2">

                    </v-divider>
                    Подберите новый образ бесплатно
                </div>

            </div>
        </v-col>
        <v-col cols="12" md="4" class="pa-4">
            <ClientOnly>

                <img ref="imgRef" :src="imageUrls[currentIndex]" class="w-100 object-cover" alt="AI Generated" />

            </ClientOnly>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center align-center pt-8 pb-12">
            <v-btn variant="outlined" to="aistepper">
                Спросить ИИ
            </v-btn>
        </v-col>
    </v-row>

</template>