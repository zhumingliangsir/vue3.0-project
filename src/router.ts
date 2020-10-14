/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import ColumnDetail from "./pages/ColumnDetail.vue";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail
    }
  ]
});

export default router;