<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "App",

  data() {
    return {};
  },

  components: {},

  methods: {
    checkwindow() {
      console.log(this.screenview);
    },
  },

  computed: {
    ...mapState(["paththis"]),

    ...mapState(["islogin"]),

    ...mapState(["newtradingNFTs"]),

    ...mapState(["tradeditem"]),
    ...mapState(["boughtinfo"]),
    ...mapState(["soldinfo"]),
    ...mapState(["vrcp"]),
  },
};
</script>

<style>
/* .nav {
  display: flex;
  justify-content: space-between;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
