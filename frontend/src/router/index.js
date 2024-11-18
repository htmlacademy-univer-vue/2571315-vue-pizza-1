import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: 'pizza_constructor',
          name: 'main',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/CartView.vue'),
        },
        {
          path: 'history',
          name: 'history',
          component: () => import('@/views/HistoryView.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/AuthView.vue'),
        }
      ]
    }
  ],
});

export default router;
