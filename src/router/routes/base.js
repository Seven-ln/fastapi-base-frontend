
import { REDIRECT_ROUTE_NAME } from '@/router/constants';

const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue');
//const NOTFOUND_LAYOUT = () => import('@/views/not-found/index.vue');

const REDIRECT_MAIN = {
  path: '/redirect',
  name: 'redirectWrapper',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    hideInMenu: true,
  },
  children: [
    {
      path: '/redirect/:path',
      name: REDIRECT_ROUTE_NAME,
      component: () => import('@/views/redirect/index.vue'),
      meta: {
        requiresAuth: true,
        hideInMenu: true,
      },
    },
  ],
};
/*
const NOT_FOUND_ROUTE = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: NOTFOUND_LAYOUT,
};
*/

/*
const OAUTH2_CALLBACK = {
  path: '/oauth2/callback',
  name: 'oauth2CallBack',
  component: () => import('@/views/login/components/oauth_callback.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
    roles: ['oauth2'],
  },
};
*/

export { DEFAULT_LAYOUT, REDIRECT_MAIN };
