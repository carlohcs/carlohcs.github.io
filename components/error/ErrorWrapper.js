import { useContext } from 'react'
import { Main } from '../../layouts/main'
import { AppContext } from '../providers/AppProvider'
import { CustomHead } from '../custom-head/CustomHead'
import PropTypes from 'prop-types'

import './error.css'

const ErrorWrapper = ({ statusCode }) => {
  const { getMessage } = useContext(AppContext)

  const createMarkup = value => ({ __html: value })
  const title = statusCode === 404 ? getMessage('error', 'codes', '404') : getMessage('error', 'defaultErrorMessage')
  return (
    <>
      <CustomHead title={title} />
      <Main>
        <div className="error-page flex flex--justify-start">
          <h1 className="error-page__status-code">{statusCode}</h1>
          <h2 className="error-page__message">{title}</h2>

          <div className="error-page__citation" dangerouslySetInnerHTML={createMarkup(getMessage('error', 'citation'))} />
        </div>
      </Main>
    </>
  )
}

ErrorWrapper.propTypes = {
  statusCode: PropTypes.number
}

export default ErrorWrapper
