import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import CommentsView from "../views/CommentsView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/projects", component: ProjectsView },
  { path: "/comments", component: CommentsView },
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
