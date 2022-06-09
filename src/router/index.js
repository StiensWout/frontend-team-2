import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secure',
    name: 'Secure',
    component: function () {
      return import(/* webpackChunkName: "secure" */ '../views/Secure.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "Login" */ '../views/Login.vue')
    }
  },
  {
    path: '/onderhoudPage',
    name: 'OnderhoudPage',
    component: function () {
      return import(/* webpackChunkName: "Onderhoud" */ '../views/OnderhoudPage.vue')
    }
  },
  {
    path: '/vrachtwagenPage',
    name: 'VrachtwagenPage',
    component: function () {
      return import(/* webpackChunkName: "Vrachtwagen" */ '../views/VrachtwagenPage.vue')
    }
  },
  {
    path: '/garagistPage',
    name: 'GaragistPage',
    component: function () {
      return import(/* webpackChunkName: "Garagist" */ '../views/GaragistPage.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
