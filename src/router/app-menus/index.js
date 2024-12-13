import appRoutes from '@/router/routes';

const mixinRoutes = [...appRoutes];

const appClientMenus = mixinRoutes.map(function(el) {
  const { name, path, meta, redirect, children } = el;
  return {
    name,
    path,
    meta,
    redirect,
    children,
  };
});

export default appClientMenus;