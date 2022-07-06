import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/signup.vue'
import LinkedInfo from '../views/linkedInfo.vue'
import Login from '../views/loginformpage.vue'
import Lawpage from '../views/lawagreepage.vue'
import primarypage from '../views/primarypage.vue'
// import newstartTradepage from '../views/newstartTradepage.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/*',
    redirect: { name: 'Home' }
  },

  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },


  {
    path: '/linkinfo',
    name: 'linkedinfo',
    component: LinkedInfo
  },

  {
    path: '/law',
    name: 'lawagree',
    component: Lawpage
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/front',
    name: 'primarypage',
    component: primarypage
  },

  // {
  //   path: '/newstartTradepage',
  //   name: 'newstartTradepage',
  //   component: newstartTradepage
  // },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
