<template>
  <div>
    <br /><br />
    <div class="home contain justify-center">
      <div  class="innerscroll">
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

        <!-- <button @click="freeze">냉동</button>
        <button @click="fresh">냉장</button>
        <button @click="tempture">실온</button> -->

        <br />

        <div class="input00context">
          <div class="icons">
            <div class="right-icon">
              <button @click="freeze">냉동</button>
            </div>

            <div class="right-icon">
              <button @click="fresh">냉장</button>
            </div>

            <div class="right-icon">
              <button @click="tempture">실온</button>
            </div>
          </div>
        </div>

        <!-- <button @click="starter">저장하기</button> -->

        <div class="justify0">
          <div class="input-context">
            <div class="icons">
              <div class="right-icon">
                <button @click="starter">저장하기</button>
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

    <!-- <br /><br /><br /><br /><br /> -->
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

.input00context {
  // border-top: 1px solid rgba(0, 0, 0, 0.08);
  // border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  // justify-content: center;

  // width: 600px;
  // padding-left: 1rem;
  padding-top: 8px;
  display: flex;
  align-items: center;

  // margin-right: 2rem;
  // display: flex;
  flex-direction: column;
  // flex: 1;

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

@media (max-width: 758px) {
  #input-context {
    width: 100%;
  }
}

@media (max-width: 476px) {
  #input-context {
    display: none;
  }
}
</style>