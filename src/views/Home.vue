<template>
  <div>
    <div class="contain">
      "밝고 투명한 사회"
      <br />
      풀뿌리 숙의민주주의를 위한 세상에 없던 지역(위치)기반 커뮤니티<br />
      이게 나라냐?<br />
      현 정권은 민생은 내팽개치고 수사에만 집중하는 검찰국가로 나아가려하고
      있다.<br />
      이제는 우리가 직접 나서야 한다.<br />
      전국 지역장을 3,000명을 모집한다.<br />
      아래에서부터 민의를 수렴해서 국가의 주요 이슈까지 시민이 직접 결정하는
      커뮤니티 시스템 <br />
      가입하라
    </div>
    <v-btn id="frontpage" @click="agree"> 참여하는 방법 알아보기 </v-btn>

    <div class="contain">
      지역장이 되시면
      <br />
      현실 정치의 모든 현안에 대한 의견들을 아래로부터 모아서
      <br />
      실제 정치인(대통령,국회의원,지방자치단체장)에게 전달하고
      <br />
      그들을 움직일수있습니다.
      <br />
      정치에 관심이 많은 3백만명의 회원들이 활동하는 커뮤니티입니다.
    </div>
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
      this.$router.push({ name: "primarypage" });
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

.contain {
  display: flex;
  /* justify-content: center; */
}
</style>
