<template>
  <div>
    <br>
    이용 약관
    <br /><br />
    <div class="home contain justify-center">
      <div style="overflow: scroll" class="innerscroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. OfficiisLorem
        ipsum dolor sit amet consectetur adipisicing elit. Officiisuasi iusto
        alias sequi, aut aliquid voluptatibus commodi! Minima, eum facilis dicta
        esse molestias vero hic laudantium provident nisi eos facilis dicta esse
        molestias vero hic laudantium provident nisi eosuasi iusto alias sequi,
        aut aliquid voluptatibus commodi! Minima, eum quasi iusto alias sequi,
        aut aliquid voluptatibus commodi! Minima, eum quasi iusto alias sequi,
        aut aliquid voluptatibus commodi! Minima, eumuasi iusto alias sequi, aut
        aliquid voluptatibus commodi! Minima, eum voluptates?Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Officiis voluptates?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officiis facilis dicta esse
        molestias vero hic laudantium provident nisi eosvoluptates?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officiisuasi iusto alias
        sequi, aut aliquid voluptatibus commodi! Minima, eum facilis dicta esse
        molestias vero hic laudantium provident nisi eos quasi iusto alias
        sequi, aut aliquid voluptatibus commodi! Minima, eumuasi iusto alias
        sequi, aut aliquid voluptatibus commodi! Minima, eum voluptates? quasi
        iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum quasi
        iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
        voluptates?uasi iusto alias sequi, aut aliquid voluptatibus commodi!
        Minima, eumuasi iusto alias sequi, aut aliquid voluptatibus commodi!
        Minima, eumuasi iusto alias sequi, aut aliquid voluptatibus commodi!
        Minima, eum voluptates? quasi iusto alias sequi, aut aliquid
        voluptatibus commodi! Minima, eumuasi iusto alias sequi, aut aliquid
        voluptatibus commodi! Minima, eumuasi iusto alias sequi, aut aliquid
        voluptatibus commodi! Minima, eum
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>

    <br />

    <v-btn @click="agree">동의</v-btn>
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

      scrollInvoked: 0,
    };
  },

  methods: {
    agree() {
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