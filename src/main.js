import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;


import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import 'normalize.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import vuetify from './plugins/vuetify'
import vueVimeoPlayer from 'vue-vimeo-player'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

Vue.use(vueVimeoPlayer)
AOS.init();
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

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')