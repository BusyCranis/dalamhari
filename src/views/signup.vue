<template>
  <div>
    <br /><br />
    <div class="home contain justify-center">
      <div style="overflow: scroll" class="innerscroll">
        <div class="search">
          <img src="@/assets/tweet-icons/icon-section.svg" alt="" />
          <input
            type="text"
            placeholder="식재료 이름을 입력하세요"
            v-model="foodname"
          />
        </div>

        <div>유통기한 입력</div>

        <div class="search">
          <img src="@/assets/tweet-icons/icon-section.svg" alt="" />
          <input type="text" id="target-year-input" placeholder="year" />년
        </div>

        <div class="search">
          <img src="@/assets/tweet-icons/icon-section.svg" alt="" />
          <input type="text" id="target-month-input" placeholder="month" />월
        </div>

        <div class="search">
          <img src="@/assets/tweet-icons/icon-section.svg" alt="" />
          <input type="text" id="target-date-input" placeholder="day" />일
        </div>

        <button @click="freeze">냉동 보관</button>
        <button @click="fresh">냉장 보관</button>
        <button @click="tempture">실온 보관</button>

        <br />

        <button @click="starter">저장하기</button>

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
        console.log(this.dateForMaker());

        this.counterMaker(this.dateForMaker());

        let newfood = {
          id: Date.now(),
          limit: this.dateForMaker(),
          sttype: this.typestore,
          name: this.foodname,
        };
        // this.foodlist.push(newfood);
        this.savefood(newfood);

        await axios
          .post("http://49.247.26.149:5150/root/post", newfood)
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
      this.typestore = "냉동 보관";
    },

    fresh() {
      this.typestore = "냉장 보관";
    },

    tempture() {
      this.typestore = "실온 보관";
    },

    agree01() {
      this.$router.push({ name: "signup" });
    },
  },
};
</script>
<style       scoped lang="scss"       >
.innerscroll {
  max-height: 375px;
  width: 375px;
  /* justify-content: center; */
}

.contain {
  display: flex;
  justify-content: center;
}

.search {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px auto;
  height: 48px;
  background: #e7ecf0;
  border-radius: 100px;

  img {
    margin-left: 17.67px;
    margin-right: 9.88px;
  }
  input {
    color: #828282;
    background: #e7ecf0;
    font-size: 15px;
    line-height: 27.58px;
    width: 15rem;
  }
  input:active {
    outline: none;
    border: none;
  }
  input:focus {
    outline: 0;
  }
}
</style>