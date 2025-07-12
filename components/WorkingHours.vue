<script setup>
import { animate, inView } from 'motion'

const card = ref(null)
const phone = ref(null)
let cardAnimation = () => {
    let animated = false
    inView(card.value, async (element) => {
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



        <div class="justify-center d-flex text-center " style="background: white;">

            <div ref="card" class="card">

                <div style="font-size: clamp(2.25rem, 1.3125rem + 3vw, 3rem); font-weight: 900;">
                    c 10.00 до 21.00
                </div>
                <v-divider color="accent" opacity="1" :thickness="5">

                </v-divider>
                <div style="font-size: clamp(1.5rem, 0.5625rem + 3vw, 2.25rem); font-weight: 700; " ref="phone">
                    <a style="color: black;" href="tel:+7 (999) 282-21-21"> +7 (999) 282-21-21</a>

                </div>
                 <div style="font-size: clamp(1.125rem, 0.8125rem + 1vw, 1.375rem); font-weight: 500;">
                    <a style="color: black;" href="https://yandex.ru/maps/?text=Пермь, Максима%20Горького,%2021" target="_blank"> Пермь, Максима Горького, 21</a>

                </div>

                <div class="d-flex justify-center mt-2">
                    <a href="https://vk.com/location21" target="_blank">
                        <img class="ma-2" src="../assets/images/vk.svg" alt="" width="40px">
                    </a>
                    <a href="https://t.me/location21perm" target="_blank">
                        <img class="ma-2" src="../assets/images/telegram.svg" alt="" width="40px">
                    </a>
                    <a href="https://www.instagram.com/location21.perm" target="_blank">
                        <img class="ma-2" src="../assets/images/instagram.svg" alt="" width="40px">
                    </a>

                </div>

            </div>
        </div>


</template>
<style scoped>
.card {
    opacity: 0;
    transform: translateX(-100px);
    transition: none;
    padding: 20px;
}
</style>