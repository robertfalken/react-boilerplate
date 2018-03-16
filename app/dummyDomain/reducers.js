import { combineReducers } from 'redux'

function base(state = { title: 'Hello world!' }, { type, payload }) {
  switch(type) {
    default: return state
  }
}

export default combineReducers({ base })
