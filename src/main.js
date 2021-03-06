import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局u-ui
import uUi from 'u-ui'
Vue.use(uUi)

const app = new Vue({
  ...App
})
app.$mount()
