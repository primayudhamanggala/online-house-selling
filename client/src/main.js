import Vue from 'vue'

import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(ElementUI)
Vue.use(VueGoogleMaps, {
  load: {
    key : 'AIzaSyDsnj0FW8MZ6T1Vde9F_r-tHvD1hgTpgmg',
    v   : '3.exp'
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
