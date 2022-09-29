<template>
  <div>
    <br /><br />
    이용 약관
    <br /><br />
    <div class="home contain justify-center">
      <div style="overflow: scroll" class="innerscroll">
        <div>
          <div>유통기한</div>

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

          <button @click="starter" class="btn">보관하기</button>
        </div>

        <!-- <button @click="starter">시작</button> -->

        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>

    <br />

    <!-- <v-btn @click="agree">동의</v-btn> -->

    <br /><br /><br /><br /><br />
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

      scrollInvoked: 0,

      remainingtime0: null,
      remainingtime1: null,
      remainingtime2: null,
      remainingtime3: null,
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



    async starter() {
      if (this.typestore == null || this.typestore == undefined) {
        return;
      } else {
        // let intervalId;
        // this.container.style.display = "flex";
        // this.messgeContainer.style.display = "none";
        console.log(this.dateForMaker());
        // clearInterval(intervalId);
        this.counterMaker(this.dateForMaker());
        // intervalId = setInterval(() => {
        //   console.log("dddd", this.dateForMaker());
        //   this.counterMaker(this.dateForMaker());
        // }, 1000);
        let newfood = {
          id: Date.now(),
          limit: this.dateForMaker(),
          sttype: this.typestore,
          name: this.foodname,
        };
        // this.foodlist.push(newfood);
        this.savefood(newfood);

        await axios
          .post("http://localhost:5150/root/post", newfood)
          .then((res) => console.log(res.data));

        this.$router.push({ name: "primarypage" });
      }
    },

    dateForMaker() {
      const inputYear = document.querySelector("#target-year-input").value;
      const inputMonth = document.querySelector("#target-month-input").value;
      const inputDate = document.querySelector("#target-date-input").value;

      const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
      return dateFormat;
    },

    counterMaker(data) {
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

    freeze() {
      this.typestore = "냉동";
    },

    fresh() {
      this.typestore = "냉장";
    },

    tempture() {
      this.typestore = "실온";
    },

    agree01() {
      this.$router.push({ name: "signup" });
    },
  },
};
</script>
<style>
.innerscroll {
  max-height: 375px;
  width: 375px;
  /* justify-content: center; */
}

.contain {
  display: flex;
  justify-content: center;
}
</style>