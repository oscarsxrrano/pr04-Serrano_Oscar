import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue' 
import ExperienceView from '@/views/ExperienceView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/country/:id',
      name: 'country',
      component: DestinationView,
      children: [
        {
          path: 'experience/:exp',
          name: 'experience',
          component: ExperienceView,
        }
        

      ]
    },
  ],
})

export default router
