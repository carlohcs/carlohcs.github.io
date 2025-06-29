import { useContext } from 'react'
import { Main } from '../layouts/main'
import { AppContext } from '../components/providers/AppProvider'
import { createMarkup } from '../components/helpers/create-markup'

import './resume.css'

const Resume = () => {
  const { getMessage } = useContext(AppContext)

  const renderExperienceItems = items => {
    let content = ''

    if (typeof items[0] === 'string' && Array.isArray(items)) {
      content = items.map((item, key) => <p key={key} dangerouslySetInnerHTML={createMarkup(item)} />)
    } else {
      content = items.map((item, key) => {
        return (
          <div key={key}>
            <p dangerouslySetInnerHTML={createMarkup(item.title)} />
            {item.quote ? (<p><i dangerouslySetInnerHTML={createMarkup(item.quote)} /></p>) : ''}
            <p dangerouslySetInnerHTML={createMarkup(item.description)} />
          </div>
        )
      })
    }

    return (
      <>
        {content}
      </>
    )
  }

  return (
    <>
      <Main>
        <section className="resume container">
          <div className="content">
            <div className="page__description">
              {
                getMessage('resume', 'experiences').map((experience, key) => {
                  return (
                    <div key={key} className="page__item">
                      <h2 className="">{experience.title}</h2>
                      {renderExperienceItems(experience.items)}
                    </div>
                  )
                }
                )}

            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

export default Resume
