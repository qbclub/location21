<script setup>
// Ничего не нужно в <script> в этом случае
</script>

<template>
  <div class="video-background">
    <video autoplay muted loop playsinline preload="auto" poster="/images/clip-preview.jpg" class="video-content">
      <source src="/videos/clip.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Контент поверх видео -->
    <div class="overlay-content">
      <div class="align-center d-flex justify-space-between pa-4 flex-column h-100">
        <v-row class="justify-center flex-grow-0">
          <v-col cols="10" sm="6" md="4">
            <img src="../assets/images/logo.svg" alt="" style="width: 100%;">
          </v-col>
        </v-row>

        <!-- <v-row class="justify-center flex-grow-0">
          <v-col class="pa-16">
            <v-btn size="large" color="accent">Записаться</v-btn>
          </v-col>
        </v-row> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-background {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
}

.video-content {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

.overlay-content {
  position: relative;
  z-index: 1;
  color: white;
  height: 100%;

}
</style>