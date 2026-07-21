import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/pages/AboutPage.vue'
import ContactPage from '../components/pages/ContactPage.vue'
import ProjectPage from '../components/pages/ProjectPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'about' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})

export default router
