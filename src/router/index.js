import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/", //path:網址路徑
    name: "home",
    component: HomeView,
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/about", //path:網址路徑
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/product", //path:網址路徑
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/member", //path:網址路徑
    name: "member",
    component: () => import("../views/Member.vue"),
  },
  {
    path: "/qa", //path:網址路徑
    name: "qa", //name:網址名稱
    component: () => import("../views/Qa.vue"), // component:要連結哪一個網頁
    meta: {
      layout: "Layout", //layout:可以隨時切換網頁外觀
    },
  },
  {
    path: "/prize", //path:網址路徑
    name: "prize", //name:網址名稱
    component: () => import("../views/Prize.vue"),
    // component:要連結哪一個網頁
    meta: {
      layout: "Layout", //layout:可以隨時切換網頁外觀
    },
  },
  {
    path: "/product", //path:網址路徑
    name: "product", //name:網址名稱
    component: () => import("../views/Product.vue"),
    // component:要連結哪一個網頁
    meta: {
      layout: "Layout", //layout:可以隨時切換網頁外觀
    },
  },
  {
    path: "/activity", //path:網址路徑
    name: "activity", //name:網址名稱
    component: () => import("../views/Activity2.vue"),
    // component:要連結哪一個網頁
    meta: {
      layout: "Layout", //layout:可以隨時切換網頁外觀
    },
  },
  {
    path: "/notice", //path:網址路徑
    name: "notice", //name:網址名稱
    component: () => import("../views/Notice.vue"),
    // component:要連結哪一個網頁
    meta: {
      layout: "Layout", //layout:可以隨時切換網頁外觀
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
