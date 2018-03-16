import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dummyDomain from 'demoDomain/index'
import Title from './Title'

function DemoDomain({ title, handleAsync }) {
  return (
    <div>
      <Title>{title}</Title>
      <p>
        <Link to="more">More</Link>
        <button onClick={handleAsync}>Async!</button>
      </p>
    </div>
  )
}

DemoDomain.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(DemoDomain)
