//import { AppRouteRecordRaw } from '@/router/routes/types';
import { DEFAULT_LAYOUT } from '@/router/routes/base.js';


const SYSTEM = {
    path: '/admin',
    name: 'admin',
    title: '基础数据',
    component: DEFAULT_LAYOUT,
    meta: {
      requiresAuth: true,
      order: 1,
    },
    children: [
      {
        path: 'despatchdata',
        name: 'Despatchdata',
        title:'发运数据',
        component: () => import('@/views/admin/despatchdata/index.vue'),
        meta: {
          requiresAuth: true,
          roles: ['*'],
        },
      },
      {
        path: 'faultdata',
        name: 'Faultdatar',
        title:'故障数据',
        component: () => import('@/views/admin/faultdata/index.vue'),
        meta: {
          requiresAuth: true,
          roles: ['*'],
        },
      },
    ],
  };
  
export default SYSTEM;
  
