// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import waterfall from "vue-waterfall2";
// import waterfall from "../main";
// use(waterfall);

const app = createApp(App)
app.use(router)
app.use(waterfall)

app.mount('#app')
