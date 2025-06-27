import React from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'
import CustomHead from '../components/CustomHead'

class Error extends React.Component {
  static contextType = AppContext

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const createMarkup = value => ({ __html: value })
    const title = this.props.statusCode === 404 ? this.context.getMessage('error', 'codes', '404') : this.context.getMessage('error', 'defaultErrorMessage')

    return (
      <>
        <CustomHead title={title} />
        <Main>
          <div className="error-page flex flex--justify-start">
            <style jsx global>{`
              .error-page {
                min-height: 100%;
                padding-top: 30px;

                &__status-code {
                  margin-bottom: 0;
                }

                &__message {
                  margin-top: 0;
                }

                &__citation {
                  max-width: 850px;

                  @media (min-width: 1024px) {
                    font-size: 1.4em;
                    font-weight: 300;
                    line-height: 1.4;
                  }

                  @media (min-width: 1200px) {
                      font-size: 1.6em;                        
                  }
                }
              }
            `}
            </style>
            <h1 className="error-page__status-code">{this.props.statusCode}</h1>
            <h2 className="error-page__message">{title}</h2>

            <div className="error-page__citation" dangerouslySetInnerHTML={createMarkup(this.context.getMessage('error', 'citation'))} />
          </div>
        </Main>
      </>
    )
  }
}

Error.propTypes = {
  // eslint-disable-next-line react/no-deprecated
  statusCode: React.PropTypes.number
}

export default Error
