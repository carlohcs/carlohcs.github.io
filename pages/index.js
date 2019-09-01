import React, { Component } from 'react'
import Main from '../layouts/main'
import { AppConsumer } from '../components/AppProvider'

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

class Index extends Component {
    render() {
        const createMarkup = value => ({__html: value})
        return (
            <AppConsumer>
                {({ getMessage }) => (
                    <Main>
                        <style jsx global>{`
                            .home {
                                text-align: center;

                                @media screen and (min-width: 768px) {
                                    text-align: left;
                                }

                                &__carlohcs-photography {
                                    width: 140px;
                                    border-radius: 50%;
                                    display: block;
                                    margin: 20px auto;
                                    box-shadow: #1dc779 0 0px 10px 0;

                                    @media screen and (min-width: 768px) {
                                        display: none;
                                    }
                                }

                                &__welcome-description {
                                    &__short-description {
                                        font-size: 14px;
                                        line-height: 1.3;
                                    }

                                    & * {
                                        margin: 0;
                                    }
                                }
                            }
                        `}</style>
                        <section className="home">
                            <img src="/static/carlohcs-xs.png" alt="Fotografia de Carlos Henrique" className="home__carlohcs-photography" />
                            <div className="home__welcome-description">
                                <h1 className="home__welcome-description__welcome">{getMessage('home', 'welcome')}</h1>
                                <h2 className="home__welcome-description__subdescription">{getMessage('home', 'subdescription')}</h2>
                                <p className="home__welcome-description__short-description" dangerouslySetInnerHTML={createMarkup(getMessage('home', 'shortDescription'))} />
                            </div>

                            {getMessage('home', 'description').map((description, key) =>
                                <p dangerouslySetInnerHTML={createMarkup(description)} key={key} />)}

                            <p>{getMessage('home', 'connect')}</p>
                        </section>
                    </Main>
                )}
            </AppConsumer>
        )
    }
}

export default Index