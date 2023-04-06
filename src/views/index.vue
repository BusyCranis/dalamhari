<template>
  <v-app>


    <AppBar />





    <v-container
      id="app"
      class="fill-height setcolor"
      fluid
      style="margin-bottom: 0px"
    >
      <routermainview class="fill-height setzindex"> </routermainview>
    </v-container>

    <!-- <mainbottom> </mainbottom> -->
  </v-app>
</template>

<script>
import Mainbottom from "./mainbottom.vue";
import Routermainview from "./routermainview.vue";
import AppBar from "./AppBar.vue"



export default {
  name: "Home",

  components: {
    Routermainview,
    Mainbottom,
    AppBar
  },
};
</script>

<style   scoped >
.setcolor {
  background: yellow;
}

.setzindex {
  background: white;
}
</style>