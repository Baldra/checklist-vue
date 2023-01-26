import { createRouter, createWebHashHistory } from 'vue-router'
import TodoListView from '../views/TodoListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoListView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
