<template>
  <div class="home">
    <br />
    <br />
    <p>안녕하세요! 오늘의 유통기한을 안내합니다</p>
    <!-- <br /> -->
    <button @click="gologin">식품 추가하기</button>
    <br /><br /><br />
    <!-- <div v-for="item in foodlist" :key="item.id">
      <div @click="agree(item.id)">
        {{ item.name }}
        {{ item.sttype }}
        {{ item.limit }}
        {{ counterMaker(item.limit) }}일 남았습니다
      </div>
    </div> -->

    <button @click="gocomp">look design</button>

    <div v-for="item in foodlist" :key="item.id">
      <div id="tweet" v-show="isVideoMode" @click="agree(item.id)">
        <img :src="userData.pictureUrl" />
        <div class="tweet-content">
          <div class="user-info    mb-0">
            <p class="name mb-0">
              {{ item.name }}
            </p>
            <p class="username  mb-0">{{ item.sttype }}</p>
            <span></span>
          </div>
          <div class="tweet-body">
            <p>{{ counterMaker(item.limit) }}일 남았습니다</p>
            <p>
              {{ item.limit }}
            </p>
          </div>
        </div>
      </div>
    </div>
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

      limitlist: null,

      remainingtime0: null,
      remainingtime1: null,
      remainingtime2: null,
      remainingtime3: null,

      likeNumber: null,
      reTweetNumber: null,
      replyNumber: null,
      date: null,
      userData: {
        firstName: null,
        lastName: null,
        pictureUrl: null,
        userId: null,
      },
      tweetBody: {
        content: "",
        author: "",
      },
      isVideoMode: false,
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
      await axios
        .get("http://49.247.26.149:5150/member/accounts")
        .then((res) => {
          // console.log(res.data.posts);
          this.foodlist = res.data.posts;
          this.loadfood(res.data.posts);
          // this.limitlist = this.foodlist.map((food) => {
          //   return this.counterMaker(food.limit);
          // });
          // console.log(this.limitlist);
        });
    },

    starter() {
      let intervalId;

      console.log(this.$store.state.selectedFood.limit);

      clearInterval(intervalId);

      this.counterMaker(this.$store.state.selectedFood.limit);

      // intervalId = setInterval(() => {
      //   console.log("dddd", this.$store.state.selectedFood.limit);
      //   this.counterMaker(this.$store.state.selectedFood.limit);
      // }, 1000);
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

      this.remainingtime0 = format(remainingDate);
      this.remainingtime1 = format(remainingHours);
      this.remainingtime2 = format(remainingMin);
      this.remainingtime3 = format(remainingSec);

      return format(remainingDate);
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

        await axios.post("http://49.247.26.149:5150/root/post", newfood);
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

    gocomp() {
      this.$router.push({ name: "About" });
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

    addLike() {
      this.likeNumber += 1;
    },
    async randomUser() {
      await axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          // handle success
          const value = [...response.data.results][0];
          // console.log(value);
          this.userData.firstName = value.name.first;
          this.userData.lastName = value.name.last;
          this.userData.pictureUrl = value.picture.medium;
          this.userData.userId = value.id.name;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // console.log(this.userData);
        });
    },
    async getQuote() {
      await axios.get("https://api.quotable.io/random/").then((response) => {
        const data = response.data;
        this.tweetBody.content = data.content;
        this.tweetBody.author = data.author;
      });
    },

    setRandomValue() {
      let comment = Math.floor(Math.random() * 50) + 1;
      let reTweet = Math.floor(comment * 4.3);
      let like = Math.floor(reTweet * 15.7);

      this.reTweetNumber = reTweet;
      this.likeNumber = like;
      this.replyNumber = comment;
      this.date = Math.floor(Math.random() * 24) + 1;
    },
  },

  mounted() {
    this.bring();
  },

  async created() {
    await this.getQuote();
    await this.randomUser();
    this.setRandomValue();

    setTimeout(() => {
      this.isVideoMode = true;
    }, 1000);
  },
};
</script>

<style scoped   lang="scss"  >
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

#tweet {
  display: flex;
  align-items: flex-start;
  padding: 1rem 31px 11px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  img {
    margin-right: 1rem;
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
  .tweet-content {
    width: 100%;
    .user-info {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 0px;
      * {
        margin-right: 4px;
        line-height: 17.58px;
        font-size: 15px;
        color: #828282;
      }
      .name {
        font-weight: 700;
        color: #000;
      }
      span {
        color: #828282;
      }
    }

    .tweet-body {
      margin-bottom: 11px;
      p {
        font-size: 15px;
        line-height: 22px;
        color: #333333;
      }
      .hashtag {
        color: #1da1f2;
      }
      .hashtag:hover {
        text-decoration: underline;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-around;
      width: 100%;
      #reply:hover {
        svg {
          fill: rgba(#1da1f2, 0.8);
          background-color: rgba(#1da1f2, 0.08);
          border-radius: 100px;
        }

        span {
          color: rgba(#1da1f2, 0.8);
        }
      }
      #retweet:hover {
        svg {
          fill: rgba(green, 0.8);
          background-color: rgba(green, 0.08);
          border-radius: 100px;
        }

        span {
          color: rgba(green, 0.8);
        }
      }
      #like:hover {
        svg {
          fill: rgba(red, 0.8);
          background-color: rgba(red, 0.08);
          border-radius: 100px;
        }

        span {
          color: rgba(red, 0.8);
        }
      }
      #share:hover {
        svg {
          fill: rgba(#1da1f2, 0.8);
          background-color: rgba(#1da1f2, 0.08);
          border-radius: 50%;
        }

        span {
          color: rgba(green, 0.8);
        }
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          box-sizing: content-box;
          cursor: pointer;
          width: 18px;
          padding: 0.5rem;
          margin-right: 4px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 476px) {
  #tweet {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
