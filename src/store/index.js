import Vue from 'vue'
import Vuex from 'vuex'
import formation from './modules/formation';
import client from './modules/client';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    formation,
    client
  }
})
