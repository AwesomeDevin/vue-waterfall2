// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as Vue from "vue";
import App from "./App.vue";
import router from "./router";

// import waterfall from "vue-waterfall2";
import waterfall3 from "../vue3";
import waterfall2 from "../vue2";

// use(waterfall);

if(process.env.TARGET === 'VUE3'){
  const app = Vue.createApp(App)
  app.use(router)
  app.use(waterfall3)

  app.mount('#app')
}else{
  // import("vue-router").then((Router) => {
  //   Vue.default.use(waterfall2);
  //   Vue.default.use(Router);
  //   /* eslint-disable no-new */
  //   new Vue.default({
  //     router,
  //     render: (h) => h(App),
  //   }).$mount('#app');
  // })
  
}


