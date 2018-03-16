import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import dummyDomain from 'dummyDomain/index'

const history = createHistory()

const Second = () => (<div>Second – <Link to="/">Go back</Link></div>)

function DummyDomain({ title }) {
  return (
    <ConnectedRouter history={history}>
      <div>
        <h1>{title}</h1>
        <Route path="/second" component={Second} />
        <Link to="/second">Go to second</Link>
      </div>
    </ConnectedRouter>
  )
}

function mapStateToProps(state) {
  return {
    title: dummyDomain.selectors.getTitle(state),
  }
}

DummyDomain.propTypes = {
  title: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(DummyDomain)
