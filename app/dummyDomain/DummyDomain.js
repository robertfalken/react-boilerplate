import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Second = () => (<div>Second – <Link to="/">Go back</Link></div>)

function DummyDomain({ title }) {
  return (
    <BrowserRouter>
      <div>
        <h1>{title}</h1>
        <Route path="/second" component={Second} />
        <Link to="/second">Go to second</Link>
      </div>
    </BrowserRouter>
  )
}

function mapStateToProps(state) {
  return {
    title: state.dummyDomain.base.title
  }
}

export default connect(mapStateToProps)(DummyDomain)
