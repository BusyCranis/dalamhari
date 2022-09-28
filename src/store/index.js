import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    islogin: false,


    // paththis: window.location.pathname


    foodstore: [],

    selectedFood: null









  },
  mutations: {

    loginsuccess(state) {
      state.islogin = true
    },

    savefood(state, payload) {

      state.foodstore.push(payload)

    },

    insertfood(state, payload) {

      state.selectedFood = payload

    }




  },
  actions: {
  },
  modules: {
  }
})
