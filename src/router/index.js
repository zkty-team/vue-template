import Vue from "vue";
import VueRouter from "vue-router";
import XEngineRouter from "@zkty-team/x-engine-router";

Vue.use(VueRouter);

if (process.env.NODE_ENV == "development") {
  XEngineRouter(VueRouter, "omp");
} else {
  XEngineRouter(VueRouter, "microapp");
}

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "模板",
      bgColor: "#ddd",
      textIsCenter: true,
      isWhiteColor: true,
    },
    component: () => import("../views/Home/index.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
