<template>
  <div>
    <br><br>
    <a href="http://49.247.19.95"> 개발 진척 상황 확인하기 </a>

    <br /><br />

    <div>
      <v-btn @click="whileread">지역장 명단 확인하기</v-btn>
      <div v-for="item in userlist" :key="item.id">
        {{ item.name }}
      </div>
    </div>

<br><br><br><br><br><br>
<br><br><br><br><br><br>
<br><br><br><br><br><br>
<br><br><br><br><br><br><br>

  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userlist: [],
    };
  },

  methods: {
  
    updateinfo(_id) {
      let myid = _id;
      console.log(myid);

      axios
        .post("http://localhost:5100/update/list", {
          yourid: myid,
          name: this.form.name,
        })
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>
<style>
</style>