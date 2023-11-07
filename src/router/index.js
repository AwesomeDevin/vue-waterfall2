import HelloWorld from "@/components/HelloWorld.vue";
import Lazy from "@/components/evaluateList.vue";

let router 


if(process.env.TARGET === 'VUE3'){
  // import("vue-router").then((Router) => {
  //   router = Router.createRouter({
  //     history: Router.createWebHashHistory(),
  //     routes: [
  //       {
  //         path: "/",
  //         name: "HelloWorld",
  //         component: HelloWorld
  //       },
  //       {
  //         path: "/lazy",
  //         name: "lazy",
  //         component: Lazy
  //       }
  //     ]
  //   });
  // })
  
}else{
  // import("vue-router").then((Router) => {
  //   router = new Router({
  //     routes: [
  //       {
  //         path: "/",
  //         name: "HelloWorld",
  //         component: HelloWorld
  //       },
  //       {
  //         path: "/lazy",
  //         name: "lazy",
  //         component: Lazy
  //       }
  //     ]
  //   });
  // })
  
}

export default router