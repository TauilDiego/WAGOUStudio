<template>
  <video v-if="loading" :autoplay="play" loop muted>
    <source :src="src" type="video/mp4">
  </video>
</template>

<script setup lang="ts">

import {Ref} from "@vue/reactivity";
import {ref, watch} from "#imports";

interface Props {
  src: String
  play: Boolean
}

const props = defineProps<Props>()

const loading: Ref<boolean> = ref(true)

watch(() => props.play, async() =>{
  loading.value = false

  await nextTick()
  loading.value = true
})
</script>

<style scoped>

</style>
