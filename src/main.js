import Vue from 'vue'
import App from './App'
import Notify from './components/vant-webapp/notify/notify';
Vue.prototype.$notify = function (params) {
  return Notify(params)
}
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
