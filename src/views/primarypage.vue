<template>
  <div class="home">
      <br> <br>
    안녕하세요!
    오늘의 유통기한을 안내합니다
    <br />
    <br /><br />
    <v-btn id="frontpage" @click="agree">회원 가입</v-btn>
    <br /><br />
    <v-btn id="frontpage" @click="gologin">로그인</v-btn>
    <br /><br />
    <v-btn id="frontpage" @click="checklogin"
      >개발 진척 상황 확인</v-btn
    >



<br><br><br><br><br>
<br><br><br><br><br><br>
<br><br><br><br><br><br>
<br><br>


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
    };
  },

  methods: {
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
};
</script>

<style>
#frontpage {
  width: 225px;
}
</style>
