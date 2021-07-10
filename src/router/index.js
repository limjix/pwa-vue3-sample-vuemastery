import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Instructions.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
