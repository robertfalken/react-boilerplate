import reducers from './reducers'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createHistory()
const middleware = routerMiddleware(history)

export default function configureStore() {
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
