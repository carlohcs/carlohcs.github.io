import { useContext } from 'react'
import { AppContext } from '../providers/AppProvider'
import PropTypes from 'prop-types'
import { createMarkup } from '../helpers/create-markup'

export const Introduction = ({ title, titleDescription, description, translationKey }) => {
  const { getMessage } = useContext(AppContext)
  const finalTitle = title || getMessage(translationKey, 'title')

  const isTitleDescriptionComponent = typeof titleDescription === 'object'
  const finalTitleDescription = titleDescription || getMessage(translationKey, 'titleDescription')

  const isDescriptionComponent = typeof description === 'object'
  const finalDescription = description || getMessage(translationKey, 'description')

  return (
    <div className="page__introduction">
      <div className="page__introduction__content">
        <h1 className="page__title" dangerouslySetInnerHTML={createMarkup(finalTitle)} />

        { isTitleDescriptionComponent ? titleDescription : finalTitleDescription && <h2 className="page__title-description" dangerouslySetInnerHTML={createMarkup(finalTitleDescription)} /> }

        { isDescriptionComponent ? description : finalDescription && <p className="page__description" dangerouslySetInnerHTML={createMarkup(finalDescription)} /> }
      </div>

    </div>
  )
}

Introduction.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  titleDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  translationKey: PropTypes.string.isRequired
}
