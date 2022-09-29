<template>
  <div class="home">
    <br />
    <br />
    <p>안녕하세요! 오늘의 유통기한을 안내합니다</p>

    <br />

    <button @click="gologin">추가</button>

    <!-- <div>유통기한</div>
    <div id="target-selector">
      <input id="target-year-input" class="target-input" size="5" />년
      <input id="target-month-input" class="target-input" size="5" />월
      <input id="target-date-input" class="target-input" size="5" />일
    </div>
    <button @click="freeze">냉동 보관</button>
    <button @click="fresh">냉장 보관</button>
    <button @click="tempture">실온 보관</button>
    <br />
    이름: <input v-model="foodname" />
    <br />
    <button @click="starter0" class="btn">보관하기</button> -->

    <br /><br /><br />

    <div v-for="item in foodlist" :key="item.id">
      {{ item.limit }}

      <button @click="agree(item.id)">상세 보기</button>
    </div>

    <!-- <v-btn id="frontpage" @click="agree">회원 가입</v-btn>
    <br /><br />
    <v-btn id="frontpage" @click="gologin">로그인</v-btn>
    <br /><br />
    <v-btn id="frontpage" @click="checklogin">개발 진척 상황 확인</v-btn> -->

    <br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br />
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    ValidationProvider,
  },

  data() {
    return {
     

      userlist: [],

      messgeContainer: null,
      container: null,
      // intervalIdArr: [],
      savedDate: null,

      foodlist: null,

      typestore: null,

      foodname: "",
    };
  },

  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["loginsuccess"]),
    ...mapMutations(["addNFT2"]),
    ...mapMutations(["sendNFT"]),
    ...mapMutations(["sendNFTtitle"]),
    ...mapMutations(["sendNFTcontent"]),
    ...mapMutations(["addItems"]),
    ...mapMutations(["sendNewItem"]),
    ...mapMutations(["savefood"]),
    ...mapMutations(["deleteNFT1"]),
    ...mapMutations(["updateNFT1"]),
    ...mapMutations(["addshop"]),
    ...mapMutations(["deleteproduct"]),
    ...mapMutations(["addboughtinfo"]),
    ...mapMutations(["addsoldinfo"]),
    ...mapMutations(["spendmoney"]),
    ...mapMutations(["buyprocess"]),
    ...mapMutations(["updateproduct"]),
    ...mapMutations(["deleteanarray"]),
    ...mapMutations(["insertfood"]),
    ...mapMutations(["loadfood"]),
    ...mapMutations(["updatecore"]),
    ...mapMutations(["submitlogout"]),

    freeze() {
      this.typestore = "냉동";
    },

    fresh() {
      this.typestore = "냉장";
    },

    tempture() {
      this.typestore = "실온";
    },

    async bring() {
      await axios.get("http://localhost:5150/member/accounts").then((res) => {
        console.log(res.data.posts);
        this.foodlist = res.data.posts;
        this.loadfood(res.data.posts);
      });
    },

    async starter0() {
      if (this.typestore == null || this.typestore == undefined) {
        return;
      } else {
        // let intervalId;
        // this.container.style.display = "flex";
        // this.messgeContainer.style.display = "none";
        console.log(this.dateForMaker());
        // clearInterval(intervalId);
        this.counterMaker0(this.dateForMaker());
        // intervalId = setInterval(() => {
        //   console.log("dddd", this.dateForMaker());
        //   this.counterMaker0(this.dateForMaker());
        // }, 1000);
        let newfood = {
          id: Date.now(),
          limit: this.dateForMaker(),
          sttype: this.typestore,
          name: this.foodname,
        };
        // this.foodlist.push(newfood);
        this.savefood(newfood);

        await axios.post("http://localhost:5150/root/post", newfood);
      }
    },

    dateForMaker() {
      const inputYear = document.querySelector("#target-year-input").value;
      const inputMonth = document.querySelector("#target-month-input").value;
      const inputDate = document.querySelector("#target-date-input").value;

      const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
      return dateFormat;
    },

    counterMaker0(data) {
      const nowDate = new Date();
      const targetDate = new Date(data).setHours(0, 0, 0, 0);
      const remaining = (targetDate - nowDate) / 1000;

      let remainingDate = Math.floor(remaining / 3600 / 24);
      let remainingHours = Math.floor(remaining / 3600) % 24;
      let remainingMin = Math.floor(remaining / 60) % 60;
      let remainingSec = Math.floor(remaining) % 60;

      const format = function (time) {
        if (time < 10) {
          return "0" + time;
        } else {
          return time;
        }
      };

      // document.getElementById("days").textContent = format(remainingDate);
      // document.getElementById("hours").textContent = format(remainingHours);
      // document.getElementById("nin").textContent = format(remainingMin);
      // document.getElementById("sec").textContent = format(remainingSec);
    },

    returnele() {},

    agree(id) {
      let item0 = this.$store.state.foodstore.filter(
        (item) => item.id === id
      )[0];

      this.insertfood(item0);

      this.$router.push({ name: "lawagree" });
    },

    gologin() {
      this.$router.push({ name: "signup" });
    },

    checklogin() {
      if (this.$store.state.islogin === false)
        this.$router.push({ name: "login" });
      else {
        this.$router.push({ name: "linkedinfo" });
      }
    },
  },

  mounted() {
    // this.messgeContainer = document.querySelector("#d-day-message");
    // this.container = document.querySelector("#d-day-container");
    // this.savedDate = localStorage.getItem("saved-date");
    // this.container.style.display = "none";
    // this.messgeContainer.innerHTML = "";

    this.bring();
  },
};
</script>

<style>
#frontpage {
  width: 225px;
}

* {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 3rem;
}

.btn {
  font-size: 1.3rem;
  margin-top: 0.5rem;
}

#d-day-continer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.6rem;
}

.d-day-child-continer {
  text-align: center;
  margin-right: 1rem;
}

.d-day-child-continer span {
  font-size: 1.3rem;
}
</style>
