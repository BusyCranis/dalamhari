<template>
  <v-app>
    <SubAppBar />
    <v-container class="fill-height setcolor" fluid style="margin-bottom: 0px">
      <routermainview class="fill-height setzindex"> </routermainview>
    </v-container>

    <mainbottom> </mainbottom>
  </v-app>
</template>

<script>
import Mainbottom from "./mainbottom.vue";
import Routermainview from "./routermainview.vue";
import SubAppBar from "./subAppBar.vue";

export default {
  name: "Home",

  components: {
    Routermainview,
    Mainbottom,
    SubAppBar,
  },
};
</script>
<style scoped>
.setcolor {
  background: yellow;
}

.setzindex {
  z-index: 1;

  background: white;
}
</style>