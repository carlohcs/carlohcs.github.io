import { useContext } from 'react'
import { Main } from '../layouts/main'
import { AppContext } from '../components/providers/AppProvider'
import { createMarkup } from '../components/helpers/create-markup'

const Skills = () => {
  const { getMessage } = useContext(AppContext)

  const renderProject = (project, key) => {
    let content = ''

    if (typeof project.items[0] === 'string' && Array.isArray(project.items)) {
      content = project.items.map((item, key) => <p key={key} dangerouslySetInnerHTML={createMarkup(item)} />)
    } else {
      content = project.items.map((item, key) => {
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
      <div key={key} className="project project--no-shadow project--reduced-margin">

        <div className='project__content'>
          <div className="project__content__column">
            <img src={project.cover.indexOf('https') === -1 ? `../../static/img/skills/${project.cover}` : 'https://dummyimage.com/500x250/aaa/000'} loading="lazy" alt="Projeto" className="project__cover" />
          </div>

          <div className="project__content__column">
            <h2 className="project__title" dangerouslySetInnerHTML={createMarkup(project.title)} />
            {project.description ? (<p dangerouslySetInnerHTML={createMarkup(project.description)} />) : ''}

            {content}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Main>
        <section className="resume">
          <div className="content container container--center">
            <div className="">
              {getMessage('skills', 'items').map((project, key) =>
                renderProject(project, key)
              )}
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

export default Skills
