import { useContext } from 'react'
import { AppContext } from '../components/providers/AppProvider'
import PropTypes from 'prop-types'
import ErrorWrapper from '../components/error/ErrorWrapper'

const Error = ({ statusCode }) => {
  const { getMessage } = useContext(AppContext)

  const title = statusCode === 404 ? getMessage('error', 'codes', '404') : getMessage('error', 'defaultErrorMessage')

  return <ErrorWrapper statusCode={statusCode} title={title} />
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null

  return { statusCode }
}

Error.propTypes = {
  statusCode: PropTypes.number
}

export default Error
