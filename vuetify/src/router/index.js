import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Crear from '../components/Crear.vue'
import Listar from '../components/Listar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Crear',
    name: 'Crear',
    component: Crear
  },

  {
    path: '/Listar',
    name: 'Listar',
    component: Listar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
