<script setup>
import { animate, inView } from 'motion'

const card = ref(null)
const phone = ref(null)
let cardAnimation = () => {
    let animated = false
    inView(card.value, async(element) => {
        if (!animated) {
            animated = true
            animate(
                element,
                { opacity: 1, x: [-100, 0] },
                {
                    duration: 0.9,
                    easing: 'easeInOut',
                },
            )
        }
        while (true) {
            animate(
                phone.value,
                { rotate: [-5, 5, -3, 3, 0] },
                {
                    duration: 1,
                    easing: 'ease-in-out',
                }
            )
            await new Promise(resolve => setTimeout(resolve, 10000));
        }
    },
        {
            margin: '0px 0px -200px 0px', // сдвигаем триггер по нижней границе
        }
    )
}


onMounted(() => {
    cardAnimation()
 
})

</script>
<template>

    <div class="justify-center d-flex text-center ma-8">

        <div ref="card" class="card">
            <v-divider color="accent" opacity="1" :thickness="5">

            </v-divider>
            <div style="font-size: 48px; font-weight: 900;">
                c 9.00 до 21.00
            </div>
            <v-divider class="ma-2"></v-divider>
            <div style="font-size: 36px; font-weight: 700; " ref="phone">
                <a style="color: black;" href="tel:+7 (999) 282-21-21"> +7 (999) 282-21-21</a>

            </div>

            <div class="d-flex justify-center mt-2">
                <img class="ma-2" src="../assets/images/vk.svg" alt="" width="40px">
                <img class="ma-2" src="../assets/images/telegram.svg" alt="" width="40px">

            </div>

        </div>
    </div>


</template>
<style scoped>
.card {
    opacity: 0;
    transform: translateX(-100px);
    transition: none;
}
</style>