import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    islogin: false,


    // paththis: window.location.pathname



  },
  mutations: {

    loginsuccess(state) {
      state.islogin = true
    },




  },
  actions: {
  },
  modules: {
  }
})
