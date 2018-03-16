import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import './style.sass'
import DemoDomain from '../demoDomain/DemoDomain'
import DummyMore from '../demoDomain/DummyMore'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={DemoDomain} />
        <Route path="/more" component={DummyMore} />
      </div>
    </BrowserRouter>
  )
}

export default hot(module)(App)
