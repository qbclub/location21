<script setup>

</script>

<template>
    <div>

        <div class="background-photo">
            <img src="../assets/images/background.jpg" class="bg-image" />

            <v-row class="ma-0 fill-height">

                <v-col cols="12" md="4" class="text-parent">
                    <div class="text d-flex align-center align-md-start">

                        Мы уважаем стиль, как
                        Буковский, любим его
                        создавать.


                    </div>
                </v-col>
                <v-col cols="12" md="4" class="text-parent
">
                    <div class="text d-flex align-center">
                        Мы уважаем вас и хотим
                        окружить домашним
                        уютом.
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="text-parent">
                    <div class="text d-flex align-center align-md-end">
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
.text {
    font-size: clamp(1.25rem, 0.9375rem + 1vw, 1.5rem);
    font-weight: 900;
    min-height: 150px;
    padding: 30px;
    height: 100%;
    width: 100%;
    text-align: center;
    color: white;
    /* text-shadow:
        0 0 4px white,
        0 0 8px white,
        0 0 12px white,
        0 0 16px white; */

}
/* @media (max-width: 600px) {
  .text {
    text-shadow:
      0 0 1px white,
      0 0 2px white,
      0 0 3px white;
  }
} */

.background-photo {
    min-height: 90dvh;
    overflow: hidden;
    display: flex;
    flex-direction: column;

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