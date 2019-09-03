import React, { Component } from 'react'
import Main from '../../layouts/main'
import { AppConsumer } from '../../components/AppProvider'

// TODO: usar essa página como modelo para as outras -> criar um componente
class EngenheiroDeSoftware extends Component {
    render() {
        const createMarkup = value => ({ __html: value })
        const renderProject = project => {
            return (
                <div className="skill-page__project">
                    <img src={project.cover} loading="lazy" alt="Projeto" />

                    <h3 className="project__title" dangerouslySetInnerHTML={createMarkup(project.titleDescription)} />

                    {project.url ? <a href={project.url}>
                        {project.url}
                    </a> : ''}

                    <div dangerouslySetInnerHTML={createMarkup(project.description)} />
                    <hr />
                </div>
            )
        }   

        return (
            <div>
                <Main>
                    <AppConsumer>
                        {({ getMessage }) => (
                        <section className="skill-page">
                            <style jsx global>{`
                                img {
                                    width: 100%;
                                }

                                .project {
                                    &__title {
                                        margin-bottom: 0;
                                    }
                                    &__technology {
                                        font-size: 12px;
                                    }
                                }
                            `}
                            </style>
                            <div className="skill-page__introduction">
                                <h1>{getMessage('softwareEngineer', 'title')}</h1>
                                <h2>{getMessage('softwareEngineer', 'titleDescription')}</h2>

                                <p>{getMessage('softwareEngineer', 'description')}</p>
                            </div>

                            <hr />

                            <h3>{getMessage('softwareEngineer', 'featured')}</h3>

                            <div className="skill-page__project skill-page__project--main">
                                <img src={getMessage('softwareEngineer', 'mainProject', 'cover')} />

                                <h3 className="project__title" dangerouslySetInnerHTML={createMarkup(getMessage('softwareEngineer', 'mainProject', 'titleDescription'))} />
                                <a href={getMessage('softwareEngineer', 'mainProject', 'url')}>
                                    {getMessage('softwareEngineer', 'mainProject', 'url')}
                                </a>

                                <div dangerouslySetInnerHTML={createMarkup(getMessage('softwareEngineer', 'mainProject', 'description'))} />
                            </div>

                            <hr />

                            <h3>{getMessage('softwareEngineer', 'otherProjects')}</h3>

                            {getMessage('softwareEngineer', 'projects').map((project, key) => 
                            <div key={key}>
                                {renderProject(project)}
                            </div>)}

                        </section>
                    )}
                    </AppConsumer>
                </Main>
            </div>
        )
    }
}

export default EngenheiroDeSoftware;