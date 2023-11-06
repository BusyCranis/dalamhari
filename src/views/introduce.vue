<template>
  <div
    id="whybartool"
    class="set101color"
    transparent
    @click.self="detectAction"
  >
    <input id="nameinput" style="display: none" />
    <input id="emailinput" style="display: none" />
    <br />
    <input id="passwordinput" style="display: none" />

    <v-menu id="identityinput">
      <template v-slot:activator="{ on, attrs }">
        <div
          id="specselection"
          v-bind="attrs"
          v-on="on"
          class="elevation-0 ma-0 pa-0 textcolor"
          color="transparent"
        >
          기관 소개
        </div>
      </template>
      <br /><br />
      <v-list>
        <v-list-item value="Individual Seller : I sell on Amazon by myself"
          >Individual Seller : I sell on Amazon by myself</v-list-item
        >
        <v-list-item
          value="Brand : I own private label brand products ans sell on Amazon"
          >Brand : I own private label brand products ans sell on
          Amazon</v-list-item
        >
        <v-list-item
          value="Consultant : I work with multiple brands & sellers on Amazon"
          >Consultant : I work with multiple brands & sellers on
          Amazon</v-list-item
        >
        <v-list-item value="I am not selling on Amazon yet"
          >I am not selling on Amazon yet</v-list-item
        >
      </v-list>
    </v-menu>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      nameinput: null,
      emailinput: null,
      passwordinput: null,
      identityinput: null,
      specselection: null,
    };
  },

  methods: {
    detectAction(event) {
      event.stopPropagation();

      console.log(event.target);
      let posXrate = event.offsetX / event.target.clientWidth;
      let posYrate = event.offsetY / event.target.clientHeight;

      console.log("너비비율= " + posXrate + ",  높이비율= " + posYrate);

      // if(posXrate > 0.8512195 && posYrate > 0.2340425 && posXrate < 0.9536585 && posYrate < 0.7234042) {
      //   console.log("클릭")
      // }
      // this.nameinput.style.display = ""
      // "너비비율= 0.2951219512195122,  높이비율= 0.42916666666666664"

      this.nameinput.style.transform = `translate3d( ${
        event.target.clientWidth * 0.2975609756
      }px, ${event.target.clientHeight * 0.298}px, 0 )`;

      this.emailinput.style.transform = `translate3d( ${
        event.target.clientWidth * 0.2975609756 - 167
      }px, ${event.target.clientHeight * 0.3605416666}px, 0 )`;

      this.passwordinput.style.transform = `translate3d( ${
        event.target.clientWidth * 0.2975609756
      }px, ${event.target.clientHeight * 0.3981666666}px, 0 )`;

      this.nameinput.style.display = "";
      this.emailinput.style.display = "";
      this.passwordinput.style.display = "";

      // this.identityinput.style.transform = `translate3d( ${event.target.clientWidth * 0.2975609756}px, ${event.target.clientHeight * 0.298}px, 0 )`
      // this.identityinput.style.display = ""

      console.log(this.passwordinput);
    },

    basicstudy() {
      let basic = document.getElementById("edxn");

      basic.style.textAlign = "";
    },
  },

  mounted() {
    this.nameinput = document.getElementById("nameinput");
    console.log(this.nameinput);

    this.emailinput = document.getElementById("emailinput");
    console.log(this.emailinput);

    this.passwordinput = document.getElementById("passwordinput");
    console.log(this.passwordinput);

    this.identityinput = document.getElementById("identityinput");
    console.log(this.identityinput);

    this.specselection = document.getElementById("specselection");

    console.log(this.specselection);
    console.log(this.specselection.textContent);
  },
};
</script>
<style scoped>
.set101color {
  background-image: url("/01-2 Home-Sign Up.png");

  /* background-size: contain; */

  /*  background-size: cover; */

  /* background-size: 100% 50%; */

  background-size: 100% 100%;

  background-position: center;

  /* background-position: top; */
}

.edxn0 {
  inherits: false;
}

.aligntext {
  text-align: "";
}
</style>
