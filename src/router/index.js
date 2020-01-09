import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/Weight',
    name: 'Weight',
    component: function () {
      return import(/* webpackChunkName: "activeWeight" */ '../views/ActiveWeight.vue')
    }
  },
  {
    path: '/Workout',
    name: 'Workout',
    component: function () {
      return import(/* webpackChunkName: "activeWorkout" */ '../views/ActiveWorkout.vue')
    }
  },
  {
    path: '/Food',
    name: 'Food',
    component: function () {
      return import(/* webpackChunkName: "activeFood" */ '../views/ActiveFood.vue')
    }
  },
  {
    path: '/Water',
    name: 'Water',
    component: function () {
      return import(/* webpackChunkName: "activeWater" */ '../views/ActiveWater.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
