<template>
  <div class="text-center">

    <img width="400" src="wagou_logo.svg">
    <p style="font-family: 'Poppins-ExtraBold'; font-size: 22px">
      <span style="color: rgb(var(--v-theme-secondary))">WAGOU</span> and harmony walk together
    </p>
    <div class="dialog-baloon">
      <p class="info">You know that WAGOU comes from japanese word 和合, which means "Harmony"?<br>We chose this name as
        we are passionate and inspired daily by Japanese culture and its success in animation.</p>
    </div>

    <v-container>
      <v-row>

        <v-col cols="4">
          <img width="240" src="wagou_logo.svg">
        </v-col>
        <v-col cols="8" class="text-left" style="font-family: 'Poppins-ExtraBold'; font-size: 16px">
          <p>We follow the Japanese methodology that in order to have good results, we need to be in balance as a whole.
            Each WAGOU member complements the other, so we achieve impeccable results as a team.</p>
<br>
          <p>Japanese discipline and Brazilian grit, that's our way of cheering you up!</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        Our team
      </v-row>
      <v-row>
        <v-col>
          Wilson
        </v-col>
        <v-col>
          William
        </v-col>
        <v-col>
          Diego
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>

.dialog-baloon {
  margin-top: 30px;
  padding-bottom: 30px;
  background-color: rgb(var(--v-theme-secondary));
}

.info {
  font-size: 22px;
  color: rgb(var(--v-theme-surface));
}

.dialog-baloon:before {
  background: rgb(var(--v-theme-secondary));
  text-align: center;
  content: "";
  width: 35px;
  height: 24px;
  display: flex;
  margin-left: 37%;
  position: inherit;
  top: 0;
  transform: translateY(-90%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  text-decoration: inherit;
  vertical-align: inherit;
}
</style>
