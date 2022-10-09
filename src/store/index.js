import axios from "axios";
import { coolGray } from "tailwindcss/colors";
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
        commit("FETCH_CATEGORIES", response.data.categories.data);
       console.log(response,"categories")
      } catch (error) {
        // console.log(error);
      }
    },
  },
  modules: {},
});
