import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import DummyDomain from './dummyDomain/DummyDomain'
import configureStore from './configureStore'

function App() {
  return (
    <Provider store={configureStore()}>
      <DummyDomain />
    </Provider>
  )
}

export default hot(module)(App)
