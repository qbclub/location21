<script setup>

</script>

<template>
    <div>

        <div class="background-photo">
            <img src="../assets/images/background.jpg" class="bg-image" />
            <v-row class="ma-0">
                <!-- <v-col cols="12" class="pa-0">
                    <v-divider :thickness="5" class="border-opacity-100 " color="accent"></v-divider>
                </v-col> -->
                <v-col cols="12" md="4" class=" text-parent" >
                    <div class="text" style="background: rgb(20, 20, 20); color: white;">
                        Мы уважаем стиль, как
                        Буковский, любим его
                        создавать.
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="text-parent" >
                    <div class="text" style="background: white;">
                        Мы уважаем вас и хотим
                        окружить домашним
                        уютом.
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="text-parent"
                   >
                    <div class="text" style="background: rgb(20, 20, 20); color: white;">
                        Мы постоянно
                        самосовершенствуемся,
                        чтобы вопрос качества
                        никогда не поднимался. </div>
                </v-col>
            </v-row>
        </div>
        <!-- <v-divider :thickness="5" class="border-opacity-100 " color="accent"></v-divider> -->
    </div>
</template>
<style scoped>
.text-parent {
    display: flex;
    justify-content: center;
    align-items: center;

}

.text {
    font-size: clamp(1.25rem, 0.9375rem + 1vw, 1.5rem);
    font-weight: 900;
    min-height: 150px;
    padding: 10px;
    background: red;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: rgba(255, 255, 255, 0.6); */

    /* color: white; */
    text-align: center;
}

.background-photo {
    min-height: 90dvh;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.bg-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    pointer-events: none;
}
</style>