<template>
  <v-app-bar
    id="whybartool"
    class="set101color"
    color="white"
    transparent
    height="94"
    fixed
  >
    <!-- <v-toolbar-title class="pl-0" @click="go0home">
      <div class="d-flex align-center">
      </div>
    </v-toolbar-title>
    <div class="dnidlcst">
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            기관 소개
          </v-btn>
        </template>
        <br /><br />
        <v-list>
          <v-list-item @click="gopage24">인사말</v-list-item>
          <v-list-item @click="gopage9">협회 정보</v-list-item>
          <v-list-item @click="gopage10">찾아오시는 길</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            공지사항
          </v-btn>
        </template>
        <br /><br />
        <v-list>
          <v-list-item @click="gopage25">
            클라우드 디지털 저작권 플랫폼
          </v-list-item>
          <v-list-item @click="gopage26">디지털 자산 감정 플랫폼</v-list-item>
          <v-list-item @click="gopage27">기타 사업</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            업종별 유통뉴스
          </v-btn>
        </template>
        <br /><br />
        <v-list class="">
          <v-list-item @click="gopage0">연극</v-list-item>
          <v-list-item @click="gopage1">음악</v-list-item>
          <v-list-item @click="gopage2">미술</v-list-item>
          <v-list-item @click="gopage0">건축</v-list-item>
          <v-list-item @click="gopage3">사진</v-list-item>
          <v-list-item @click="gopage4">영상</v-list-item>
          <v-list-item @click="gopage5">도형</v-list-item>
          <v-list-item @click="gopage6">편집</v-list-item>
          <v-list-item @click="gopage7">방송</v-list-item>
          <v-list-item @click="gopage20">실연</v-list-item>
          <v-list-item @click="gopage21">음반</v-list-item>
          <v-list-item @click="gopage22">데이터베이스</v-list-item>
          <v-list-item @click="gopage23">기타</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            종합뉴스
          </v-btn>
        </template>
        <br /><br />
        <v-list>
          <v-list-item @click="gopage11">공지사항</v-list-item>
          <v-list-item @click="gopage12">뉴스/보도자료</v-list-item>
          <v-list-item @click="gopage13">자주하는 질문</v-list-item>
          <v-list-item @click="gopage14">저작권 강의 신청</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            창업 지원
          </v-btn>
        </template>
        <br /><br />
        <v-list class="">
          <v-list-item @click="gopage0">연극</v-list-item>
          <v-list-item @click="gopage1">음악</v-list-item>
          <v-list-item @click="gopage2">미술</v-list-item>
          <v-list-item @click="gopage0">건축</v-list-item>
          <v-list-item @click="gopage3">사진</v-list-item>
          <v-list-item @click="gopage4">영상</v-list-item>
          <v-list-item @click="gopage5">도형</v-list-item>
          <v-list-item @click="gopage6">편집</v-list-item>
          <v-list-item @click="gopage7">방송</v-list-item>
          <v-list-item @click="gopage20">실연</v-list-item>
          <v-list-item @click="gopage21">음반</v-list-item>
          <v-list-item @click="gopage22">데이터베이스</v-list-item>
          <v-list-item @click="gopage23">기타</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            유통 종사자 기고
          </v-btn>
        </template>
        <br /><br />
        <v-list class="">
          <v-list-item @click="gopage0">연극</v-list-item>
          <v-list-item @click="gopage1">음악</v-list-item>
          <v-list-item @click="gopage2">미술</v-list-item>
          <v-list-item @click="gopage0">건축</v-list-item>
          <v-list-item @click="gopage3">사진</v-list-item>
          <v-list-item @click="gopage4">영상</v-list-item>
          <v-list-item @click="gopage5">도형</v-list-item>
          <v-list-item @click="gopage6">편집</v-list-item>
          <v-list-item @click="gopage7">방송</v-list-item>
          <v-list-item @click="gopage20">실연</v-list-item>
          <v-list-item @click="gopage21">음반</v-list-item>
          <v-list-item @click="gopage22">데이터베이스</v-list-item>
          <v-list-item @click="gopage23">기타</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            온라인 유통거래시장
          </v-btn>
        </template>
        <br /><br />
        <v-list class="">
          <v-list-item @click="gopage0">연극</v-list-item>
          <v-list-item @click="gopage1">음악</v-list-item>
          <v-list-item @click="gopage2">미술</v-list-item>
          <v-list-item @click="gopage0">건축</v-list-item>
          <v-list-item @click="gopage3">사진</v-list-item>
          <v-list-item @click="gopage4">영상</v-list-item>
          <v-list-item @click="gopage5">도형</v-list-item>
          <v-list-item @click="gopage6">편집</v-list-item>
          <v-list-item @click="gopage7">방송</v-list-item>
          <v-list-item @click="gopage20">실연</v-list-item>
          <v-list-item @click="gopage21">음반</v-list-item>
          <v-list-item @click="gopage22">데이터베이스</v-list-item>
          <v-list-item @click="gopage23">기타</v-list-item>
        </v-list>
      </v-menu>

      <div style="min-width: 30px"></div>

      <v-menu class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="elevation-0 ma-0 pa-0 textcolor"
            color="transparent"
          >
            커뮤니티
          </v-btn>
        </template>
        <br /><br />
        <v-list class="">
          <v-list-item @click="gopage0">연극</v-list-item>
          <v-list-item @click="gopage1">음악</v-list-item>
          <v-list-item @click="gopage2">미술</v-list-item>
          <v-list-item @click="gopage0">건축</v-list-item>
          <v-list-item @click="gopage3">사진</v-list-item>
          <v-list-item @click="gopage4">영상</v-list-item>
          <v-list-item @click="gopage5">도형</v-list-item>
          <v-list-item @click="gopage6">편집</v-list-item>
          <v-list-item @click="gopage7">방송</v-list-item>
          <v-list-item @click="gopage20">실연</v-list-item>
          <v-list-item @click="gopage21">음반</v-list-item>
          <v-list-item @click="gopage22">데이터베이스</v-list-item>
          <v-list-item @click="gopage23">기타</v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="minwdthon somehght">
      <div></div>
    </div> -->




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

    gopage9() {
      this.$router.push({ name: "orginfo" });
    },

    gopage10() {
      this.$router.push({ name: "way" });
    },

    gopage11() {
      this.$router.push({ name: "notice" });
    },

    gopage12() {
      this.$router.push({ name: "news" });
    },

    gopage13() {
      this.$router.push({ name: "faq" });
    },

    gopage14() {
      this.$router.push({ name: "lecture" });
    },

    gopage15() {
      this.$router.push({ name: "secondary" });
    },

    gopage16() {
      this.$router.push({ name: "program" });
    },

    gopage17() {
      this.$router.push({ name: "charbi" });
    },

    gopage18() {
      this.$router.push({ name: "charci" });
    },

    gopage19() {
      this.$router.push({ name: "dataroom" });
    },

    gopage20() {
      this.$router.push({ name: "tlfdus" });
    },

    gopage21() {
      this.$router.push({ name: "music" });
    },

    gopage22() {
      this.$router.push({ name: "database" });
    },

    gopage23() {
      this.$router.push({ name: "etc" });
    },

    gopage24() {
      this.$router.push({ name: "greeting" });
    },

    gopage25() {
      this.$router.push({ name: "cloud" });
    },

    gopage26() {
      this.$router.push({ name: "estimate" });
    },

    gopage27() {
      this.$router.push({ name: "otherbusyness" });
    },

    // gopage28() {
    //   this.$router.push({ name: "etc" });
    // },

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
.set101color {
  background-image: url("/propertyDefault.png");

  /* background-size: cover; */

  /* background-size: contain; */

  background-size: cover;

  /* background-size: 100% 50%; */

  /* background-size: 100%; */

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
