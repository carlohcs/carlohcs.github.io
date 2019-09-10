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
                <div key={key} className="talks-year">
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
                            </div>
                        </div>
                    </section>
                    <style jsx global>{`
                            .project:not(.project--main) {
                                .project__title {
                                    @media (min-width: 1280px) {
                                        margin-top: -40px !important;
                                    }

                                    @media (min-width: 1440px) {
                                        margin-top: -60px !important;
                                    }
                                }

                                &:nth-child(odd) {
                                    .project__cover {
                                        @media (min-width: 1280px) {
                                            box-shadow: -25px 50px 20px 5px rgba(0, 0, 0, .3);
                                        }
                                    }
                                }

                                &:nth-child(even) {
                                    .project__cover {
                                        @media (min-width: 1280px) {
                                            box-shadow: 25px 50px 20px 5px rgba(0, 0, 0, .3);
                                        }
                                    }
                                }
                            }
                            
                            .dark-ui {
                                .project:not(.project--main) {
                                    &__cover {
                                        box-shadow: 0 15px 20px 5px rgba(68, 68, 68, .3);
                                    }

                                    &:nth-child(odd) {
                                        .project__cover {
                                            @media (min-width: 1280px) {
                                                box-shadow: -25px 50px 20px 5px rgba(68, 68, 68, .3);
                                            }
                                        }
                                    }
                                    &:nth-child(even) {
                                        .project__cover {
                                            @media (min-width: 1280px) {
                                                box-shadow: 25px 50px 20px 5px rgba(68, 68, 68, .3);
                                            }
                                        }
                                    }
                                }
                            }
                            

                            .project {
                                margin: 80px 0;

                                @media screen and (min-width: 1024px) {
                                    margin: 100px 0;
                                }

                                @media screen and (min-width: 1280px) {
                                    margin: 200px 0;
                                }

                                &__cover {
                                    width: 100%;
                                    margin: 0 auto 20px;   
                                    box-shadow: 0 15px 20px 5px rgba(68, 68, 68, .3);                      
                                }

                                &__description {
                                    max-width: 650px;
                                    margin-top: 10px;

                                    @media screen and (min-width: 1024px) {
                                        margin-top: 20px;
                                    }

                                    p {
                                        margin: 0;
                                    }
                                }

                                &--main {
                                    .project__cover {
                                        @media screen and (min-width: 1024px) {
                                            max-width: 1200px;
                                            margin: 0 auto 60px;
                                            display: block;
                                        }
                                    }
                                        

                                    .project__content{
                                        flex-flow: column !important;

                                        &__column {
                                            &:nth-of-type(1) {
                                                width: 100% !important;
                                            }
                                            &:nth-of-type(2) {
                                                width: auto !important;
                                            }
                                        }
                                    }
                                }

                                .project__content {
                                    display: flex;
                                    flex-flow: column;
                                    align-items: center;
                                    justify-content: center;

                                    &__column {
                                        @media screen and (min-width: 1024px) {
                                            width: 50%;
                                        }
                                    }
                                }

                                @media screen and (min-width: 1024px) {
                                    .project__content {
                                        flex-flow: row;
                                    }

                                    &:not(.project--main):nth-child(even) {
                                        .project__content {
                                            flex-direction: row-reverse;

                                            &__column {
                                                @media screen and (min-width: 1024px) {
                                                    &:nth-of-type(1) {
                                                        padding-left: 20px;
                                                    }
        
                                                    &:nth-of-type(2) {
                                                        padding-right: 20px;
                                                    }
                                                }

                                                @media screen and (min-width: 1280px) {
                                                    &:nth-of-type(1) {
                                                        padding-left: 40px;
                                                    }
        
                                                    &:nth-of-type(2) {
                                                        padding-right: 40px;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    &:not(.project--main):nth-child(odd) {
                                        .project__content {
                                            &__column {
                                                @media screen and (min-width: 1024px) {
                                                    &:nth-of-type(1) {
                                                        padding-right: 20px;
                                                    }
        
                                                    &:nth-of-type(2) {
                                                        padding-left: 20px;
                                                    }
                                                }

                                                @media screen and (min-width: 1280px) {
                                                    &:nth-of-type(1) {
                                                        padding-right: 40px;
                                                    }
        
                                                    &:nth-of-type(2) {
                                                        padding-left: 40px;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                &:last-child {
                                    margin-bottom: 0;
                                }
                                
                                &__title {
                                    margin: 0;
                                }
                            }
                        `}
                        </style>
                </Main>
            </>
        )
    }
}

export default Palestras;