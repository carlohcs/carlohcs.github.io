import React from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

class Error extends React.Component {
  static contextType = AppContext

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const createMarkup = value => ({ __html: value })

    return (
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
                  max-width: 750px;
                }
              }
            `}
            </style>
              <h1 className="error-page__status-code">{this.props.statusCode}</h1>
              <h2 className="error-page__message">{this.props.statusCode === 404 ? 'Página não encontrada.' : 'Erro no servidor.'}</h2>
              
              <div className="error-page__citation" dangerouslySetInnerHTML={createMarkup(this.context.getMessage('error', 'citation'))} />
          </div>
        </Main>
    )
  }
}

export default Error