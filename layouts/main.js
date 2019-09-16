import React, { Component } from 'react'
import Head from 'next/head'
// import Router from 'next/router'
import Header from '../components/Header'
import Menu from '../components/Menu'
import 'normalize.css'
import AppContext from '../components/AppProvider'
import GlobalStyle from '../components/GlobalStyle'

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

    // Router.events.on('routeChangeStart', url => {
    //   console.log('App is changing to: ', url)
    // })
  }
  
  componentDidMount() {
    const storage = require('../components/helpers/storage').default
    const savedTheme = storage.getTheme()
    const savedLang = storage.getLang()

    if (savedTheme !== '' && savedTheme !== this.context.getTheme()) {
      this.context.toggleTheme(savedTheme === this.context.themes.DARK)
    }

    if (savedLang !== '' && savedLang !== this.context.getLang()) {
      this.context.toggleLang(savedLang)
    }

    this.setState({ loadedConfigs: true })
  }

  render() {
    const loadedConfigs = this.state.loadedConfigs
    const mainContent = !loadedConfigs ? '' : <div className="main-content">
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
          <meta property="og:image" content="/static/img/home/carlohcs-xs.png" />
          <meta property="og:image:alt" content={this.context.getMessage('page', 'seoAltImageTitle')} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="article" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@carlohcs" />
          <meta property="twitter:creator" content="@carlohcs"/>
          <meta property="twitter:image" content="/static/img/home/carlohcs-xs.png" />
          <meta name="keywords" content="Carlos Henrique Carvalho de Santana, Carlos Henrique, Carlos, Henrique, Carvalho, Santana, portfólio, portfolio" />
          <meta data-hid="og:site_name" name="og:site_name" property="og:site_name" content="Carlos H. Carvalho de Santana" />
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