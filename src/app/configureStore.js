import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from 'app/sagas'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle, max-len
const sagaMiddleWare = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleWare)),
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers') // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleWare.run(sagas)

  return store
}
