import { combineReducers } from 'redux'

function base(state = { title: 'Hello world!' }, { type, payload }) { // eslint-disable-line no-unused-vars
  switch (type) {
    default: return state
  }
}

export default combineReducers({ base })
