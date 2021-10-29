import Vue from 'vue'
import Vuex from 'vuex'
import formation from './modules/formation';
import client from './modules/client';
import message from './modules/message';

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
    client,
    message,
  }
})
