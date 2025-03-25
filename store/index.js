import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      products: [],
      filteredProducts: []
    },
    mutations: {
      SET_PRODUCTS(state, products) {
        state.products = products
      },
      SET_FILTERED_PRODUCTS(state, products) {
        state.filteredProducts = products
      }
    },
    actions: {
      fetchProducts({ commit }) {
        // Fetch products from the data file or an API
        const products = require('~/data/products.json')
        commit('SET_PRODUCTS', products)
        commit('SET_FILTERED_PRODUCTS', products)
      },
      addProduct({ commit, state }, product) {
        const products = [...state.products, product]
        commit('SET_PRODUCTS', products)
        commit('SET_FILTERED_PRODUCTS', products)
      },
      editProduct({ commit, state }, editedProduct) {
        const products = state.products.map(product =>
          product.id === editedProduct.id ? editedProduct : product
        )
        commit('SET_PRODUCTS', products)
        commit('SET_FILTERED_PRODUCTS', products)
      },
      filterProducts({ commit, state }, { key, value }) {
        const filteredProducts = state.products.filter(product =>
          product[key].toString().toLowerCase().includes(value.toLowerCase())
        )
        commit('SET_FILTERED_PRODUCTS', filteredProducts)
      },
      sortProducts({ commit, state }, key) {
        const sortedProducts = [...state.filteredProducts].sort((a, b) => {
          if (a[key] < b[key]) return -1
          if (a[key] > b[key]) return 1
          return 0
        })
        commit('SET_FILTERED_PRODUCTS', sortedProducts)
      }
    },
    getters: {
      products: state => state.products,
      filteredProducts: state => state.filteredProducts
    }
  })
}
