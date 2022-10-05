import { createRouter, createWebHashHistory } from "vue-router";
import Page from "../views/Page.vue";

const routes = [
  {
    path: "/",
    name: "Page",
    component: Page,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
