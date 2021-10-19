import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import 'normalize.css'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax, {
    theme: {
        colors: {
            primary: '#5b3cc4',
            success: 'rgb(23, 201, 100)',
            danger: 'rgb(242, 19, 93)',
            warning: 'rgb(255, 130, 0)',
            dark: 'rgb(36, 33, 69)'
        }
    }
})

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();




Vue.config.productionTip = false

new Vue({
    
    router,
    store,
    render: h => h(App)
}).$mount('#app')
