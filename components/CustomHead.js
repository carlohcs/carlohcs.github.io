
import React, { Component } from 'react'
import Head from 'next/head'
import AppContext from './AppProvider'

class CustomHead extends Component {
    static contextType = AppContext

    render() {
        const title = this.props.title

        return (
            <Head>
                <title>{title} {this.context.getMessage('page', 'titleSuffix')}</title>
            </Head>
        )
    }
}

export default CustomHead