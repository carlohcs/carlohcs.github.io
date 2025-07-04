import { useContext } from 'react'

import PropTypes from 'prop-types'

import { createMarkup } from '../components/helpers/create-markup'
import { AppContext } from '../components/providers/AppProvider'
import { useGetPageMetaContent } from '../hooks/use-get-page-meta-content'
import { Main } from '../layouts/main'

import './resume.css'

const Resume = ({ metaContent }) => {
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
      <Main metaContent={metaContent}>
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

Resume.propTypes = {
  metaContent: PropTypes.object
}

export async function getStaticProps() {
  try {
    const metaContent = useGetPageMetaContent('resume')

    return {
      props: {
        metaContent
      }
    }
  } catch (error) {
    return {
      props: {
        metaContent: {}
      }
    }
  }
}

export default Resume
