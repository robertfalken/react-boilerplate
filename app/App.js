import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import DummyDomain from './dummyDomain/DummyDomain'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers'

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

const history = createHistory()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore(initialState) {
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(middleware)
    ),
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}



function App() {
  return (
    <Provider store={configureStore()}>
      <DummyDomain />
    </Provider>
  )
}

export default hot(module)(App)
