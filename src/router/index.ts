/*
 * @Author: Zhao.Li.Nai
 * @Date: 2021-05-30 16:00:53
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-06-23 16:59:07
 */
/*
 * @Author: Zhao.Li.Nai
 * @Date: 2021-05-30 16:00:53
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-05-30 16:24:06
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from "../layout/Index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    children: [
      {
        path: "foo",
        component: import("../view/Foo.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
