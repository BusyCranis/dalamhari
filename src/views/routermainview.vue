<template>
  <v-main class="ma-0 pa-0" >
    <v-container class="ma-0 pa-0 fullhgt" fluid >
      <br /><br /><br /><br />
      <router-view class="fullhgt wrapapp"> </router-view>
      <!-- <br /><br /> -->
    </v-container>
    <br /><br />
  </v-main>
</template>
<script>
export default {};
</script>

<style scoped>
/* .setcolor {
  background: rgb(255, 203, 90)
}

.setzindex {
  background: white;
} */

.fullhgt {
  height: 100%;
}

.wrapapp :not(.edxn0) {
  text-align: center;
}
</style>
