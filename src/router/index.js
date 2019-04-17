import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Home from '@/components/common/Home'
import Welcome from '@/components/pages/Welcome'
import BaseTable from '@/components/pages/BaseTable'
import BaseForm from '@/components/pages/BaseForm'
import BaseCharts from '@/components/pages/BaseCharts'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/welcome',
    component: Home,
    children: [{
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/basetable',
      name: 'BaseTable',
      component: BaseTable
    }, {
      path: '/baseform',
      name: 'BaseForm',
      component: BaseForm
    }, {
      path: '/basecharts',
      name: 'BaseCharts',
      component: BaseCharts
    }]
  }]
})
