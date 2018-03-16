import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle, max-len
const history = createHistory()
const middleware = routerMiddleware(history)

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(middleware)),
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers') // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
