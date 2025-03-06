import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import CommentsView from "../views/CommentsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/projects", component: ProjectsView },
  { path: "/about", component: AboutView },
  { path: "/contact", component: ContactView },
  { path: "/comments", component: CommentsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
