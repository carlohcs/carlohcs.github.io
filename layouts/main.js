import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import 'normalize.css'
import Footer from '../components/Footer';
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
    const mainContent = !loadedConfigs ? '' : <div className="main-content container">
        {this.props.children}
        <Footer />
      </div>

    return (
      <div className="app">
        <GlobalStyle />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap" rel="stylesheet"></link>
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