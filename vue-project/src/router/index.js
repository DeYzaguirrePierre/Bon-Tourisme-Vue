import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeCultExtand from '../views/HomeCultExtand.vue'
import HomeRestoExtand from '../views/HomeRestoExtand.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cultExtand',
      name: 'HomeCultExtand',
      component: HomeCultExtand
    },
    {
      path: '/restoExtand',
      name: 'HomeRestoExtand',
      component: HomeRestoExtand
    }
  ]
})

export default router
