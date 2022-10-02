<template>
  <div>
    <!-- <br /><br /> -->

    <div class="home contain justify-center">
      <div class="innerscroll">
        <!-- <input v-model="year" />년 <input v-model="month" />월
        <input v-model="day" />일 -->

        유통기한 수정 페이지

        <br /><br />

        <div class="search">
          <img src="@/assets/tweet-icons/icon-section.svg" alt="" />
          <input type="text" v-model="year" placeholder="year" />년
        </div>

        <div class="search">
          <img src="@/assets/tweet-icons/icon-section.svg" alt="" />
          <input type="text" v-model="month" placeholder="month" />월
        </div>

        <div class="search">
          <img src="@/assets/tweet-icons/icon-section.svg" alt="" />
          <input type="text" v-model="day" placeholder="day" />일
        </div>

        <!-- <button @click="requpdate">수정</button> -->

        <br /><br />
        <br /><br />

        <div class="justify0">
          <div class="input-context">
            <div class="icons">
              <div class="right-icon">
                <button @click="requpdate">수정 완료</button>
              </div>
            </div>
          </div>
        </div>

        <!-- <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /> -->
      </div>
    </div>

    <br />

    <br /><br /><br /><br /><br />
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";
import { mapState, mapActions, mapMutations } from "vuex";
import Icons from "@/components/Icons";

export default {
  name: "Home",
  components: {
    ValidationProvider,
  },

  data() {
    return {
      userlist: [],

      scrollInvoked: 0,

      remainingtime0: null,
      remainingtime1: null,
      remainingtime2: null,
      remainingtime3: null,

      year: null,
      month: null,
      day: null,
      foodname: null,
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

    async requpdate() {
      console.log(this.$store.state.selectedFood._id);

      let limit = this.year + "-" + this.month + "-" + this.day;

      console.log(limit);

      await axios
        .post("http://49.247.26.149:5150/request/update", {
          yourid: this.$store.state.selectedFood._id,
          limit: limit,
        })
        .then((res) => console.log(res.data));

      this.$router.push({ name: "primarypage" });
    },

    starter() {
      let intervalId;

      // this.container.style.display = "flex";
      // this.messgeContainer.style.display = "none";
      console.log(this.$store.state.selectedFood);

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
    // this.starter();
  },
};
</script>
<style     scoped lang="scss"    >
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

.justify0 {
  display: flex;

  justify-content: center;
}

.input-context {
  // border-top: 1px solid rgba(0, 0, 0, 0.08);
  // border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  // justify-content: center;

  width: 600px;
  padding-left: 1rem;
  padding-top: 8px;
  display: flex;
  align-items: center;

  margin-right: 2rem;
  // display: flex;
  flex-direction: column;
  flex: 1;

  input {
    color: #828282;
    font-weight: 400;
    line-height: 22.27px;
    font-size: 19px;
    padding: 1rem 1rem 40px 1rem;
  }
  input:active {
    outline: none;
    border: none;
  }
  input:focus {
    outline: 0;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    .left-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        border-radius: 50%;
        padding: 0.5rem;
        box-sizing: content-box;
        &:hover {
          background-color: rgba(#1da1f2, 0.1);
        }
      }
    }

    .right-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        margin-right: 0px;
        background-color: #1da1f2;
        width: 98px;
        height: 42px;
        border-radius: 100px;
        font-weight: 700;
        font-size: 15px;
        line-height: 17.58px;
        cursor: pointer;
        color: #fff;
        transition: 1s color, 1s background-color;
      }
      button:hover {
        color: #1da1f2;
        background-color: #fff;
        border: 1px solid #1da1f2;
      }
      button:active {
        outline: none;
        border: none;
      }
      button:focus {
        outline: 0;
      }
    }
  }
}
</style>