import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

// TODO: usar essa página como modelo para as outras -> criar um componente
class EngenheiroDeSoftware extends Component {
    static contextType = AppContext

    render() {
        const createMarkup = value => ({ __html: value })
        const renderProject = (project, key) => {
            return (
                <div key={key} className="project">
                    <img src={project.cover.indexOf('https') === -1 ? `../../static/img/projects/${project.cover}` : 'https://dummyimage.com/500x250/aaa/000' } loading="lazy" alt="Projeto" />
{/* Fotos da Vita, ursoland, Aduet precisam ser redimensionadas para o tamanho do mac ou ao contrário, além de possuírem outras instruções */}
                    <h3 className="project__title" dangerouslySetInnerHTML={createMarkup(project.titleDescription)} />

                    {project.url ? <a href={project.url} target="_blank">
                        {project.url}
                    </a> : ''}

                    <div dangerouslySetInnerHTML={createMarkup(project.description)} />
                </div>
            )
        }   

        return (
            <div>
                <Main>
                    <section className="skill-page">
                        <style jsx global>{`
                            img {
                                width: 100%;
                            }

                            .project {
                                padding: 50px 0;
                                border-bottom: 1px solid #e1e1e1;

                                &:last-child {
                                    padding-bottom: 0;
                                    border-bottom: 0;
                                    
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