// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './vuex'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, form, next) =>{
  if(to.path === '/Login'){
    sessionStorage.removeItem('Login')
  }

  let user = JSON.parse(sessionStorage.getItem('user'));

  if(!user && to.path != '/Login'){
    next({path:'/Login'})
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
