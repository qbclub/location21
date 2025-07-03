<script>
import { NuxtLink } from '#components';


</script>
<template>
    <div>
        <BgVideo />
         <WorkingHours />
        <Services />
       
        <Place />
        <Bottom />

        <div class="pa-10 text-center d-flex justify-center"
            style="position: fixed; bottom: 0px; z-index: 100; width: 100%;">
            <div>
                <NuxtLink to="https://n962263.yclients.com/company/894109/personal/menu?o=">
                    <v-btn class="lets-go-button" size="large" color="accent">Записаться</v-btn>
                </NuxtLink>

            </div>
        </div>

    </div>
</template>