import { useContext } from 'react'
import { Main } from '../layouts/main'
import { AppContext } from '../components/providers/AppProvider'
import Video from '../components/video/video'
import { createMarkup } from '../components/helpers/create-markup'

// TODO: usar essa página como modelo para as outras -> criar um componente
const Engineer = () => {
  const { getMessage } = useContext(AppContext)

  const renderProject = (project, key) => {
    const main = typeof key === 'undefined'
    const imageUrl = project.cover && project.cover.indexOf('https') === -1 ? `../../static/img/projects/${project.cover}` : 'https://dummyimage.com/500x250/aaa/000'

    return (
      <div key={key} className={['project', main ? 'project--main' : ''].join(' ')}>
        <div className='project__content'>
          <div className="project__content__column">
            { project.video ? <Video videoName={project.video} /> : <img src={imageUrl} loading="lazy" alt="Projeto" className="project__cover" />}
          </div>

          <div className="project__content__column">
            <h2 className="project__title" dangerouslySetInnerHTML={createMarkup(project.titleDescription)} />

            {project.url ? <a href={project.url} target="_blank" rel="noreferrer">
              {project.url}
            </a> : ''}
            <div className="project__description" dangerouslySetInnerHTML={createMarkup(project.description)} />
          </div>

        </div>
      </div>
    )
  }

  return (
    <>
      <Main>
        <section className="software-engineer">
          <div className="content container container--center">
            <div className="projects">
              {renderProject(getMessage('engineer', 'mainProject'))}

              {getMessage('engineer', 'projects').map((project, key) =>
                renderProject(project, key)
              )}
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

export default Engineer
