import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../Views/Home.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../Views/Features.vue"),
  },
  {
    path: "/learn",
    name: "learn",
    component: () => import("../Views/Learn.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../Views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
