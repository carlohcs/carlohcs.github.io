import { useContext } from 'react'

import Head from 'next/head'
import PropTypes from 'prop-types'

import { Main } from '../../layouts/main'
import { createMarkup } from '../helpers/create-markup'
import { AppContext } from '../providers/AppProvider'

import './error.css'

const ErrorWrapper = ({ statusCode }) => {
  const { getMessage } = useContext(AppContext)

  const title = statusCode === 404 ? getMessage('error', 'codes', '404') : getMessage('error', 'defaultErrorMessage')
  const pageTitle = `${title.replace('.', '')} ${getMessage('page', 'titleSuffix')}`

  return (
    <>
      <Main>
        <div className="error-page flex flex--justify-start">
          <h1 className="error-page__status-code">{statusCode}</h1>
          <h2 className="error-page__message">{title}</h2>

          <div className="error-page__citation" dangerouslySetInnerHTML={createMarkup(getMessage('error', 'citation'))} />
        </div>
      </Main>
      <Head>
        <title>{pageTitle}</title>
      </Head>
    </>
  )
}

ErrorWrapper.propTypes = {
  statusCode: PropTypes.number
}

export default ErrorWrapper
