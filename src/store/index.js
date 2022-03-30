import { createStore } from 'vuex';
import products from '../assets/data/products';

// modules
import auth from './auth';

export default createStore({
  state: {
    products,
    cartTotal: 0,
    user: false,
    cartProducts: [],
    productDetails: {},
    categories: [
      { name: 'rings', id: 'cat_001_ring' },
      { name: 'earrings', id: 'cat_002_earring' },
      { name: 'braclets', id: 'cat_003_braclet' },
      { name: 'charms', id: 'cat_004_charm' },
      { name: 'necklaces', id: 'cat_005_necklace' },
    ],
    categoryProducts: [], // array of objects
    category: '', // string
    searchResults: [], // array of objects
  },
  mutations: {
    addToCart(state, id) {
      const product = state.products.find((product) => product.id === id);
      if (product.amount) {
        state.cartTotal++;

        // if product is there - increase count, else simply push();
        const index = state.cartProducts.indexOf(product);
        if (index === -1) {
          product.count++; // new
          state.cartProducts.push(product);
        } else {
          state.cartProducts[index].count++;
        }
        // console.log('STATE cart products', state.cartProducts);

        product.amount--;
        if (!product.amount) {
          product.available = false;
        }
      }
    },
    SET_PRODUCT_DETAILS(state, productDetails) {
      state.productDetails = productDetails;
    },
    SET_CATEGORY_PRODUCTS(state, categoryProducts) {
      state.categoryProducts = categoryProducts;
    },
    SET_CATEGORY(state, category) {
      state.category = category;
    },
    SET_SEARCH_RESULTS(state, searchResults) {
      state.searchResults = searchResults;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  getters: {
    cartTotal(state) {
      return state.cartTotal;
    },
    products(state) {
      return state.products;
    },
    user(state) {
      return state.user;
    },
    cartProducts(state) {
      return state.cartProducts;
    },
    productDetails(state) {
      return state.productDetails;
    },
    categories(state) {
      return state.categories;
    },
    categoryProducts(state) {
      return state.categoryProducts;
    },
    category(state) {
      return state.category;
    },
    searchResults(state) {
      return state.searchResults;
    },
  },
  actions: {
    getProductDetails({ commit, state }, id) {
      // find here again by id;
      const productDetails = state.products.find(
        (product) => product.id === id
      );
      commit('SET_PRODUCT_DETAILS', productDetails); // mutation
    },
    getCategoryProducts({ commit, state }, category_id) {
      const categoryProducts = state.products.filter(
        (product) => product.category === category_id
      );
      // console.log('id', category_id, 'found products', categoryProducts);
      commit('SET_CATEGORY_PRODUCTS', categoryProducts);
    },
    getCategory({ commit, state }, category_id) {
      // search all categories
      const category = state.categories.find((c) => c.id === category_id);
      if (category) {
        // console.log('category', category.name);
        commit('SET_CATEGORY', category.name);
      } else {
        // console.log('category not found', typeof category);
      }
    },
    getSearchResults({ commit, state }, query) {
      if (query) {
        const searchResults = state.products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        // console.log('search results', searchResults);
        commit('SET_SEARCH_RESULTS', searchResults);
      }
    },
  },
  modules: {
    auth,
  },
});
