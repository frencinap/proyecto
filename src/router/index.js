import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    alias: ["/inicio", "/home"],
    component: Home,
  },
  {
    path: "/opiniones",
    name: "Opiniones",
    alias: ["/opinion"],
    component: () => import("../views/Opiniones.vue"),
  },
  {
    path: "/administracion",
    name: "Administracion",
    alias: ["/admin"],
    component: () => import("../views/Administracion.vue"),
  },
  {
    path: "/editar/:id",
    name: "Editar",
    props: true,
    component: () => import("../views/Editar.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
