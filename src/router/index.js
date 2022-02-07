import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import PartnerPage from "@/views/PartnerPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "main",
    },
    component: Home,
  },
  {
    path: "/partner-page",
    name: "PartnerPage",
    meta: {
      layout: "main",
    },
    component: PartnerPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
