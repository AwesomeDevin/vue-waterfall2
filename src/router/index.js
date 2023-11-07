import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Lazy from "@/components/evaluateList.vue";


export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/lazy",
      name: "lazy",
      component: Lazy
    }
  ]
});
