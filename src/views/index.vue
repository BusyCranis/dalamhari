<template>
  <v-app>
    <v-container
      id="app"
      class="fill-height"
      fluid
      style="margin-bottom: 45px"
    >
      <routermainview class="fill-height"> </routermainview>
    </v-container>

    <mainbottom> </mainbottom>
  </v-app>
</template>

<script>
import Mainbottom from "./mainbottom.vue";
import Routermainview from "./routermainview.vue";

export default {
  name: "Home",

  components: {
    Routermainview,
    Mainbottom,
  },
};
</script>
