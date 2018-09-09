import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const HomeScene = ({ header, content }) => (
  <div>
    <h1>{header}</h1>
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
