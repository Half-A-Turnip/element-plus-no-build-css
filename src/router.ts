import { createRouter, createWebHistory } from 'vue-router'

let routes = [{
  path: '/page1',
  component: () => import('./page1.vue'),
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
