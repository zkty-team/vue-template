import Vue from "vue";
import VueRouter from "@zkty-team/vue-router";
Vue.use(VueRouter);

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
  {
    path: "/testone",
    name: "testone",
    meta: {
      title: "跳转演示",
      textIsCenter: true,
      customBgcImg: require("@/static/image/navBJ.png"),
    },
    component: () => import("../views/testRouter/testone.vue"),
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
