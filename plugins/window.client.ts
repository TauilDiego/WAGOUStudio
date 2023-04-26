import {Ref} from "@vue/reactivity";

export default defineNuxtPlugin(nuxtApp => {
  let windowInnerHeight: Ref<number> = ref(window.innerHeight)
  let windowInnerWidth: Ref<number> = ref(window.innerWidth)
  let isMobile: Ref<boolean> = ref(windowInnerWidth.value<1026)


  function spyResize() {
    window.addEventListener('resize', () => {
      windowInnerHeight.value = window.innerHeight
      windowInnerWidth.value = window.innerWidth
    })
  }

  watch(windowInnerWidth, (newValue) => {
    isMobile.value = (newValue < 1026)
  })


  return {
    provide: {
      windowInnerHeight,
      windowInnerWidth,
      isMobile,
      spyResize
    }
  }
})