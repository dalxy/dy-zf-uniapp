import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// Vue.prototype.$baseUrl = "http://152.136.150.189:3000"; //baseUrl
// Vue.prototype.$timer =
//   Date.now ||
//   function () {
//     //此时此刻的时间
//     return new Date().getTimer();
//   };
App.mpType = 'app'
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