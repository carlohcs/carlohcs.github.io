import App from 'next/app'
import Router from 'next/router'
import { AppProvider } from '../components/providers/AppProvider'
import withGA from 'next-ga'

import 'normalize.css'
import '../styles/globals.css'

// https://github.com/zeit/next.js/blob/canary/examples/with-next-page-transitions/pages/_app.js
// https://stackoverflow.com/questions/53857063/changing-state-on-route-change-next-js?answertab=active#tab-top
// https://jscomplete.com/learn/react-beyond-basics/react-cfp

// Interessante essa transição
// https://page-transitions-app-next.now.sh/

class MyApp extends App {
  constructor(props) {
    super(props)

    Router.events.on('routeChangeComplete', (_url) => {
      const classList = document.body.classList
      const menuOpen = 'menu-open'

      if ([...classList].indexOf(menuOpen) !== -1) {
        classList.remove(menuOpen)
      }
    })
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props

    return (
      <>
        <AppProvider key={router.route}>
          <Component {...pageProps} key={router.route} />
        </AppProvider>
      </>
    )
  }
}

// https://www.npmjs.com/package/next-ga
export default  withGA('UA-41452796-2', Router)(MyApp)
