<template>
  <v-bottom-navigation 
    id="whybartool"
    class="set101color"
    color="white"
    transparent
    height="94"
   


    @click="detectAction"

  >
    <!-- <v-btn value="recent"> 냉장고 </v-btn>
    <v-btn value="favorites" @click="makeAlert"> 메모 </v-btn>
    <v-btn value="nearby" @click="makeAlert"> 레시피 </v-btn>
    <v-btn value="setting" @click="makeAlert"> 설정 </v-btn> -->
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
    detectAction(event) {
      console.log(event.target)
      event.stopPropagation();
      

      let posXrate = event.offsetX / event.target.clientWidth

      let posYrate = event.offsetY / event.target.clientHeight




      console.log("너비비율= " + posXrate + ",  높이비율= " + posYrate)





    },





    move3() {
      this.$router.push({ name: "potenpage" });
    },
    move4() {
      this.$router.push({ name: "home" });
    },

    makeAlert() {
      alert("준비중입니다.");
    },
  },
};
</script>
<style    lang="scss" scoped>
.set101color {
  background-image: url("/footerDefault.png");

  /* background-size: contain; */

  // background-size: cover;

  /* background-size: 100% 50%; */

  background-size: 100% 100%; 

  background-position: center;

  /* background-position: top; */
}

.v-toolbar__title {
  font-size: 1rem !important;
  color: #969696;
}

.textcolor {
  color: rgb(255, 103, 53);


  font-weight: 800;


}

.moreflex {
  display: flex;

  // align-items: flex-start;
}

// .flexstart {

// align-items: flex-start;

// }

.pstflex {
  justify-content: center;
}

.jstfcntr {
  justify-content: space-between;
}

.invldctns {
  display: flex;

  justify-content: space-between;
}

.dnidlcst {
  display: flex;

  justify-content: center;
}

.parefix {
  position: fixed;
}

.limitwidth {
  max-width: 90px;
}

.minwdthon {
  width: 98px;
}

.somehght {
  height: 15px;
}

.midabsol {
  position: absolute;
}

.midrelatv {
  position: relative;
}

.upride {
  z-index: 9999;
}








</style>