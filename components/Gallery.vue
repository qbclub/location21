<script setup>
import photo1 from '~/assets/images/g_1.jpg'
import photo2 from '~/assets/images/g_2.jpg'
import photo3 from '~/assets/images/g_3.jpg'
import photo4 from '~/assets/images/g_4.jpg'
import photo5 from '~/assets/images/g_5.jpg'
import photo6 from '~/assets/images/g_6.jpg'
import { animate } from 'motion'

const imageUrls = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
]

let images = [
    {
        id: 1,
        url: photo1
    },
    {
        id: 2,
        url: photo2
    },
    {
        id: 3,
        url: photo3
    },
        {
        id: 4,
        url: photo4
    },
    {
        id: 5,
        url: photo5
    },
    {
        id: 6,
        url: photo6
    },
]

// const images = Array.from({ length: 10 }, (_, index) => ({
//     id: index + 1,
//     url: `https://picsum.photos/seed/${Math.random()}/800/600`,
// }))

const config = {
    height: 500,
    itemsToShow: 2,
    gap: 5,
    autoplay: 4000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    breakpointMode: 'carousel',

    // Breakpoints are mobile-first
    // Any settings not specified will fall back to the carousel's default settings
    breakpoints: {
        // 300px and up
        300: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // 400px and up
        // 400: {
        //     itemsToShow: 3,
        //     snapAlign: 'start',
        // },
        // 500px and up
        900: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
    },
}
</script>

<template>



    <v-row class="pt-md-8 pb-md-8 ma-0">
        <v-col cols="12" md="4">
            <div class="justify-center align-start align-md-center d-flex text-center  h-100">

                <div class="pt-8 pa-2">

                    <img src="../assets/images/logo.svg" alt="" style="width: 40%; margin-bottom: 10px;">

                    <v-divider color="accent" opacity="1" :thickness="5">

                    </v-divider>


                    <div style="font-size: clamp(1.5rem, 0.5625rem + 3vw, 2.25rem); font-weight: 900; ">
                        Получи максимум не переплачивая за бренд

                    </div>



                </div>
            </div>
        </v-col>
        <v-col cols="12" md="8">
            <ClientOnly>
                <Carousel v-bind="config">
                    <Slide v-for="image in images" :key="image.id">
                        <img :src="image.url" alt="image" />
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </ClientOnly>
        </v-col>
    </v-row>

</template>

<style scoped>
:root {
    background-color: rgb(20, 20, 20);
}

.carousel {
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>