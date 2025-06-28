import { useContext } from 'react'
import AppContext from '../AppProvider'
import PropTypes from 'prop-types'
import { createMarkup } from '../helpers/create-markup'

export const Introduction = ({ translationKey }) => {
  const { getMessage } = useContext(AppContext)

  // KEEP: data-close-menu -> usado para fechar o menu quando clicar fora dele
  return (
    <div className="page__introduction" data-close-menu>
      <div className="container">
        <h1 className="page__title" dangerouslySetInnerHTML={createMarkup(getMessage(translationKey, 'title'))} />
        <h2 className="page__title-description" dangerouslySetInnerHTML={createMarkup(getMessage(translationKey, 'titleDescription'))} />

        <p className="page__description" dangerouslySetInnerHTML={createMarkup(getMessage(translationKey, 'description'))} />
      </div>

    </div>
  )
}

Introduction.propTypes = {
  translationKey: PropTypes.string.isRequired
}
