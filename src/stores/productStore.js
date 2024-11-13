import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedGroupName: '',
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),

  getters: {
    filteredCategories(state) {
      if (state.selectedGroupName === '') {
        return state.categories;
      }
      return state.categories.filter(category => category.group === state.selectedGroupName);
    },
    getCategoriesByGroup: (state) => (groupName) => {
      return state.categories.filter(category => category.group === groupName);
    },
    getProductsByGroup: (state) => (groupName) => {
      return state.products.filter(product => product.group === groupName);
    },
    getPopularProducts: (state) => {
      return state.products.filter(product => product.countSold > 10);
    },
  },

  actions: {
    setSelectedGroup(group) {
      this.selectedGroupName = group;
    },

    async fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3000/api/categories");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async fetchPromotions() {
      try {
        const response = await axios.get("http://localhost:3000/api/promotions");
        this.promotions = response.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },

    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async fetchGroups() {
      try {
        const response = await axios.get("http://localhost:3000/api/groups");
        this.groups = response.data;
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    },
  },
});