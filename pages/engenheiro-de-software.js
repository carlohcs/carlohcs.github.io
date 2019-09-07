import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

// TODO: usar essa página como modelo para as outras -> criar um componente
class EngenheiroDeSoftware extends Component {
    static contextType = AppContext

    /* Fotos da Vita, ursoland, Aduet precisam ser redimensionadas para o tamanho do mac ou ao contrário, além de possuírem outras instruções */

    render() {
        const createMarkup = value => ({ __html: value })
        const renderProject = (project, key) => {
            const main = typeof key === 'undefined'

            return (
                <div key={key} className={['project', main ? 'project--main' : ''].join(' ')}>

                    <h3 className="project__title" dangerouslySetInnerHTML={createMarkup(project.titleDescription)} />

                    {project.url ? <a href={project.url} target="_blank">
                        {project.url}
                    </a> : ''}

                    <div className='project__content'>
                        <div className="project__content__column">
                            <img src={project.cover.indexOf('https') === -1 ? `../../static/img/projects/${project.cover}` : 'https://dummyimage.com/500x250/aaa/000'} loading="lazy" alt="Projeto" className="project__cover" />
                        </div>

                        <div className="project__content__column">
                            <div dangerouslySetInnerHTML={createMarkup(project.description)} />
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <Main>
                    <section className="skill-page container">
                        <style jsx global>{`
                            .project {
                                padding: 50px 0;

                                &__cover {
                                    width: 100%;
                                }

                                &--main {
                                    .project__content{
                                        flex-flow: column !important;

                                        &__column {
                                            max-width: 100% !important;
                                        }
                                    }
                                }

                                .project__content {
                                    display: flex;
                                    flex-flow: column;

                                    &__column {
                                        @media screen and (min-width: 1280px) {
                                            max-width: 50%;
                                        }
                                    }
                                }

                                @media screen and (min-width: 1280px) {
                                    .project__content {
                                        flex-flow: row;
                                    }

                                    &:not(.project--main):nth-child(even) {
                                        .project__content {
                                            flex-direction: row-reverse;

                                            &__column {
                                                @media screen and (min-width: 1280px) {
                                                    &:nth-of-type(1) {
                                                        padding-left: 60px;
                                                    }
        
                                                    &:nth-of-type(2) {
                                                        padding-right: 60px;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    &:not(.project--main):nth-child(odd) {
                                        .project__content {
                                            &__column {
                                                @media screen and (min-width: 1280px) {
                                                    &:nth-of-type(1) {
                                                        padding-right: 60px;
                                                    }
        
                                                    &:nth-of-type(2) {
                                                        padding-left: 60px;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                &:last-child {
                                    padding-bottom: 0;
                                }
                                
                                &__title {
                                    margin-bottom: 0;
                                }
                                &__technology {
                                    font-size: 12px;
                                    margin-bottom: 0;
                                }
                            }
                        `}
                        </style>
                        <div className="skill-page__introduction">
                            <h1>{this.context.getMessage('softwareEngineer', 'title')}</h1>
                            <h2>{this.context.getMessage('softwareEngineer', 'titleDescription')}</h2>

                            <p>{this.context.getMessage('softwareEngineer', 'description')}</p>
                        </div>

                        <h3>{this.context.getMessage('softwareEngineer', 'featured')}</h3>

                        {renderProject(this.context.getMessage('softwareEngineer', 'mainProject'))}

                        <h3>{this.context.getMessage('softwareEngineer', 'otherProjects')}</h3>

                        {this.context.getMessage('softwareEngineer', 'projects').map((project, key) =>
                            renderProject(project, key)
                        )}

                    </section>
                </Main>
            </div>
        )
    }
}

export default EngenheiroDeSoftware;