<template>
  <div>
    <br /><br />
    이용 약관
    <br /><br />
    <div class="home contain justify-center">
      <div style="overflow: scroll" class="innerscroll">
        <div>
          <p>유통기한: {{ $store.state.selectedFood.limit }}까지</p>

          남은 시간: {{ this.remainingtime0 }}일

          {{ this.remainingtime1 }}시간

          {{ this.remainingtime2 }}분

          {{ this.remainingtime3 }}초
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

      scrollInvoked: 0,

      remainingtime0: null,
      remainingtime1: null,
      remainingtime2: null,
      remainingtime3: null,
    };
  },

  methods: {
    starter() {
      let intervalId;

      // this.container.style.display = "flex";
      // this.messgeContainer.style.display = "none";
      console.log(this.$store.state.selectedFood.limit);

      clearInterval(intervalId);

      this.counterMaker(this.$store.state.selectedFood.limit);
      intervalId = setInterval(() => {
        console.log("dddd", this.$store.state.selectedFood.limit);
        this.counterMaker(this.$store.state.selectedFood.limit);
      }, 1000);

      // let newfood = {
      //   id: Date.now(),
      //   limit: this.dateForMaker(),
      // };
      // this.foodlist.push(newfood);
      // this.savefood(newfood);
    },

    // dateForMaker() {
    //   const inputYear = document.querySelector("#target-year-input").value;
    //   const inputMonth = document.querySelector("#target-month-input").value;
    //   const inputDate = document.querySelector("#target-date-input").value;
    //   const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    //   return dateFormat;
    // },

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

      this.remainingtime0 = format(remainingDate);
      this.remainingtime1 = format(remainingHours);
      this.remainingtime2 = format(remainingMin);
      this.remainingtime3 = format(remainingSec);
    },

    agree01() {
      this.$router.push({ name: "signup" });
    },
  },

  mounted() {
    this.starter();
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