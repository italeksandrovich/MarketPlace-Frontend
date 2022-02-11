import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarStatus: false,
  },
  mutations: {
    SET_SIDEBAR_STATUS(state, payload) {
      state.sidebarStatus = payload;
    },
  },
  actions: {},
  modules: {},
});
