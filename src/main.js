import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '../router'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



