<<<<<<< HEAD
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import PartnerPage from "@/views/PartnerPage";
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
>>>>>>> 07523970dec17ac8a731c2b5f4bf45993550ea00

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Home')
  },
  {
<<<<<<< HEAD
    path: "/partner-page",
    name: "PartnerPage",
    meta: {
      layout: "main",
    },
    component: PartnerPage,
  },
];
=======
    path: '/partners-list',
    name: 'PartnersList',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/PartnersList')
  }
]
>>>>>>> 07523970dec17ac8a731c2b5f4bf45993550ea00

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
