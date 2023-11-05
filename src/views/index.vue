<template>
  <v-app class="ma-0 pa-0">
    <AppBar />

    <v-container class="ma-0 pa-0 fill-height" fluid style="margin-bottom: 0px">
      <routermainview class="ma-0 pa-0 fill-height"> </routermainview>
    </v-container>

    <mainbottom> </mainbottom>
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
/* .set01color {
  background: yellow;
} */

/* .setzindex {
  background: white;
} */



.wrapapp :not(.edxn0) {
 
  text-align: center;
  
}





</style>