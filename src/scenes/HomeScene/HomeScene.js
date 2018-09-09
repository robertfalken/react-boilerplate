import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header } from 'uikit'

class HomeScene extends React.Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }

  render() {
    const { header, content } = this.props
    return (
      <div>
        <Header>
          {header}
        </Header>
        <p>
          {content}
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ home: { header, content } }) => ({
  header,
  content,
})

export default connect(mapStateToProps)(HomeScene)
