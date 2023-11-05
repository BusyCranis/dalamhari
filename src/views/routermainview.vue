<template>
  <v-main class="ma-0 pa-0" style="margin-bottom: 0px">
    <v-container class="ma-0 pa-0 fullhgt" fluid style="margin-bottom: 0px">
      <br /><br /><br /><br />
      <router-view class="fullhgt wrapapp"> </router-view>
    </v-container>
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
