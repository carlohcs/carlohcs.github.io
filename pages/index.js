import React, { Component } from 'react'
import Main from '../layouts/main'
import { AppConsumer } from '../components/AppProvider'

const socialNetworks = [
    { iconName: 'github-brands.svg', className: 'github', url: 'https://github.com/carlohcs' },
    { iconName: 'linkedin-in-brands.svg', className: 'linkedin', url: 'https://br.linkedin.com/in/carlohcs' },
    { iconName: 'twitter-brands.svg', className: 'twitter', url: 'https://www.twitter.com/carlohcs' },
    { iconName: 'facebook-brands.svg', className: 'facebook', url: 'https://www.facebook.com/carlohcs' },
    { iconName: 'envelope-regular.svg', className: 'mail', url: 'mailto: carlohcs@gmail.com' },
    // Falta o sourcerer.io
    { iconName: 'medium-m-brands.svg', className: 'medium', url: 'https://medium.com/@carlohcs' }
]

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

class Index extends Component {
    render() {
        const createMarkup = value => ({ __html: value })
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

                                .social-networks {
                                    display: flex;
                                    justify-content: space-between;
                                    padding: 5px;
                                    max-width: 300px;
                                    margin: 0 auto;

                                    @media screen and (min-width: 768px) {
                                        margin: 0;
                                    }
                                }

                                .social-network {
                                    color: #000;
                                }
                            }

                            .dark-ui {
                                .social-icon {
                                    color: #1dc779;
                                }
                            }
                        `}</style>
                        <section className="home">
                            <img src={require('../assets/img/home/carlohcs-xs.png')} alt="Fotografia de Carlos Henrique" className="home__carlohcs-photography" />
                            <div className="home__welcome-description">
                                <h1 className="home__welcome-description__welcome">{getMessage('home', 'welcome')}</h1>
                                <h2 className="home__welcome-description__subdescription">{getMessage('home', 'subdescription')}</h2>
                                <p className="home__welcome-description__short-description" dangerouslySetInnerHTML={createMarkup(getMessage('home', 'shortDescription'))} />
                            </div>

                            {getMessage('home', 'description').map((description, key) =>
                                <p dangerouslySetInnerHTML={createMarkup(description)} key={key} />)}

                            <p>{getMessage('home', 'connect')}</p>

                            <div className="social-networks">
                                {socialNetworks.map((item, key) =>
                                    <a href={item.url} target="_blank" className="social-network no-link-style" key={key}>
                                        <div dangerouslySetInnerHTML={{ __html: require(`../assets/img/icons/${item.iconName}?include`) }} className={['icon', 'social-icon', `social-icon--${item.className}`].join(' ')} />
                                    </a>
                                )}
                            </div>
                        </section>
                    </Main>
                )}
            </AppConsumer>
        )
    }
}

export default Index