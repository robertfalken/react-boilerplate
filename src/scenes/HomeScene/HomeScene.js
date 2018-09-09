import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header } from 'uikit'

const HomeScene = ({ header, content }) => (
  <div>
    <Header>
      {header}
    </Header>
    <p>
      {content}
    </p>
  </div>
)

HomeScene.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

const mapStateToProps = ({ home: { header, content } }) => ({
  header,
  content,
})

export default connect(mapStateToProps)(HomeScene)
