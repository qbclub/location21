<script setup>

</script>

<template>
    <div>

        <div class="background-photo">
            <img src="../assets/images/background.jpg" class="bg-image" />

            <v-row class="ma-0">

                <v-col cols="12" md="4" class="text-parent">
                    <div class="text d-flex text-center justify-center align-center h-100">

                        Мы уважаем стиль, как
                        Буковский, любим его
                        создавать.


                    </div>
                </v-col>
                <v-col cols="12" md="4" class="text-parent
">
                    <div class="text d-flex text-center justify-center align-center h-100">
                        Мы уважаем вас и хотим
                        окружить домашним
                        уютом.
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="text-parent">
                    <div class="text d-flex text-center justify-center align-center h-100">
                        Мы постоянно
                        самосовершенствуемся,
                        чтобы вопрос качества
                        никогда не поднимался. 
                    </div>
                </v-col>
            </v-row>
        </div>
        <!-- <v-divider :thickness="5" class="border-opacity-100 " color="accent"></v-divider> -->
    </div>
</template>
<style scoped>
.text {
    font-size: clamp(1.25rem, 0.9375rem + 1vw, 1.5rem);
    font-weight: 500;
    width: 100%;
    color: white;
    background-color: rgba(20,20,20, 0.7);
    padding: 10px;
}


.background-photo {
    min-height: 90dvh;
    overflow: hidden;
 

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