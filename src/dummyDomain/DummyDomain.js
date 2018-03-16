import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import dummyDomain from 'dummyDomain/index'

function DummyDomain({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

DummyDomain.propTypes = {
  title: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    title: dummyDomain.selectors.getTitle(state),
  }
}


export default connect(mapStateToProps)(DummyDomain)
