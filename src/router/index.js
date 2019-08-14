import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/view/home/index'),
      redirect: '/goods',
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import('@/view/user/index')
        },
        {
          path: 'goods',
          name: 'goods',
          component: () => import('@/view/goods/goods')
        }
      ]
    }
  ]
})
