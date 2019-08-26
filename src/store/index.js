import Vue from 'vue'
import Vuex from 'vuex'
import authenticationStore from './authenticationStore'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const getters = {}

const state = {}

const actions = {}

export const mutations = {}

const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    authentication: authenticationStore,
  },
  strict: debug,
})

export default store
