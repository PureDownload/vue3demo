

//* 存放router页面
const routes: Array<any> = [
  {
    path: "/ref",
    name: "index",
    component: () => import('../view/Ref.vue'),
    hidden: true,
    meta: {
      func_code: "det",
      keepAlive: false,
    },
  },
];

export default routes;
