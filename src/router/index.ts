import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoList from "../views/TodoList.vue";
import Todo from "@/views/Todo.vue";
import Top from "@/views/Top.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/todos",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/todo/:id",
    name: "Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
