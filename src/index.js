import configureStore from 'app/configureStore'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'

function RootApplication() {
  return (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  )
}

render(
  <RootApplication />,
  document.getElementById('app'),
)
