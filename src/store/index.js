import axios from "axios";
import { coolGray } from "tailwindcss/colors";
import { createStore } from "vuex";

export default createStore({
  state: {
    categories: [],
    banners:[],
  },
  getters: {
    fetchCategories(state) {
      return state.categories;
    },
    fetchBanners(state) {
      return state.banners;
    },
  },
  mutations: {
    FETCH_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    FETCH_BANNERS(state, payload) {
      state.banners = payload;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get("v1/product-category");
        commit("FETCH_CATEGORIES", response.data.categories.data);
      
      } catch (error) {
       
      }
    },
    async fetchBanners({ commit }) {
      try {
        const response = await axios.get("v1/banner");
        commit("FETCH_BANNERS", response.data.banners.data);
      // console.log(response)
      } catch (error) {
       
      }
    },
  },
  modules: {},
});
