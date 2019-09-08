import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'

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
    static contextType = AppContext

    render() {
        const createMarkup = value => ({ __html: value })
        return ( 
            <Main>
                <style jsx global>{`
                    .home {
                        text-align: center;

                        @media screen and (min-width: 768px) {
                            text-align: left;

                            &__welcome {
                                max-width: 600px;
                            }
                        }

                        @media screen and (min-width: 1024px) {
                            display: flex;
                            flex-direction: row;
                            width: 100%;
                        }

                        @media screen and (min-width: 1280px) {
                            p {
                                font-size: 1.6em;
                                font-weight: 300;
                                line-height: 1.4;
                            }

                            &__welcome {
                                max-width: 750px;
                            }
                        }

                        &__left {
                            @media screen and (min-width: 1024px) {
                                min-width: 60%;
                            }

                            @media screen and (min-width: 1280px) {
                                min-width: 50%;
                            }
                        }

                        &__right {
                            display: none;

                            @media screen and (min-width: 1024px) {
                                display: block;
                                background: url(../static/img/home/carlohcs-large.png) bottom right no-repeat;
                                background-size: contain;
                                position: absolute;
                                z-index: -1;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                width: 40%;
                                height: 100%;
                            }

                            @media screen and (min-width: 1280px) {
                                width: 50%;
                                background-position: bottom left;
                            }
                        }

                        &__carlohcs-photography {
                            &--xs {
                                width: 140px;
                                border-radius: 50%;
                                display: block;
                                margin: 20px auto;
                                box-shadow: #1dc779 0 0px 10px 0;

                                @media screen and (min-width: 768px) {
                                    display: none;
                                }
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

                            &__connect {
                                margin: 0 0 5px;
                            }
                        }

                        .social-networks {
                            display: flex;
                            justify-content: space-between;
                            padding: 5px 0;
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

                    footer {
                        margin-top: 20px;
                        display: block;
                        font-size: 12px;
                    }
                `}</style>
                <section className="home">
                    <div className="home__left">
                        <img src={require('../assets/img/home/carlohcs-xs.png')} alt="Fotografia de Carlos Henrique" className="home__carlohcs-photography--xs" />

                        <div className="home__welcome">
                            <div className="home__welcome-description">
                                <h1 className="home__welcome-description__welcome">{this.context.getMessage('home', 'welcome')}</h1>
                                <h2 className="home__welcome-description__subdescription">{this.context.getMessage('home', 'subdescription')}</h2>
                                <p className="home__welcome-description__short-description" dangerouslySetInnerHTML={createMarkup(this.context.getMessage('home', 'shortDescription'))} />
                            </div>

                            {this.context.getMessage('home', 'description').map((description, key) =>
                                <p dangerouslySetInnerHTML={createMarkup(description)} key={key} />)}

                            <p className="home__welcome-description__connect">{this.context.getMessage('home', 'connect')}</p>
                        </div>

                        <div className="social-networks">
                            {socialNetworks.map((item, key) =>
                                <a href={item.url} target="_blank" className="social-network no-link-style" key={key}>
                                    <div dangerouslySetInnerHTML={{ __html: require(`../assets/img/icons/${item.iconName}?include`) }} className={['icon', 'social-icon', `social-icon--${item.className}`].join(' ')} />
                                </a>
                            )}
                        </div>

                        <footer dangerouslySetInnerHTML={createMarkup(this.context.getMessage('footer', 'description'))} />
                    </div>
                    <div className="home__right"></div>
                </section>
            </Main>
        )
    }
}

export default Index