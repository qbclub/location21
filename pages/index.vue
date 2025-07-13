<script>
import { NuxtLink } from '#components';
import Gallery from '~/components/Gallery.vue';


</script>
<template>
    <div>
        <BgVideo />
        <WorkingHours />
        <Services />
        <v-divider :thickness="5" class="border-opacity-100 " color="white"></v-divider>
        <Ai />
        <Gallery />
        <Slogan/>
        <Place />
        <Bottom />

        <div class="pa-10 text-center d-flex justify-center"
            style="position: fixed; bottom: 0px; z-index: 100; width: 100%; pointer-events: none;">
            <div>
                <NuxtLink to="/signup">
                    <v-btn class="lets-go-button" style="pointer-events: auto;" size="large"
                        color="accent">Записаться</v-btn>
                </NuxtLink>

            </div>
        </div>

    </div>
</template>