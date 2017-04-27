import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Login from '@/components/login/Login'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      component: Login,
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      leaf: false,//只有一个节点(true)
      children: [
        { path: '/Page1', component: Page1, name: '页面一', hidden: false }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'el-icon-message',
      leaf: false,
      children: [
        { path: '/Page2', component: Page2, name: '计算', hidden: false }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'el-icon-message',
      leaf: true,
      children: [
        { path: '/Page3', component: Page3, name: '导航三', hidden: false }
      ]
    }
  ]
})
