<template>
  <v-app>
    <v-app-bar
      app
      id="app-bar"
      :flat="screenPosition === 'initial'"
      :height="screenPositionHeight"
      :class="screenPosition"
    >
      <v-container fluid style="height: 146px">
        <v-row no-gutters>
          <v-col>
            <nuxt-link class="wagou-link" to="/">
              <v-img
                :class="`sling main-img-${screenPosition}`"
                :src="theme.global.current.value.dark ? 'wagou_logo.svg' : 'wagou_logo--dark.svg'"
              />
              <span :class="`pl-2 sling main-text-${screenPosition}`">Wagou</span>
              <span id="studio" :class="`pl-1 sling main-text-${screenPosition}`">Studio</span>
            </nuxt-link>
          </v-col>
          <v-spacer/>
          <client-only>
            <v-col v-if="$isMobile" sm="1" md="3" lg="3" class="nuxt-link-navigation">
              <div class="hamburger-box" @click="changeHamburguer">
                <div :class="`inner-hamburger ${hamburguerClass}`"/>
              </div>
            </v-col>
            <NavMenu v-else/>
          </client-only>
        </v-row>
        <client-only>
          <v-row v-if="$isMobile" id="nav-menu" :style="compDivHeight">
            <NavMenu/>
          </v-row>
        </client-only>
      </v-container>
    </v-app-bar>

    <v-main v-scroll class="pt-0">
      <!--            <client-only>-->
      <!--                <v-spacer v-if="$isMobile && !hamburguerStatus" style="height: 50px"/>-->
      <!--            </client-only>-->
      <NuxtPage/>
    </v-main>

    <v-footer absolute app>
      <v-container>
        <!--        <v-row no-gutters>-->
        <!--          <v-spacer/>-->
        <!--          <v-col sm="1">-->
        <!--            <nuxt-link class="icon-navigation" to="https://twitter.com/WagouStudio" target="_blank"><v-icon icon="mdi-twitter"/></nuxt-link>-->
        <!--            <v-icon class="icon-navigation" icon="mdi-theme-light-dark" @click="changeTheme"/>-->
        <!--          </v-col>-->
        <!--        </v-row>-->
      </v-container>
      <span>&copy; {{
          new Date().getFullYear() === 2023 ? new Date().getFullYear() : `${2023} - ${new Date().getFullYear()}`
        }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>

import {RouteLocationNormalizedLoaded} from "vue-router";
import {Ref} from "@vue/reactivity";
import {ObjectDirective} from "@vue/runtime-core";

const {theme, changeTheme} = appTheme()
const {$windowInnerWidth, $windowInnerHeight, $isMobile, $spyResize} = useNuxtApp()

const route = useRoute()
watch(route, (newValue: RouteLocationNormalizedLoaded) => {
  hamburguerStatus.value = false
  verifyScreenPositionByRoute()
})
onMounted(() => {
  hamburguerStatus.value = false
  verifyScreenPositionByRoute()
})


let screenPosition: Ref<'initial' | 'main'> = ref("initial")
const screenPositionHeight = computed(() => {
  if (hamburguerStatus.value && $isMobile.value)
    return window.innerHeight

  if (screenPosition.value === 'initial')
    return '150'

  if (screenPosition.value === 'main')
    return '50'
})

function verifyScreenPositionByRoute(): void {
  if (hamburguerStatus.value) {
    screenPosition.value = 'main'
    return
  }
  if (window.scrollY === 0) {
    screenPosition.value = route.name === 'index' ? 'initial' : 'main'
  } else {
    screenPosition.value = 'main'
  }
}


let hamburguerStatus: Ref<boolean> = ref(false)

function changeHamburguer() {
  hamburguerStatus.value = !hamburguerStatus.value
}

watch(hamburguerStatus, () => {
  verifyScreenPositionByRoute()
})
const hamburguerClass = computed(() => {
  return hamburguerStatus.value ? 'menu-active ' : ''
})


const vScroll: ObjectDirective = {
  mounted: (element: HTMLElement) => {
    window.addEventListener("scroll", () => {
      verifyScreenPositionByRoute()
    })
  }
}


const compDivHeight = computed(() => {
  if (hamburguerStatus.value)
    return `height: ${$windowInnerHeight.value - 50}px`
  return 'height: 0'
})

onMounted(() => {
  $spyResize()
})

</script>

<style lang="scss" src="@/assets/scss/index.scss" scoped/>
