<template>
    <div class="pages">
        <div>
            <BackButton />
            <slot />
        </div>
        <!-- <div style="flex-grow: 0;">
            <div class="text-center" style="color: white;">Пермь, Максима Горького, 21</div>
            <Bottom />

        </div> -->
    </div>
</template>
<style scoped>
.pages {
 
    min-height: 100dvh;
    background: rgb(20, 20, 20);
}
</style>