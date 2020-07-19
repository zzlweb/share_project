import Vue from 'vue'
import App from './App.vue'
import { Button, message, Layout, Menu, Icon } from 'ant-design-vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'
// 引入全局css样式
import '@/styles/base.less'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(message)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
