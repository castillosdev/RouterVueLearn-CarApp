//Define Routing Rules
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(),
routes: [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/cars/:id",
        name: "car",
        component: CarView,
        children:[
            {
                path: "contact",
                name: "contact",
                component: ContactView,
            }
        ]
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFoundView
    },
    {
        path: "/home",
        redirect: "/",
    }
]
});

export default router;
