import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ParksPage from "../pages/ParksPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          name: "parks",
          path: "parks",
          component: ParksPage,
        },
        {
          name: "stores",
          path: "stores",
          component: () => import("../pages/StoresPage.vue"),
        },
        {
          name: "about",
          path: "about",
          component: () => import("../pages/AboutPage.vue"),
        },
        {
          path: "",
          redirect: { name: "parks" },
        },
      ],
    },
    {
      path: "/",
      redirect: { name: "parks" },
    },
    {
      path: "/:catchAll(.*)",
      redirect: { name: "parks" },
    },
  ],
});

export default router;
