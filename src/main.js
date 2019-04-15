import Vue from 'vue'
// var Vue = require('vue');
import App from './App.vue'
import waterfall from 'vue-waterfall2'
// import waterfall from '../lib'

Vue.use(waterfall)

console.log(Vue.prototype)

new Vue({
  el: '#app',
  render: h => h(App)
})
