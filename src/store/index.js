import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },
  actions: {
    GET_USERS_FROM_API({ commit }) {
      return axios("https://abc4-188-162-48-72.eu.ngrok.io/user/read", {
        method: "GET",
      }).then((response) => {
        commit("SET_USERS_TO_VUEX", response.data);
      });
    },
  },
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users;
    },
  },
  getters: {
    USERS(state) {
      return state.users;
    },
  },
  modules: {},
});
