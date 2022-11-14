import App from './App'
import store from './store'
import PubFuc from './common/js/utils.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'
Vue.prototype.$PubFuc = PubFuc
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif