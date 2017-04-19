import * as types from './mutation-types'

export const mutations = {
  [types.ADD_HOUSE] (state, payload) {
    state.houses.push(payload)
  },

  [types.GET_HOUSES] (state, payload) {
    state.houses = payload
  },

  [types.REMOVE_HOUSE] (state, payload) {
    state.houses = state.houses.filter(house =>
      house._id != payload._id
    )
  },

  [types.UPDATE_HOUSE] (state, payload) {
    state.houses = state.houses.map(house =>
      house._id === payload._id ? payload : house
    )
  }
}
