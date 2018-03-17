import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import './style.sass'
import DemoDomain from '../demoDomain/DemoDomain'
import ReduxTest from '../demoDomain/ReduxTest'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={DemoDomain} />
        <Route path="/redux" component={ReduxTest} />
      </div>
    </BrowserRouter>
  )
}

export default hot(module)(App)
