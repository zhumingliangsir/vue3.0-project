import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import ColumnDetail from "./pages/ColumnDetail.vue";
import CreatePost from "./pages/CreatePost.vue";
import store from "./store";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        redirectAlreadyLogin: true
      }
    },
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail
    },
    {
      path: "/create",
      name: "create",
      component: CreatePost,
      meta: {
        requiredLogin: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to.meta);
  /* 如果目标路由不是 login ，并且当前是未登录状态 则重定向登录页面*/
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: "login" });
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
