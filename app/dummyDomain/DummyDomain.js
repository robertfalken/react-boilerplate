import React from 'react'
import { connect } from 'react-redux'

function DummyDomain({ title }) {
  return (
    <div>{title}</div>
  )
}

function mapStateToProps(state) {
  return {
    title: state.dummyDomain.base.title
  }
}

export default connect(mapStateToProps)(DummyDomain)
