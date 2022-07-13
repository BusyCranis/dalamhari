<template>
  <div>
    <br><br>
    로그인
    <br />
    <!-- <ValidationProvider name="Email" rules="required|email"> -->
    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.email"
          type="text"
          placeholder="이메일"
        >
        </v-text-field>
      </div>
    </div>
    <!-- </ValidationProvider> -->

    <!-- <ValidationProvider name="Password" rules="required|min:6"> -->
    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.password"
          type="text"
          placeholder="비밀번호"
        >
        </v-text-field>
      </div>
    </div>
    <!-- </ValidationProvider> -->
    <br />
    <br />
    <br />
    <v-btn @click="onmeet"> 로그인 </v-btn>

<br><br><br><br><br><br><br>


  </div>
</template>
<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
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
    ...mapMutations(["loginsuccess"]),

    async onmeet() {
      try {
        await axios
          .post("/post/method", {
            email: this.form.email,
            password: this.form.password,
          })
          .then((res) => {
            console.log(res.data.info);
            this.loginsuccess();
            this.$router.push({ name: "linkedinfo" });
          });
      } catch (err) {
        console.log(err);
      }
    },

    whileread() {
      axios
        .get("/signup/account")
        .then((r) => {
          this.userlist = r.data.posts;
          console.log(r.data.posts);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },

    goinfo() {
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
</style>