import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'


Vue.use(Vuex)


const state = {
  houses: []
}

const getters = {
  house: state => state.houses
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
