import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

// TODO: ordenar tudo em ordem decrescente

class Instrutor extends Component {
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

                            <div className="page__description">
                                {
                                    this.context.getMessage('extraSkills', 'items').map((skill, key) => {
                                        return (
                                            <div key={key}>
                                                <h2 className="">{skill.title}</h2>
                                                { renderExperienceItems(skill.items) }
                                            </div>
                                        )
                                }
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

export default Instrutor;