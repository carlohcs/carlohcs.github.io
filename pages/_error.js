import React from 'react'
import Main from '../layouts/main'
import { AppConsumer } from '../components/AppProvider'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const createMarkup = value => ({ __html: value })

    return (
        <Main>
            <AppConsumer>
            {({ getMessage }) => (
                <div>
                    <h1>{this.props.statusCode}</h1>
                    
                    <quote dangerouslySetInnerHTML={createMarkup(getMessage('error', 'citation'))} />
                </div>
            )}
            </AppConsumer>
        </Main>
    )
  }
}

export default Error