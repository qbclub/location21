<script setup>

const images = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))

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



    <v-row class="pt-md-8 pb-md-12 ma-0">
        <v-col cols="12" md="4">
            <div class="justify-center align-start align-md-center d-flex text-center  h-100">

                <div ref="card" class="card">
                   
                            <img src="../assets/images/logo.svg" alt="" style="width: 40%; margin-bottom: 10px;">
                      
                    <v-divider color="accent" opacity="1" :thickness="5">

                    </v-divider>


                    <div style="font-size: clamp(1.5rem, 0.5625rem + 3vw, 2.25rem); font-weight: 900; " ref="phone">
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