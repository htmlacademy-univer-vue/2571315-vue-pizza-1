import { createRouter, createWebHistory } from "vue-router";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/popup",
      name: "popup",
      component: () => import("@/views/PopupView.vue"),
    },
    {
      path: "/",
      name: "main",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        layout: HeaderLayout,
      },
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartView.vue"),
      meta: {
        layout: HeaderLayout,
      },
    },
    {
      path: "/history",
      name: "history",
      component: () => import("@/views/OrdersView.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
  ],
});
export default router;
