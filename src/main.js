import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/button/style";

Vue.prototype.$store = store;

import Header from "@zkty-team/x-engine-ui";
import "@zkty-team/x-engine-ui/lib/Header.css";
Vue.use(Header);

import lifeCycle from "@zkty-team/x-engine-lifecycle";
Vue.use(lifeCycle);

import VConsole from "vconsole";
new VConsole();

// 有没写到的vant组件,请自行添加
import {
  Skeleton,
  List,
  Cell,
  CellGroup,
  Loading,
  PullRefresh,
  Form,
  Field,
  Button
} from "vant";

Vue.use(Cell);
Vue.use(Form);
Vue.use(List);
Vue.use(Field);
Vue.use(Button);
Vue.use(Loading);
Vue.use(Skeleton);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.config.productionTip = false;

import engine from "@zkty-team/x-engine-core";
Vue.prototype.$engine = engine;
// 原生手机状态栏高度
Vue.prototype.$statusHeight = engine.api(
  "com.zkty.jsi.device",
  "getStatusBarHeight"
);
// 原生手机导航条高度
Vue.prototype.$navigatorHeight = engine.api(
  "com.zkty.jsi.device",
  "getNavigationHeight"
);
// 原生手机屏幕整体高度
Vue.prototype.$screenHeight = engine.api(
  "com.zkty.jsi.device",
  "getScreenHeight"
);
// 原生手机底部tabbar高度
Vue.prototype.$tabbarHeight = engine.api(
  "com.zkty.jsi.device",
  "getTabbarHeight"
);
// 原生手机相关信息
// this.$tabbarHeight.type          // iOS / android
// this.$tabbarHeight.systemVersion // 14.4
// this.$tabbarHeight.language      // en
// this.$tabbarHeight.UUID          // UUID number
engine.api("com.zkty.jsi.device", "getDeviceInfo", {}, (val) => {
  Vue.prototype.$deviceInfo = val;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default Vue;
