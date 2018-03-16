import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import dummyDomain from './dummyDomain/reducers'
import DummyDomain from './dummyDomain/DummyDomain'

import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
} from 'redux'

const store = createStore(
  combineReducers({ dummyDomain }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <DummyDomain />
    </Provider>
  )
}

export default hot(module)(App)
