import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'
import CustomHead from '../components/CustomHead'

class Skills extends Component {
    static contextType = AppContext

    render() {
        const createMarkup = value => ({ __html: value })
        const renderProject = (project, key) => {
            let content = ''

            if(typeof project.items[0] === 'string' && Array.isArray(project.items)) {
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
                <CustomHead title={this.context.getMessage('skills', 'title')} />
                <Main>
                    <section className="resume container">
                        <div className="content">
                            <div className="page__introduction">
                                <h1 className="page__title">{this.context.getMessage('skills', 'title')}</h1>
                                <h2 className="page__title-description">{this.context.getMessage('skills', 'titleDescription')}</h2>
                                <p className="page__description">{this.context.getMessage('skills', 'description')}</p>
                            </div>

                            <div className="">
                                {this.context.getMessage('skills', 'items').map((project, key) =>
                                    renderProject(project, key)
                                )}
                            </div>
                        </div>
                    </section>
                    <style jsx global>{`
                        /*.page {
                            &__content-item {
                                margin: 80px 0;

                                @media screen and (min-width: 1024px) {
                                    margin: 100px 0;
                                }

                                @media screen and (min-width: 1280px) {
                                    margin: 200px 0;
                                }
                            }
                        }*/
                    `}
                    </style>
                </Main>
            </>
        )
    }
}

export default Skills;