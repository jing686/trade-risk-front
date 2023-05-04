import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Table from '@/components/Table'
import Risk from '@/components/Risk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/table',
          name: 'Table',
          component: Table
        },
        {
          path: '/Risk',
          name: 'Risk',
          component: Risk
        }
      ]
    }
  ]
})
