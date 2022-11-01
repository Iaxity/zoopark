import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },
  actions: {
    GET_USERS_FROM_API({ commit }) {
      return axios("https://72f2-188-162-201-39.eu.ngrok.io/user/read", {
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
