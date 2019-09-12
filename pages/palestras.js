import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

// TODO: CORRIGIR ESPAÇAMENTOS NOVAMENTE
// TODO: CORRIGIR MÚLTIPLOS RENDERS
class Palestras extends Component {
    static contextType = AppContext

    render() {
        // const createMarkup = value => ({ __html: value })
        const renderTalksYear = (talksYear, key) => {
            const renderTalk = (talk, key) => {
                
                const content = talk.link !== '' ? <a key={key} href={talk.link} target="_blank">{talk.title}</a> : <p key={key}>{talk.title}</p>

                return (
                    <div key={key}>
                        { content }
                    </div>
                )
            }

            return (
                <div key={key} className="talks-year page__item">
                    <h2 className="talks-year__title">{talksYear.year}</h2>
                    
                    {talksYear.talks.map((talk, key) => renderTalk(talk, key))}
                </div>
            )
        }

        return (
            <>
                <Main>
                    <section className="talks container">
                        <div className="content">
                            <div className="page__introduction">
                                <h1 className="page__title">{this.context.getMessage('talks', 'title')}</h1>
                                <h2 className="page__title-description">{this.context.getMessage('talks', 'titleDescription')}</h2>
                            </div>

                            <div className="page__description">
                                {this.context.getMessage('talks', 'talks', 'years').map((talksYear, key) => renderTalksYear(talksYear, key)
                                )}

                                <p> 
                                    <a href={this.context.getMessage('talks', 'sitePresentations', 'link')}>
                                        {this.context.getMessage('talks', 'sitePresentations', 'description')}
                                        Speaker Deck.
                                    </a>
                                </p>
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

export default Palestras;