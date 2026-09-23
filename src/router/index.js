import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/pages/AboutPage.vue'
import ContactPage from '../components/pages/ContactPage.vue'
import EducationPage from '../components/pages/EducationPage.vue'
import ProjectPage from '../components/pages/ProjectPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: { name: 'about' }
    },
    {
      path: '/about',
      name: 'about',
      meta: { label: 'About' },
      component: AboutPage
    },
    {
      path: '/project',
      name: 'project',
      meta: { label: 'Projects' },
      component: ProjectPage
    },
    {
      path: '/education',
      name: 'education',
      meta: { label: 'Education' },
      component: EducationPage
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { label: 'Contact' },
      component: ContactPage
    }
  ]
})

export default router
