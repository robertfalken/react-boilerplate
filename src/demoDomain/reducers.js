import { combineReducers } from 'redux'

const initialState = {
  title: 'Test Redux/Sagas',
  loading: false,
}

function base(state = initialState, { type, payload }) {
  switch (type) {
    case 'ASYNC_REQUEST': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'ASYNC_SUCCESS': {
      return {
        ...state,
        title: payload.title,
        loading: false,
      }
    }
    default: return state
  }
}

export default combineReducers({ base })
