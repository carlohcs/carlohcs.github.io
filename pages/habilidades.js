import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

// TODO: ordenar tudo em ordem decrescente

class Skills extends Component {
    static contextType = AppContext

    render() {
        const createMarkup = value => ({ __html: value })
        const renderExperienceItems = items => {
            // const renderTalk = (talk, key) => {

                let content = ''

                if(typeof items[0] === 'string' && Array.isArray(items)) {
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
                    <div>
                        {content}
                    </div>
                )
            // }

            // return (
            //     <div key={key} className="talks-year">
            //         <h2 className="talks-year__title">{talksYear.year}</h2>

            //         {talksYear.talks.map((talk, key) => renderTalk(talk, key))}
            //     </div>
            // )
        }

        const renderProject = (project, key) => {
            let content = ''
// console.log('project is', project)
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
                <div key={key} className={['project']}>

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
                    <section className="resume container">
                        <div className="content">
                            <div className="page__introduction">
                                <h1 className="page__title">{this.context.getMessage('extraSkills', 'title')}</h1>
                                <h2 className="page__title-description">{this.context.getMessage('extraSkills', 'titleDescription')}</h2>
                                <p className="page__description">{this.context.getMessage('extraSkills', 'description')}</p>
                            </div>

                            <div className="">
                                {/* {
                                    this.context.getMessage('extraSkills', 'items').map((skill, key) => {
                                        return (
                                            <div key={key} className="page__content-item">
                                                <h2 className="">{skill.title}</h2>
                                                { renderExperienceItems(skill.items) }
                                            </div>
                                        )
                                }
                                )}*/}

                                {this.context.getMessage('extraSkills', 'items').map((project, key) =>
                                    renderProject(project, key)
                                )}
                            </div>
                        </div>
                    </section>
                    <style jsx global>{`
                        .page {
                            &__content-item {
                                margin: 80px 0;

                                @media screen and (min-width: 1024px) {
                                    margin: 100px 0;
                                }

                                @media screen and (min-width: 1280px) {
                                    margin: 200px 0;
                                }
                            }
                        }
                    `}
                    </style>
                </Main>
            </>
        )
    }
}

export default Skills;