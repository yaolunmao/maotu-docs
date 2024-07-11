import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/demo/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      name: 'edit',
      path: '/edit',
      component: () => import('../views/edit/index.vue')
    },
    {
      name: 'demo',
      path: '/demo',
      component: () => import('../views/demo/index.vue')
    },
    {
      name: 'preview',
      path: '/preview',
      component: () => import('../views/preview/index.vue')
    },
    {
      name: 'edit-load',
      path: '/edit-load',
      component: () => import('../views/demo/edit-load.vue')
    },
    {
      name: 'set-node-attr',
      path: '/set-node-attr',
      component: () => import('../views/demo/set-node-attr.vue')
    },
    {
      name: 'event-callback',
      path: '/event-callback',
      component: () => import('../views/demo/event-callback.vue')
    },
    {
      name: 'change-attr',
      path: '/change-attr',
      component: () => import('../views/demo/change-attr.vue')
    },
    {
      name: 'get-args',
      path: '/get-args',
      component: () => import('../views/demo/get-args.vue')
    }
  ]
})

export default router
