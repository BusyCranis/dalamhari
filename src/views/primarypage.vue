<template>
  <div class="home">
    <br />
    <br />
    안녕하세요! 오늘의 유통기한을 안내합니다

    <h1>D-Day</h1>
    <div id="d-day-container">
      <div class="d-day-child-continer">
        <span id="days">0</span>
        <span>일</span>
      </div>
      <div class="d-day-child-continer">
        <span id="hours">0</span>
        <span>시간</span>
      </div>
      <div class="d-day-child-continer">
        <span id="nin">0</span>
        <span>분</span>
      </div>
      <div class="d-day-child-continer">
        <span id="sec">0</span>
        <span>초</span>
      </div>
    </div>
    <div id="d-day-message"></div>
    <div id="target-selector">
      <input id="target-year-input" class="target-input" size="5" />
      <input id="target-month-input" class="target-input" size="5" />
      <input id="target-date-input" class="target-input" size="5" />
    </div>
    <button @click="starter" class="btn">카운트다운 시작</button>

    <button> 냉장고에 넣기 </button>

    <br /><br /><br />

    <div v-for="item in foodlist" :key="item.id">
      {{ item.countdown }}
    </div>

    <v-btn id="frontpage" @click="agree">회원 가입</v-btn>
    <br /><br />
    <v-btn id="frontpage" @click="gologin">로그인</v-btn>
    <br /><br />
    <v-btn id="frontpage" @click="checklogin">개발 진척 상황 확인</v-btn>

    <br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br />
  </div>
</template>

<script>
// import axios from "axios";
import { ValidationProvider } from "vee-validate";

export default {
  name: "Home",
  components: {
    ValidationProvider,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
      },

      userlist: [],

      messgeContainer: null,
      container: null,
      // intervalIdArr: [],
      savedDate: null,

      foodlist: [],
    };
  },

  methods: {
    starter() {
      let intervalId;
      // let intervalIdArr = [];
      // function setClearInterval() {
      //   for (let i = 0; i < intervalIdArr.length; i++) {
      //     clearInterval(intervalIdArr[i]);
      //     console.log("초기화");
      //   }
      // }
      this.container.style.display = "flex";
      this.messgeContainer.style.display = "none";
      console.log(this.dateForMaker());

      clearInterval(intervalId);

      // for (let i = 0; i < intervalIdArr.length; i++) {
      //     clearInterval(intervalIdArr[i]);
      //     console.log("초기화")
      //   }
      this.counterMaker(this.dateForMaker());
      intervalId = setInterval(() => {
        console.log("dddd", this.dateForMaker());
        this.counterMaker(this.dateForMaker());
      }, 1000);
      // intervalIdArr.push(intervalId);

      // setClearInterval()
      // clearInterval(intervalId);

      let newfood = {
        id: Date.now(),
        limit: this.dateForMaker(),
        // countdown: intervalId,
      };

      this.foodlist.push(newfood);
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

      const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60,
      };

      const documentArr = ["days", "hours", "nin", "sec"];
      const timeKeys = Object.keys(remainingObj);

      const format = function (time) {
        if (time < 10) {
          return "0" + time;
        } else {
          return time;
        }
      };

      let i = 0;
      for (let tag of documentArr) {
        const remainingTime = format(remainingObj[timeKeys[i]]);
        document.getElementById(tag).textContent = remainingTime;
        i++;
      }

    
    },

    returnele() {},

    agree() {
      this.$router.push({ name: "lawagree" });
    },

    gologin() {
      this.$router.push({ name: "login" });
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
    this.messgeContainer = document.querySelector("#d-day-message");
    this.container = document.querySelector("#d-day-container");
    // this.intervalIdArr = [];
    this.savedDate = localStorage.getItem("saved-date");

    this.container.style.display = "none";
    this.messgeContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
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
