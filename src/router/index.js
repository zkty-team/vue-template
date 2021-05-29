/*
 * @Author: sheng.wang
 * @Date: 2021-05-22 11:46:54
 * @LastEditTime: 2021-05-29 18:12:35
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /vue-template/src/router/index.js
 */
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
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
