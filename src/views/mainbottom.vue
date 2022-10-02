<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="recent"> 냉장고 </v-btn>

    <v-btn value="favorites" @click="makeAlert"> 메모 </v-btn>

    <v-btn value="nearby" @click="makeAlert"> 레시피 </v-btn>

    <v-btn value="setting" @click="makeAlert"> 설정 </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
    move3() {
      this.$router.push({ name: "potenpage" });
    },
    move4() {
      this.$router.push({ name: "home" });
    },

    makeAlert() {
      alert("준비중입니다.");
    },
  },
};
</script>
<style>
</style>