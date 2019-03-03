import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalCount: 12
  },
  mutations: {
    increment(state, { increment }) {
      state.globalCount += increment;
    }
  }
});


