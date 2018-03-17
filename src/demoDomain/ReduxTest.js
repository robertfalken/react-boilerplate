import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import dummyDomain from 'demoDomain/index'
import Title from './Title'
import Input from './Input'

class ReduxTest extends React.Component {
  state = { title: '' }

  handleChange = () => {
    this.setState({
      title: this.input.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchAsync(this.state)
    this.setState({ title: '' })
  }

  render() {
    const { title, loading } = this.props
    return (
      <div>
        <Title>
          {title}
        </Title>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.title}
            innerRef={input => this.input = input}
            onChange={this.handleChange}
            type="text"
          />
          <p>
            {loading
              ? <span>Loading...</span>
              : <button>Set title!</button>
            }
          </p>
          <p>
            <Link to="/">
              Back
            </Link>
          </p>
        </form>
      </div>
    )
  }
}

ReduxTest.propTypes = {
  dispatchAsync: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    title: dummyDomain.selectors.getTitle(state),
    loading: dummyDomain.selectors.getLoading(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAsync: payload => dispatch({ type: 'ASYNC_REQUEST', payload }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
