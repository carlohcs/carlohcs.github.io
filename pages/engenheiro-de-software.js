import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'
import CustomHead from '../components/CustomHead'

// TODO: usar essa página como modelo para as outras -> criar um componente
class EngenheiroDeSoftware extends Component {
    static contextType = AppContext

    render() {
        const createMarkup = value => ({ __html: value })
        const renderProject = (project, key) => {
            const main = typeof key === 'undefined'

            return (
                <div key={key} className={['project', main ? 'project--main' : ''].join(' ')}>

                    <div className='project__content'>
                        <div className="project__content__column">
                            <img src={project.cover.indexOf('https') === -1 ? `../../static/img/projects/${project.cover}` : 'https://dummyimage.com/500x250/aaa/000'} loading="lazy" alt="Projeto" className="project__cover" />
                        </div>

                        <div className="project__content__column">
                            <h2 className="project__title" dangerouslySetInnerHTML={createMarkup(project.titleDescription)} />

                            {project.url ? <a href={project.url} target="_blank">
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
                <CustomHead title={this.context.getMessage('softwareEngineer', 'title')} />
                <Main>
                    <section className="software-engineer">
                        <div className="content">
                            <div className="software-engineer__introduction">
                                <h1 className="page__title">{this.context.getMessage('softwareEngineer', 'title')}</h1>
                                <h2 className="page__title-description">{this.context.getMessage('softwareEngineer', 'titleDescription')}</h2>

                                <p className="page__description">{this.context.getMessage('softwareEngineer', 'description')}</p>
                            </div>
                        </div>

                        <div className="content container container--center">
                            <div className="projects">
                                {renderProject(this.context.getMessage('softwareEngineer', 'mainProject'))}

                                {this.context.getMessage('softwareEngineer', 'projects').map((project, key) =>
                                    renderProject(project, key)
                                )}
                            </div>
                        </div>
                    </section>
                    <style jsx global>{`
                        
                    `}
                    </style>
                </Main>
            </>
        )
    }
}

export default EngenheiroDeSoftware;