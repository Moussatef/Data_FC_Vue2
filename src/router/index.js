import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Formations from '../views/Formations.vue'
import Contact from '../views/Contact.vue'
import FormationEn from '../views/FormationEn.vue'
import ingenierie from '../views/IngenierieDeFormation.vue'
import Formation from '../views/Formation.vue'
import Externalisation from '../views/Externalisation.vue'
import Assistance from '../views/Assistance.vue'
import Linterim from '../views/Linterim.vue'
import Login from '../views/LoginUser.vue'
import Register from '../views/Register.vue'
import AdminDash from '../views/AdminDash.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/AdminDash',
    name: 'AdminDash',
    component: AdminDash
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/nos-formations',
    name: 'Formations',
    component: Formations
  },
  {
    path: '/formations-interentreprises',
    name: 'FormationEn',
    component: FormationEn
  },
  {
    path: '/contact-nous',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/ingenierie-de-formation',
    name: 'ingenierie',
    component: ingenierie
  },
  {
    path: '/formation',
    name: 'Formation',
    component: Formation
  },
  {
    path: '/l-externalisation',
    name: 'Externalisation',
    component: Externalisation
  },
  {
    path: '/assistance-conseil-en-recrutement',
    name: 'Assistance',
    component: Assistance
  },
  {
    path: '/l-interim-pour-l-entreprise',
    name: 'Linterim',
    component: Linterim
  },
  {
    path: '/sommes-nous',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
