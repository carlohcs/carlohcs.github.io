import React, { Component } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import 'normalize.css'
import AppContext from '../components/AppProvider'
import GlobalStyle from '../components/GlobalStyle'
import { DEFAULT_LANG, THEMES, DEFAULT_THEME } from '../components/helpers/constants'

// https://nextjs.org/learn/basics/using-shared-components/the-layout-component

// Fonts vs SVG: https://fontawesome.com/how-to-use/on-the-web/other-topics/performance

// TODO: Resolver
// Warning: Main defines an invalid contextType. contextType should point to the Context object returned by React.createContext(). Did you accidentally pass the Context.Consumer instead?
// O modo utilizado agora não é eficiente, pois o usuário consegue ver o tema sendo mudado em tempo de abertura da página
class Main extends Component {
  static contextType = AppContext

  constructor(props) {
    super(props)

    this.state = { loadedConfigs: false }

    // https://github.com/zeit/next.js/#router-events
    // routeChangeStart(url) - Fires when a route starts to change
    // routeChangeComplete(url) - Fires when a route changed completely
    // routeChangeError(err, url) - Fires when there's an error when changing routes, or a route load is cancelled
    // beforeHistoryChange(url) - Fires just before changing the browser's history
    // hashChangeStart(url) - Fires when the hash will change but not the page
    // hashChangeComplete(url) - Fires when the hash has changed but not the page
    Router.events.on('routeChangeComplete', url => {
      // console.log('App is changing to: ', url)
      this.context.resetMenuBehavior()
    })
  }
  
  componentDidMount() {
    const storage = require('../components/helpers/storage').default
    // const lang = require('../components/helpers/lang').default
    const savedTheme = storage.getTheme() // BUG: só está salvando um item por vez
    const savedLang = storage.getLang() // BUG: só está salvando um item por vez
    const contextLang = this.context.getLang() 

    // Se o usuário já possuía um tema salvo
    if (savedTheme && savedTheme !== '') {
      this.context.toggleTheme(savedTheme)
    } else {
      // Se ele possuir uma preferência de tema
      const userPreferedTheme = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue('content')
          .replace(/"/g, '')

      if(userPreferedTheme === THEMES.DARK) {
        // Então o tema do usuário é dark
        this.context.toggleTheme(THEMES.DARK)
      } else {
        // salva o tema padrão
        this.context.toggleTheme(DEFAULT_THEME)
      }
    }

    // Se houver uma língua salva anteriormente
    if (savedLang && savedLang !== '' && savedLang !== contextLang) {
      this.context.toggleLang(savedLang)
    } else {
      // salva a língua padrão
      this.context.toggleLang(DEFAULT_LANG)
    }

    document.body.addEventListener('click', this.handleCloseMenu.bind(this))

    this.setState({ loadedConfigs: true })
  }

  /**
   * Faz o handle para verificar se irá fechar o menu ou não
   * 
   * @param {HTMLEvent} evt 
   */
  handleCloseMenu(evt) {
    if(evt.target.getAttribute('data-close-menu')) {
      this.context.resetMenuBehavior()
    }
  }

  render() {
    const loadedConfigs = this.state.loadedConfigs
    const mainContent = !loadedConfigs ? '' : <div className="main-content" data-close-menu>
        {this.props.children}
      </div>

    return (
      <div className="app">
        <GlobalStyle />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#1e1e1e" />
          <meta name="msapplication-navbutton-color" content="#1e1e1e"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="#1e1e1e" />
          <meta name="author" content="Carlos Henrique Carvalho de Santana" />
          <meta name="description" content={this.context.getMessage('page', 'seoDescription')} />
          <meta property="og:description" content={this.context.getMessage('page', 'seoDescription')} />
          <meta property="og:url" content="https://carlohcs.me" />
          <meta property="og:title" content={this.context.getMessage('page', 'seoTitle')} />
          <meta property="twitter:title" content={this.context.getMessage('page', 'seoTitle')} />
          <meta property="og:image" content="https://carlohcs.me/static/img/home/carlohcs-xs.png" />
          <meta property="og:image:alt" content={this.context.getMessage('page', 'seoAltImageTitle')} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="article" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@carlohcs" />
          <meta property="twitter:creator" content="@carlohcs"/>
          <meta property="twitter:image" content="https://carlohcs.me/static/img/home/carlohcs-xs.png" />
          <meta name="keywords" content="Carlos Henrique Carvalho de Santana, Carlos Henrique, Carlos, Henrique, Carvalho, Santana, portfólio, portfolio" />
          <meta data-hid="og:site_name" name="og:site_name" property="og:site_name" content="Carlos Henrique Carvalho de Santana" />
          <meta httpEquiv="Content-Language" content="pt-br, en" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <Menu />
        { mainContent }
      </div>
    )
  }
}

// https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function?answertab=votes#tab-top
// https://reactjs.org/docs/hooks-reference.html#usecontext
export default Main