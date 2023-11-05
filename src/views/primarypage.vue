<template>
  <div 
  
    id="whybartool"
    class="set101color"
    transparent
    
  
  
  
  
  
  >
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
   
    




    
    <!-- <v-card>
      <v-list color="yellow lighten-5">
        <v-divider></v-divider>
        <div v-for="(a, i) in newslist" :key="i">
          <v-divider></v-divider>
          <div @click="addnews(i)">
            {{ newslist[i].title }}
          </div>
        </div>
      </v-list>
 
      <div v-for="(a, i) in $store.state.foodstore" :key="i">
        {{ $store.state.foodstore[i] }}
      </div>
    </v-card> -->






  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";
import { mapState, mapActions, mapMutations } from "vuex";
import Icons from "@/components/Icons";
import newsData from "./newsData.js";

export default {
  name: "Home",
  components: {
    ValidationProvider,
  },

  data() {
    return {
      newslist: newsData,

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

    addnews(i) {
    //   console.log(this.newslist);

      let specnews = this.newslist[i]

      console.log(specnews)
      
      this.insertfood(specnews)

      this.$router.push({ name: "selectednews" });


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

    async bring() {
      await axios.get("/member/accounts").then((res) => {
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

        await axios.post("/root/post", newfood);
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
    // this.bring();
  },

  async created() {
    // await this.getQuote();
    // await this.randomUser();
    // this.setRandomValue();
    // setTimeout(() => {
    //   this.isVideoMode = true;
    // }, 1000);
  },
};
</script>

<style scoped lang="scss">
.set101color {
  background-image: url("/01-1 Home-unlogined.png");

  /* background-size: contain; */

  // background-size: cover;

  /* background-size: 100% 50%; */

  background-size: 100% 100%; 

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

@media (max-width: 476px) {
  #tweet {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
