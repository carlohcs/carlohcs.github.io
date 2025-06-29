import { useContext } from 'react'
import { Main } from '../layouts/main'
import { AppContext } from '../components/providers/AppProvider'
import { createMarkup } from '../components/helpers/create-markup'

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

import './index.css'

const Index = () => {
  const { getMessage } = useContext(AppContext)
  const networksMessages = getMessage('home', 'networks')

  // KEEP: data-close-menu -> usado para fechar o menu quando clicar fora dele
  return (
    <Main>
      <section className="home container">
        <div className="content">
          <div className="home__left">
            <img src={require('../assets/img/home/carlohcs-xs-2.jpg')} alt="Fotografia de Carlos Henrique" className="home__carlohcs-photography--xs" />

            <div className="page__description">
              <div className="home__welcome">
                <div className="home__welcome-description">
                  <h1 className="home__welcome-description__welcome">{getMessage('home', 'welcome')}</h1>
                  <h2 className="home__welcome-description__subdescription">{getMessage('home', 'subdescription')}</h2>
                  <p className="home__welcome-description__short-description" dangerouslySetInnerHTML={createMarkup(getMessage('home', 'shortDescription'))} />
                </div>

                {getMessage('home', 'description').map((description, key) =>
                  <p dangerouslySetInnerHTML={createMarkup(description)} key={key} />)}

                <p className="home__welcome-description__connect">{getMessage('home', 'connect')}</p>
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

              <footer className="footer" dangerouslySetInnerHTML={createMarkup(getMessage('footer', 'description'))} />
            </div>
          </div>
          <div className="home__right"></div>
        </div>
      </section>
    </Main>
  )
}

export default Index
