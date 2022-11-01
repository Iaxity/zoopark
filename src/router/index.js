import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/authorization",
  },
  {
    path: "/",
    name: "Authorization",
    component: () => import("@/views/AuthorizationView.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("@/views/RegistrationView.vue"),
  },
  {
    path: "/cabinet",
    name: "Cabinet",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "/cabinet/animalscard",
        name: "AnimalsCard",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/AnimalsCardView.vue"),
      },
      {
        path: "/cabinet/animals",
        name: "Animals",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/AnimalsView.vue"),
      },
      {
        path: "/cabinet/user-list",
        name: "UserList",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/UserListView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
