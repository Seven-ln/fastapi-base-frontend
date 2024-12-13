import { createRouter, createWebHistory } from 'vue-router'

import appRoutes from '@/router/routes';
import { REDIRECT_MAIN } from './routes/base';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',//重定向：将指将根路径（/）重定向到根路径下的login路径下（/login）
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),//需要映射的组件
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,//应用程序路由，使用 ...appRoutes 语法扩展导入的路由配置。
    REDIRECT_MAIN,//重定向路由 REDIRECT_MAIN

  ],
  scrollBehavior() {
    return { top: 0 };//定义滚动行为，返回 { top: 0 }，表示滚动到页面顶部。
  },
})

export default router
