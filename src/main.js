import Vue from 'vue'
import App from './App'
import router from './router'
import animated from 'animate.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(animated)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
