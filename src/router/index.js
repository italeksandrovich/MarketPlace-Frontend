import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import PartnerPage from "@/views/PartnerPage";
import FavsPage from "@/views/FavsPage";


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
    path: "/partners-page",
    name: "PartnerPage",
    meta: {
      layout: "empty",
    },
    component: PartnerPage,
  },
  {
    path: "/partners-list",
    name: "PartnersList",
    meta: {
      layout: "main",
    },
    component: () => import("@/views/PartnersList"),
  },
  {
    path: "/favorities-page",
    name: "FavsPage",
    meta: {
      layout: "empty",
    },
    component: FavsPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
