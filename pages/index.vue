<template>
  <section style="width: 100%; height: auto; min-height: 100vh">
    <div style="position:absolute; width: 100%; height: 100%; object-fit: cover; top: 0; right: auto; bottom: auto; left: 0;">
      <video autoplay loop muted class="back-video" src="/webm-for-site_1920x1080.webm" type="video/mp4" playsinline></video>
    </div>
  </section>
  <section style="width: 100%; height: auto; min-height: 650px">
    <v-carousel
        height="650"
        :show-arrows="false"
        interval="3000"
        :cycle="true"
        v-model="carrouselModel"
    >
      <v-carousel-item
          v-for="(n, i) in 6"
          :key="i"
          src="images/Capa_ilustrada_1920x650_Panda.png"
          cover
      />
    </v-carousel>
  </section>
</template>

<script setup lang="ts">
const {$windowInnerHeight,} = useNuxtApp()

const cycle = ref(false)
let carrouselModel = ref(0)

function changeCycle() {
  cycle.value = !cycle.value
}

definePageMeta({
  layout: "default"
})
</script>

<style lang="scss">
.back-video {
  filter: brightness(0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center center;
}
</style>
