import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
// import FirstShare from '../components/FirstShare.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        // 路由懒加载
        component: () => import( 'components/FirstShare.vue'),
        name: 'FirstShare',
      },
      {
        path: 'second_share', 
        name: 'second_share',
        component:() => import ('components/SecondShare.vue'),
      }
    ]
  }
]
// 隐藏重复路由跳转的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
