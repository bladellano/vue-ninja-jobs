import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import jobDetailsView from '../views/jobs/JobDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  }
  ,
  {
    path: '/jobs/:id',
    name: 'job-details',
    component: jobDetailsView,
    props: true
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  //catchall 404
  {
    path:'/:catchaAll(.*)',
    name:'not-found',
    component:NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
