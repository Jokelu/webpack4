import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './app.vue'
import router from './router/index'
import store from './store/index'
import plugin from './view/components'

Vue.use(ElementUI)
Vue.use(plugin)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
