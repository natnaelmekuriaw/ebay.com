import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/ebay-views/Home.vue"),
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/ebay-views/Signin.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUn",
    component: () => import("../views/ebay-views/Signup.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "pageNotFound",
    component: () => import("../views/ebay-views/PageNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
