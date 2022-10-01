import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/signup.vue";
import LinkedInfo from "../views/linkedInfo.vue";
import Login from "../views/loginformpage.vue";
import Lawpage from "../views/lawagreepage.vue";
import primarypage from "../views/primarypage.vue";
// import newstartTradepage from '../views/newstartTradepage.vue'

Vue.use(VueRouter);

const routes = [

  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },

  // {
  //   path: "/*",
  //   redirect: { name: "primarypage" },
  // },

  // {
  //   path: "/signup",
  //   name: "signup",
  //   component: Signup,
  // },

  // {
  //   path: "/linkinfo",
  //   name: "linkedinfo",
  //   component: LinkedInfo,
  // },

  // {
  //   path: "/law",
  //   name: "lawagree",
  //   component: Lawpage,
  // },

  // {
  //   path: "/login",
  //   name: "login",
  //   component: Login,
  // },

  // {
  //   path: "/",
  //   name: "primarypage",
  //   component: primarypage,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("../views/index.vue"),
      children: [
        {
          path: "/",
          name: "primarypage",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/primarypage.vue"),
        },












      ],
    },

    {
      path: "/detail",
      component: () => import("../views/detail.vue"),
      children: [
        {
          name: "ledger",
          path: "/detail/ledger",
          // props: true,
          component: () => import("../views/ledger.vue"),
        },

        {
          path: "/signup",
          name: "signup",
          component: Signup,
        },
      
        {
          path: "/linkinfo",
          name: "linkedinfo",
          component: LinkedInfo,
        },
      
        {
          path: "/law",
          name: "lawagree",
          component: Lawpage,
        },
      
        {
          path: "/login",
          name: "login",
          component: Login,
        },







      ],
    },


    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },


    {
      path: "/*",
      redirect: { name: "primarypage" },
    },



  ],
});

export default router;
