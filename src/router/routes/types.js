import { defineComponent } from 'vue';
import { NavigationGuard, RouteMeta } from 'vue-router';

export const Component = (T = any) => {
  return (
    defineComponent() ||
    (() => Promise.resolve(import('*.vue'))) ||
    (() => Promise.resolve(T))
  );
};

export const AppRouteRecordRaw = {
  path: String,
  name: String | Symbol,
  meta: RouteMeta,
  redirect: String,
  component: Component | String,
  children: Array,
  alias: String | Array,
  props: Object,
  beforeEnter: NavigationGuard | Array,
  fullPath: String
};