<template>
    <div class="pages">
        <div>
            <v-row class="justify-center flex-grow-0 pa-4">
                <v-col cols="10" sm="6" md="4">
                    <img src="../assets/images/white_logo.svg" alt="" style="width: 100%;">
                </v-col>
            </v-row>
            <BackButton />
            <slot />
        </div>
        <div style="flex-grow: 0;">
            <div class="text-center" style="color: white;">Пермь, Максима Горького, 21</div>
            <Bottom />

        </div>

        <div class="pa-10 text-center d-flex justify-center"
            style="position: fixed; bottom: 0px; z-index: 100; width: 100%; pointer-events: none;">
            <div>
                <NuxtLink to="https://n962263.yclients.com/company/894109/personal/menu?o=">
                    <v-btn class="lets-go-button" style="pointer-events: auto;" size="large"
                        color="accent">Записаться</v-btn>
                </NuxtLink>

            </div>
        </div>
    </div>
</template>
<style scoped>
.pages {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    justify-content: space-between;
    background: rgb(20, 20, 20);
}
</style>