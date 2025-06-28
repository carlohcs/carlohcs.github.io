import React from 'react'
import ErrorWrapper from '../components/error/ErrorWrapper'

class Error404 extends React.Component {
  render() {
    return <ErrorWrapper statusCode={404} />
  }
}

export default Error404
