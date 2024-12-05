import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/experience',
      name: 'experience.view',
      component: ()=>import('@/views/ExperienceView.vue'),
      props:route=>({...route.params, id:parseInt(route.params.id)})
    },
  ],
})

export default router
