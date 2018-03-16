import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import './style.sass'
import DummyDomain from '../dummyDomain/DummyDomain'
import DummyMore from '../dummyDomain/DummyMore'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={DummyDomain} />
        <Route path="/more" component={DummyMore} />
      </div>
    </BrowserRouter>
  )
}

export default hot(module)(App)
