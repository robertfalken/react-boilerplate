import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dummyDomain from './dummyDomain/reducers'

export default combineReducers({
  dummyDomain,
  router: routerReducer,
})
