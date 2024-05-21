import { createRouter, createWebHistory } from 'vue-router'
import OptionsApi from '@/views/OptionsApi.vue'
import CompositionApi from '@/views/CompositionApi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/options-api',
      name: 'options',
      component: OptionsApi
    },
    {
      path: '/composition-api',
      name: 'composition',
      component: CompositionApi
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Blog.vue')
    }
  ]
})

export default router
