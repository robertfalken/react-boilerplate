import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dummyDomain from 'dummyDomain/index'

function DummyDomain({ title, handleAsync }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <Link to="more">More</Link>
        <button onClick={handleAsync}>Async!</button>
      </p>
    </div>
  )
}

DummyDomain.propTypes = {
  handleAsync: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    title: dummyDomain.selectors.getTitle(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAsync: () => dispatch({ type: 'ASYNC_REQUEST', payload: { foo: 'bar' } }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DummyDomain)
