import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/curso/:id',
    name: 'Curso',
    component: () => import('../views/Curso.vue')
  },
  {
    path: '/loggin',
    name: 'Loggin',
    component: () => import('../views/Loggin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/miscompras',
    name: 'MisCompras',
    component: () => import('../views/MisCompras.vue')
  },
  {
    path: '/navegador',
    name: 'navegador',
    component: () => import('../views/navegador.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
