import * as types from './mutation-types'

export const add = ({commit}, houseData) => {
  axios.post(`http://localhost:3000/`, houseData)
  .then((response) => {
    commit(types.ADD_HOUSE, response.data)
  })
  .catch((err) => {
    alert(err.message);
  })
}

export const getAll = ({commit}) => {
  axios.get(`http://localhost:3000/`)
  .then((response) => {
    commit(types.GET_HOUSES, response.data)
  })
  .catch((err) => {
    alert(err.message);
  })
}

export const update = ({commit}, houseData) => {
  axios.put(`http://localhost:3000/${houseData._id}`, houseData)
  .then((response) => {
    commit(types.UPDATE_HOUSE, response.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}

export const remove = ({commit}, id) => {
  axios.delete(`http://localhost:3000/${id}`)
  .then((response) => {
    commit(types.REMOVE_HOUSE, response.data)
  })
  .catch((err) => {
    alert(err.message)
  })
}
