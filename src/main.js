import Vue from 'vue'
import App from './App.vue'
import waterfall from 'vue-waterfall2'
// import waterfall from '../lib'


Vue.use(waterfall)

new Vue({
  el: '#app',
  render: h => h(App)
})
