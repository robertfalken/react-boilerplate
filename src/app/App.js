import React from 'react'
import { hot } from 'react-hot-loader'
import './style.sass'
import DummyDomain from '../dummyDomain/DummyDomain'

function App() {
  return (
    <DummyDomain />
  )
}

export default hot(module)(App)
