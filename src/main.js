import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import 'normalize.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import vuetify from './plugins/vuetify'

//
import vueVimeoPlayer from 'vue-vimeo-player'
Vue.use(vueVimeoPlayer)
// ..
AOS.init();

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



// import Embed from 'v-video-embed'

// // global register
// Vue.use(Embed);

import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
Vue.use(VuePlyr)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
