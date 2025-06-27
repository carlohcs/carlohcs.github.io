import React, { Component } from 'react'
import Main from '../layouts/main'
import AppContext from '../components/AppProvider'
import CustomHead from '../components/CustomHead'

const socialNetworks = [
  { iconName: 'github-brands.svg', className: 'github', url: 'https://github.com/carlohcs', title: 'Github' },
  { iconName: 'linkedin-in-brands.svg', className: 'linkedin', url: 'https://br.linkedin.com/in/carlohcs', title: 'LinkedIn' },
  // { iconName: 'twitter-brands.svg', className: 'twitter', url: 'https://www.twitter.com/carlohcs', title: 'Twitter' },
  // { iconName: 'facebook-brands.svg', className: 'facebook', url: 'https://www.facebook.com/carlohcs', title: 'Facebook' },
  // Falta o sourcerer.io
  { iconName: 'medium-m-brands.svg', className: 'medium', url: 'https://medium.com/@carlohcs', title: 'Medium' },
  { iconName: 'youtube-brands.svg', className: 'youtube', url: 'https://www.youtube.com/user/carlohcs', title: 'YouTube' },
  { iconName: 'strava-brands.svg', className: 'strava', url: 'https://www.strava.com/athletes/158753829', title: 'Strava' },
  { iconName: 'c-solid.svg', className: 'carlota-sounds', url: 'https://carlota-sounds.art/', title: 'Carlota Sounds' },
  { iconName: 'envelope-regular.svg', className: 'mail', url: 'mailto: carlohcs@gmail.com', title: 'E-mail' }
]

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

class Index extends Component {
  static contextType = AppContext

  render() {
    const createMarkup = value => ({ __html: value })
    const networksMessages = this.context.getMessage('home', 'networks')

    return (
      <>
        <CustomHead title="Home" />
        <Main>
          <style jsx global>{`
                    .home {
                        &__left {
                            @media (min-width: 1024px) {
                                min-width: 60%;
                            }

                            @media (min-width: 1280px) {
                                min-width: 50%;
                            }
                        }

                        &__right {
                            filter: saturate(.9);

                            @media (min-width: 1024px) and (min-height: 768px) {
                                display: block;
                                background: url(../static/img/home/carlohcs-lg.png) bottom right no-repeat;
                                background-size: contain;
                                position: absolute;
                                z-index: -1;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                width: 100%;
                                height: 100%;
                            }

                            @media (min-width: 1280px) {
                                width: 50%;
                                background-position: bottom left;
                                background-size: 800px;
                            }
                        }

                        &__carlohcs-photography {
                            &--xs {
                                width: 140px;
                                border-radius: 50%;
                                display: block;
                                margin: 20px auto;
                                box-shadow: #1dc779 0 0px 10px 0;

                                @media (min-width: 992px) {
                                    display: none;
                                }
                            }
                        }

                        &__welcome {
                            p {
                                @media (min-width: 1200px) {
                                    font-size: 1.6em;
                                    font-weight: 300;
                                    line-height: 1.4;
                                    /* max-width: 26em; */

                                    margin: 32px 0;
                                }
                            }
                        }
                        &__welcome-description {
                            &__short-description {
                                font-size: 14px;
                                line-height: 1.3;
                                margin-top: 0 !important;
                            }

                            & * {
                                margin: 0;
                            }

                            &__connect {
                                margin: 0 !important;
                            }
                        }

                        .social-networks {
                            display: inline-block;
                            padding: 5px 0;
                            
                            &__content {
                                display: flex;
                                justify-content: space-between;
                                width: 260px;
                                
                                /*margin: 0 auto;*/

                                @media (min-width: 768px) {
                                    /*margin: 0;*/
                                }
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

                        .footer {
                          color: #b0b0b0;
                        }
                    }

                    .footer {
                        margin-top: 20px;
                        display: block;
                        font-size: 12px;
                        font-style: italic;
                        color: #606060;

                        @media (min-width: 1200px) {
                            font-size: 18px;
                        }
                    }
                `}</style>
          <section className="home container">
            <div className="content">
              <div className="home__left">
                <img src={require('../assets/img/home/carlohcs-xs-2.jpg')} alt="Fotografia de Carlos Henrique" className="home__carlohcs-photography--xs" />

                <div className="page__description">
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
                    <div className="social-networks__content">
                      {socialNetworks.map((item, key) =>
                        <a href={item.url} target="_blank" className="social-network link--zoom no-link-style" key={key}
                          title={item.title}
                          aria-label={networksMessages[item.className]}
                          rel="noopener noreferrer">
                          <div dangerouslySetInnerHTML={{ __html: require(`../assets/img/icons/${item.iconName}?include`) }} className={['icon', 'social-icon', `social-icon--${item.className}`].join(' ')} />
                        </a>
                      )}
                    </div>
                  </div>

                  <footer className="footer" dangerouslySetInnerHTML={createMarkup(this.context.getMessage('footer', 'description'))} />
                </div>
              </div>
              <div className="home__right"></div>
            </div>
          </section>
        </Main>
      </>
    )
  }
}

export default Index
