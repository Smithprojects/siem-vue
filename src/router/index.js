import Vue from 'vue'
import VueRouter from 'vue-router'
// import Events from "./Events";
// import Statistic from "./Statistic";
// import EventFilters from "./components/EventFilters";
// import FilterOptions from "./components/FilterOptions";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('../views/Events.vue')
  },
  {
    path: '/events',
    name: 'events',
    meta: {layout: 'main'},
    component: () => import('../views/Events.vue')
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   meta: {layout: 'empty'},
  //   component: () => import('../views/Register.vue')
  // },
  // {
  //   path: '/categories',
  //   name: 'categories',
  //   meta: {layout: 'main'},
  //   component: () => import('../views/Categories.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
