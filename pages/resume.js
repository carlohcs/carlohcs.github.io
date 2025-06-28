import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

export default class Resume extends Component {
  static contextType = AppContext

  render() {
    const createMarkup = value => ({ __html: value })
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
                  this.context.getMessage('resume', 'experiences').map((experience, key) => {
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
          <style jsx global>{`
            .resume {
              p {
                & > strong {
                  &:before {
                    content: '- ';
                  }
                }
              }
            }
          `}</style>
        </Main>
      </>
    )
  }
}
