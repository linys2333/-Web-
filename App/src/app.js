// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import FastClick from 'fastclick'
import router from './router/'
import store from './store/'
import App from 'COMPONENT/App'
import './directive/'
import './filter/'
import 'SERVICE/http/init'

Vue.use(VueRouter)

Vue.prototype.$http = axios
Vue.config.productionTip = false

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})