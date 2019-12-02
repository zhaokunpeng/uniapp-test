import Vue from 'vue'
import App from './App'
import http from './utils/https.js'
import status from './components/status.vue'


Vue.config.productionTip = false
Vue.prototype.request = http
Vue.component('page-status',status)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
