
import { Component } from 'react'
import Head from 'next/head'
import AppContext from './AppProvider'
import PropTypes from 'prop-types'

class CustomHead extends Component {
  static contextType = AppContext

  render() {
    const title = this.props.title
    const finalTitle = title  ? `${title} ${this.context.getMessage('page', 'titleSuffix')}` : this.context.getMessage('page', 'defaultTitle')

    return (
      <Head>
        <title>{finalTitle}</title>
      </Head>
    )
  }
}

CustomHead.propTypes = {
  title: PropTypes.string
}

export default CustomHead
