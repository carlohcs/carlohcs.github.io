import React from 'react'
import AppContext from '../components/AppProvider'
import PropTypes from 'prop-types'
import ErrorWrapper from '../components/error/ErrorWrapper'

class Error extends React.Component {
  static contextType = AppContext

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const title = this.props.statusCode === 404 ? this.context.getMessage('error', 'codes', '404') : this.context.getMessage('error', 'defaultErrorMessage')

    return <ErrorWrapper statusCode={this.props.statusCode} title={title} />
  }
}

Error.propTypes = {
  statusCode: PropTypes.number
}

export default Error
