

//* 存放router页面
const routes: Array<any> = [
  {
    path: "/",
    name: "index",
    component: () => import('@/view/Index.vue'),
    hidden: true,
    meta: {
      func_code: "det",
      keepAlive: false,
    },
  },
  {
    path: "/ref",
    name: "ref",
    component: () => import('@/view/Ref.vue'),
    hidden: true,
    meta: {
      func_code: "det",
      keepAlive: false,
    },
  },
  {
    path: "/tsx",
    name: "tsx",
    component: () => import('@/view/Tsx.tsx'),
    hidden: true,
    meta: {
      func_code: "det",
      keepAlive: false,
    },
  },
];

export default routes;
