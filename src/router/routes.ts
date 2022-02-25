

//* 存放router页面
const routes: Array<any> = [
  {
    path: "/",
    name: "index",
    component: () => import('@/view/Index.vue'),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import('@/layout/admin/index.vue'),
    redirect: '/admin/index',
    children: [
      {
        path: "index",
        name: "AdminIndex",
        component: () => import('@/view/admin/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: "index1",
        name: "AdminIndex1",
        hidden: false,
        component: () => import('@/view/admin/index.vue'),
        meta: { title: '测试' }
      },
    ]
  },
  {
    path: "/ref",
    name: "ref",
    component: () => import('@/view/Ref.vue'),
  },
  {
    path: "/tsx",
    name: "tsx",
    component: () => import('@/view/Tsx.tsx'),
  },
];

export default routes;
