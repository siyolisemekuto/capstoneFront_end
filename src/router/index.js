import { createRouter, createWebHistory } from 'vue-router'
import ViewallView from '../views/ViewallView.vue'

const routes = [
  {
    path: '/',
    name: 'viewrecord',
    component: ViewallView
  },
  {
    path: '/log-mood',
    name: 'logtodayview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogtodayView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
