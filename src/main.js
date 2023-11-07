// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Router from 'vue-router'

import waterfall from "vue-waterfall2";
// import waterfall from "../main";
// use(waterfall);

Vue.use(Router)
Vue.use(waterfall);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");