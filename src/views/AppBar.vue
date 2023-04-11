<template>
  <v-app-bar
    id="whybartool"
    color="white"
    white
    height="94"
    fixed
    hide-on-scroll
  >
    <v-toolbar-title class="pl-0" @click="go0home">
      <div class="d-flex align-center">
        <img src="/fstmovielogo.png" class="limitwidth ml-2" />
      </div>
    </v-toolbar-title>

    <div class="dnidlcst">
      <v-menu class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0"
            color="transparent"
          >
            KIWFF
          </v-btn>
        </template>
        <br /><br />
        <v-list class="">
          <v-list-item @click="gopage0">소개</v-list-item>
          <v-list-item @click="gopage1">개요</v-list-item>
          <v-list-item @click="gopage2">movie market</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0"
            color="transparent"
          >
            2023년 행사 안내
          </v-btn>
        </template>
        <br /><br />
        <v-list>
          <v-list-item @click="gopage3">행사 일정</v-list-item>
          <v-list-item @click="gopage4">시상안내</v-list-item>
          <v-list-item @click="gopage5">심사위원/멘토</v-list-item>
          <v-list-item @click="gopage6">행사안내</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0"
            color="transparent"
          >
            출품/신청 안내
          </v-btn>
        </template>
        <br /><br />
        <v-list>
          <v-list-item @click="gopage7">웹드라마 경쟁</v-list-item>
          <v-list-item @click="gopage8">학생공모</v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div></div>
  </v-app-bar>
</template>

<script>
// import { mdiAccount } from '@mdi/js';

export default {
  name: "AppBar",
  data() {
    return {
      app_version: "1",
      //    isLogedIn : false,
    };
  },

  computed: {
    isLogedIn() {
      console.log("test");
      let result = false;
      let flag = this.$store.getters.getUserData;
      if (flag) result = true;
      return result;
    },
  },

  mounted() {
    var bartitle = document.getElementById("whybartool").children[0];

    console.log(bartitle);

    bartitle.classList.add("invldctns");

    bartitle.classList.remove("v-toolbar__content");

    bartitle.style.display = "flex";

    bartitle.style.justifyContent = "space-between";

    bartitle.style.alignItems = "center";

    console.dir(bartitle);

    console.dir(bartitle.style);
  },

  methods: {
    gopage0() {
      this.$router.push({ name: "introduce" });
    },

    gopage1() {
      this.$router.push({ name: "shortabout" });
    },

    gopage2() {
      this.$router.push({ name: "moviemarket" });
    },

    gopage3() {
      this.$router.push({ name: "schedule" });
    },

    gopage4() {
      this.$router.push({ name: "award" });
    },

    gopage5() {
      this.$router.push({ name: "mentor" });
    },

    gopage6() {
      this.$router.push({ name: "showcase" });
    },

    gopage7() {
      this.$router.push({ name: "webdrama" });
    },

    gopage8() {
      this.$router.push({ name: "student" });
    },

    go0home() {
      this.$router.push({ name: "primarypage" });
    },

    slttaghdr() {
      var bartitle = document.getElementById("whybartool").children[0];

      console.log(bartitle);

      bartitle.classList.add("invldctns");

      bartitle.classList.remove("v-toolbar__content");

      bartitle.style.display = "flex";

      bartitle.style.justifyContent = "space-between";

      bartitle.style.alignItems = "center";

      console.dir(bartitle);

      console.dir(bartitle.style);
    },

    goHome() {
      console.log("Glicked go home....");
      this.$router.push("/home/home");
      this.$store.commit({
        type: "setCurrentRoute",
        route: "/home",
      });
    }, // goHome

    login() {
      this.$store.commit({ type: "setSubPage", sub_page: "로그인" });
      this.$router.push("/sign/login");
      this.$store.commit({
        type: "setCurrentRoute",
        route: "login",
      });
    }, // login
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-size: 1rem !important;
  color: #969696;
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
