<template>
  <div id="app">
    <!-- <div v-if="$route.path !== '/'" class="nav">
      <div></div>
      <router-link :to="{name: 'primarypage'}"> 뒤로 </router-link>
      <div></div>
    </div> -->

    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Footer from "./views/footer.vue";
import footer from "./views/footer.vue";

export default {
  name: "App",

  data() {
    return {
      footer,
    };
  },

  components: {
    Footer,
  },

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
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
}

/* .nav {
  display: flex;
  justify-content: space-between;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
