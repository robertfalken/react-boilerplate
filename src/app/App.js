import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScene from 'scenes/HomeScene'
import './style.sass'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomeScene} />
      </div>
    </BrowserRouter>
  )
}

export default hot(module)(App)
