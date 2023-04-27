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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        //
        {
            path: '/',
            component: () =>
                import ('../views/index.vue'),
            children: [
                //
                {
                    path: '/',
                    name: 'primarypage',
                    component: () =>
                        import ('../views/primarypage.vue')
                }, //
                //

                {
                    path: '/introduce',
                    name: 'introduce',
                    component: () =>
                        import ('../views/introduce.vue')
                }, //

                {
                    path: '/shortabout',
                    name: 'shortabout',
                    component: () =>
                        import ('../views/shortabout.vue')
                }, //

                {
                    path: '/moviemarket',
                    name: 'moviemarket',
                    component: () =>
                        import ('../views/moviemarket.vue')
                }, //

                {
                    path: '/schedule',
                    name: 'schedule',
                    component: () =>
                        import ('../views/schedule.vue')
                }, //

                {
                    path: '/award',
                    name: 'award',
                    component: () =>
                        import ('../views/award.vue')
                }, //

                {
                    path: '/mentor',
                    name: 'mentor',
                    component: () =>
                        import ('../views/mentor.vue')
                }, //

                {
                    path: '/showcase',
                    name: 'showcase',
                    component: () =>
                        import ('../views/showcase.vue')
                }, //

                {
                    path: '/webdrama',
                    name: 'webdrama',
                    component: () =>
                        import ('../views/webdrama.vue')
                }, //

                {
                    path: '/student',
                    name: 'student',
                    component: () =>
                        import ('../views/student.vue')
                }, //

                {
                    path: '/orginfo',
                    name: 'orginfo',
                    component: () =>
                        import ('../views/orginfo.vue')
                }, //

                {
                    path: '/way',
                    name: 'way',
                    component: () =>
                        import ('../views/way.vue')
                }, //

                {
                    path: '/notice',
                    name: 'notice',
                    component: () =>
                        import ('../views/notice.vue')
                }, //

                {
                    path: '/news',
                    name: 'news',
                    component: () =>
                        import ('../views/news.vue')
                }, //

                {
                    path: '/faq',
                    name: 'faq',
                    component: () =>
                        import ('../views/faq.vue')
                }, //

                {
                    path: '/lecture',
                    name: 'lecture',
                    component: () =>
                        import ('../views/lecture.vue')
                }, //

                {
                    path: '/secondary',
                    name: 'secondary',
                    component: () =>
                        import ('../views/secondary.vue')
                }, //

                {
                    path: '/program',
                    name: 'program',
                    component: () =>
                        import ('../views/program.vue')
                }, //

                {
                    path: '/charbi',
                    name: 'charbi',
                    component: () =>
                        import ('../views/charbi.vue')
                }, //

                {
                    path: '/charci',
                    name: 'charci',
                    component: () =>
                        import ('../views/charci.vue')
                }, //

                {
                    path: '/dataroom',
                    name: 'dataroom',
                    component: () =>
                        import ('../views/dataroom.vue')
                }, //

                {
                    path: '/tlfdus',
                    name: 'tlfdus',
                    component: () =>
                        import ('../views/tlfdus.vue')
                }, //

                {
                    path: '/music',
                    name: 'music',
                    component: () =>
                        import ('../views/music.vue')
                }, //

                {
                    path: '/database',
                    name: 'database',
                    component: () =>
                        import ('../views/database.vue')
                }, //

                {
                    path: '/etc',
                    name: 'etc',
                    component: () =>
                        import ('../views/etc.vue')
                }, //








                // {
                //     path: '/',
                //     name: 'primarypage',
                //     component: () =>
                //         import ('../views/primarypage.vue')
                // }, //
            ]
        },

        {
            path: '/detail',
            component: () =>
                import ('../views/detail.vue'),
            children: [{
                    name: 'ledger',
                    path: '/detail/ledger',
                    // props: true,
                    component: () =>
                        import ('../views/ledger.vue')
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
                }
            ]
        },

        {
            path: '/about',
            name: 'About',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/About.vue')
        },

        {
            path: '/cleft',
            name: 'cleft',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/CLeft.vue')
        },

        {
            path: '/*',
            redirect: { name: 'primarypage' }
        }
    ]
})

export default router