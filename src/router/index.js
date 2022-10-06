import { createRouter, createWebHashHistory } from "vue-router";
import AnimalsCardView from "../views/AnimalsCardView.vue";
import AnimalsView from "../views/AnimalsView.vue";
import UserListView from "../views/UserListView.vue";

const routes = [
  {
    path: "/",
    name: "AnimalsCardView",
    component: AnimalsCardView,
  },
  {
    path: "/Animals",
    name: "AnimalsView",
    component: AnimalsView,
  },
  {
    path: "/UserList",
    name: "UserListView",
    component: UserListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
