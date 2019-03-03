import Vue from 'vue';
import Vuex from 'vuex';
import { RandomInfoService } from "../services/RandomInfoService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalCount: 12,
    randomInfo: {}
  },
  mutations: {
    increment(state, { increment }) {
      state.globalCount += increment;
    },

    async postRandomInfo(state) {
      const r = new RandomInfoService();
      state.randomInfo = await r.postSomeDataAsync().json();
    }
  }
});


