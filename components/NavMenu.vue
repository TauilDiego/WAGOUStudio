<template>
  <v-col sm="7" md="6" lg="5" xl="3" class="nuxt-link-navigation">
    <nuxt-link class="link-navigation" to="/reel">Reel</nuxt-link>
    <nuxt-link class="link-navigation" to="/projects">Projects</nuxt-link>
    <nuxt-link class="link-navigation" to="/contact">Contact</nuxt-link>
    <nuxt-link class="link-navigation" to="/about">About</nuxt-link>
    <nuxt-link class="hireus-link-navigation" to="/team/2">Free Courses</nuxt-link>
  </v-col>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" src="@/assets/scss/index.scss" scoped/>

<style scoped lang="scss">

.link-navigation{
  background-image: linear-gradient(
      to left,
      rgb(var(--v-theme-secondary)),
      rgb(var(--v-theme-secondary)) 50%,
      rgb(var(--v-theme-primary)) 50%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all .3s ease-in-out;

  &:nth-child(n){
    margin-right: 15px;

    @media screen and (max-width: 1025px) {
      margin-right: 0;
      font-size: 36px;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover{
    color: transparent;
    background-position: +100%;
  }

  &:after {
    content: '';
    background: rgb(var(--v-theme-secondary));
    display: block;
    position: sticky;
    bottom: -30px;
    left: 0;
    width: 0;
    height: 2px;
    transition: all .3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
}


.hireus-link-navigation{
  white-space: nowrap;
  padding: 6px;
  border: 1px solid rgb(var(--v-theme-secondary));
  text-decoration: none;
  color: rgb(var(--v-theme-secondary));
  box-shadow: inset 0 0 0 0 #29DB86;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  &:hover{
    color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 100px #29DB86;
  }

  @media screen and (max-width: 1025px) {
    margin-top: 15px;
    font-size: 36px;
  }
}
</style>
