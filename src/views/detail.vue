<template>
  <v-app>
    <SubAppBar />
    <v-container
      id="app"
      class="fill-height"
      fluid
      style="width: 100%; margin-bottom: 45px"
    >
      <routermainview class="fill-height"> </routermainview>
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
