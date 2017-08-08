// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import axios from 'axios'
import jsonp from 'jsonp'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

import '../static/css/reset.css'
import '../static/css/font-awesome.min.css'

Vue.prototype.axios = axios;
Vue.prototype.jsonp = jsonp;
Vue.config.productionTip = false;

import { setGlobalfontSize } from '@/config/mUtils'
setGlobalfontSize(18.75);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})