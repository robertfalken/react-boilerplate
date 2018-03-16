import dummyDomain from './dummyDomain/reducers'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  dummyDomain,
  router: routerReducer,
})
