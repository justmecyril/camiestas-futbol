import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    categories: [],
  },
  getters: {
    fetchCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    FETCH_CATEGORIES(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get("v1/product-category");
        commit("FETCH_CATEGORIES", response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
