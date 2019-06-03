import Vue from 'vue'
import Router from 'vue-router'
import Players from './views/Players.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'players',
      component: Players
    }
  ]
})
