<template>
  <v-app-bar class="" color="white" white height="94" fixed hide-on-scroll app>
    <v-toolbar-title class="pl-0" @click="goHome">
      <div class="d-flex align-center">
        <img src="/fstmovielogo.png" width="90px" class="ml-2" />
      </div>
    </v-toolbar-title>

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="elevation-0"> KIWFF </v-btn>
      </template>
      <br /><br />
      <v-list>
        <v-list-item> 소개 </v-list-item>
        <v-list-item>개요</v-list-item>
        <v-list-item>movie market</v-list-item>
      </v-list>
    </v-menu>

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="elevation-0">
          2023년 행사 안내
        </v-btn>
      </template>
      <br /><br />
      <v-list>
        <v-list-item> 행사 일정 </v-list-item>
        <v-list-item>시상안내</v-list-item>
        <v-list-item>심사위원/멘토</v-list-item>
        <v-list-item>행사안내</v-list-item>
      </v-list>
    </v-menu>

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="elevation-0">
          출품/신청 안내
        </v-btn>
      </template>
      <br /><br />
      <v-list>
        <v-list-item>웹드라마 경쟁</v-list-item>
        <v-list-item>학생공모</v-list-item>
        <!-- <v-list-item>행사안내</v-list-item> -->
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
// import { mdiAccount } from '@mdi/js';

    export default {

       name: "AppBar",
       data() {
           return{
               app_version:'1',
            //    isLogedIn : false, 
           }
       },

       computed : {
           isLogedIn() {
               console.log('test')
               let result = false
               let flag = this.$store.getters.getUserData
               if(flag) result = true 
               return result 
           },
       },

       mounted() {
        //    this.app_version = process.env.VUE_APP_VERSION
        // let logedIn = this.$cookies.get("token")
        // if(logedIn) this.isLogedIn = true 
        // else this.isLogedIn = false
       },

       methods: {
           goHome(){
               console.log('Glicked go home....')
               this.$router.push('/home/home')
               this.$store.commit(
                    {
                        type: "setCurrentRoute",
                        route: '/home',
                    }
                )
           }, // goHome 

           login() {
               this.$store.commit({ type: "setSubPage", sub_page: "로그인" });
                this.$router.push("/sign/login");
                this.$store.commit({
                    type: "setCurrentRoute",
                    route: "login",
                });
           }, // login
       },
    }

</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-size: 1rem !important;
  color: #969696;
}

.moreflex {
  display: flex;

  // align-items: flex-start;
}

// .flexstart {

// align-items: flex-start;

// }

.parefix {
  position: fixed;
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
</style>
