import {
  createWebHashHistory,
  createRouter
} from 'vue-router'

import Home from '../components/Home.vue'

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

export default router