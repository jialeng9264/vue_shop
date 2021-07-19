import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'

import TreeTable from 'vue-table-with-tree-grid'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
// 配置请求的路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})
Vue.prototype.$http = axios
Vue.component('tree-table',TreeTable)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
