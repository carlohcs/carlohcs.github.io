import { useContext, useEffect, useState } from 'react'
import Router, { withRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../components/header/Header'
import { Menu } from '../components/menu/Menu'
import { AppContext } from '../components/providers/AppProvider'
import { DEFAULT_LANG, THEMES, DEFAULT_THEME } from '../components/helpers/constants'
import PropTypes from 'prop-types'
import { storage } from '../components/helpers/storage'
import { Introduction } from '../components/page/Introduction'
import { findRoute } from '../components/helpers/find-route'
import { CustomHead } from '../components/custom-head/CustomHead'

// https://nextjs.org/learn/basics/using-shared-components/the-layout-component

// Fonts vs SVG: https://fontawesome.com/how-to-use/on-the-web/other-topics/performance

const Main = withRouter(({ children, router }) => {
  const { getMessage, toggleTheme, toggleLang, resetMenuBehavior } = useContext(AppContext)
  const [loadedConfigs, setLoadedConfigs] = useState(false)
  const [translationKey, setTranslationKey] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const pageClasses = `page-component ${isTransitioning ? 'page-exit-active' : 'page-enter-active'}`

  const handleRouteChangeStart = () => {
    setIsTransitioning(true)
  }

  const handleRouteChangeComplete = () => {
    resetMenuBehavior()
    setTimeout(() => {
      setIsTransitioning(false)
    }, 100)
  }

  const handleRouteChangeError = () => {
    setIsTransitioning(false)
  }

  const handleCloseMenu = (evt) => {
    if (evt.target.getAttribute('data-close-menu')) {
      resetMenuBehavior()
    }
  }

  useEffect(() => {
    // Adicionar event listeners
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)
    Router.events.on('routeChangeError', handleRouteChangeError)

    const savedTheme = storage.getTheme() // BUG: só está salvando um item por vez
    const savedLang = storage.getLang() // BUG: só está salvando um item por vez
    const contextLang = getMessage('page', 'lang')

    // Se o usuário já possuía um tema salvo
    if (savedTheme && savedTheme !== '') {
      toggleTheme(savedTheme)
    } else {
      // Se ele possuir uma preferência de tema
      const userPreferedTheme = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('content')
        .replace(/"/g, '')

      toggleTheme(userPreferedTheme === THEMES.DARK ? THEMES.DARK : DEFAULT_THEME)
    }

    // Se houver uma língua salva anteriormente
    const definedLang = savedLang && savedLang !== '' && savedLang !== contextLang

    toggleLang(definedLang ? savedLang : DEFAULT_LANG)

    document.body.addEventListener('click', handleCloseMenu)

    const translationKey = findRoute(router.route).name

    setLoadedConfigs(true)
    setTranslationKey(translationKey)

    return () => {
      document.body.removeEventListener('click', handleCloseMenu)

      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
      Router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  const mainContent = !loadedConfigs && !isTransitioning ? '' : <div className={pageClasses} data-close-menu>
    {children}
  </div>

  return (
    <div className="app">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="msapplication-navbutton-color" content="#1e1e1e"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#1e1e1e" />
        <meta name="author" content="Carlos Henrique Carvalho de Santana" />
        <meta name="description" content={getMessage('page', 'seoDescription')} />
        <meta property="og:description" content={getMessage('page', 'seoDescription')} />
        <meta property="og:url" content="https://carlohcs.me" />
        <meta property="og:title" content={getMessage('page', 'seoTitle')} />
        <meta property="twitter:title" content={getMessage('page', 'seoTitle')} />
        <meta property="og:image" content="/static/img/home/carlohcs-xs-2.jpg" />
        <meta property="og:image:alt" content={getMessage('page', 'seoAltImageTitle')} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@carlohcs" />
        <meta property="twitter:creator" content="@carlohcs"/>
        <meta property="twitter:image" content="https://carlohcs.me/static/img/home/carlohcs-xs-2.jpg" />
        <meta name="keywords" content="Carlos Henrique Carvalho de Santana, Carlos Henrique, Carlos, Henrique, Carvalho, Santana, portfólio, portfolio" />
        <meta data-hid="og:site_name" name="og:site_name" property="og:site_name" content="Carlos Henrique Carvalho de Santana" />
        <meta httpEquiv="Content-Language" content="pt-br, en" />

        {/* FAVICON */}
        {/* https://realfavicongenerator.net/your-favicon-is-ready */}
        <link rel="icon" href="/static/img/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/static/img/favicon/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicon/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/apple-touch-icon.png" />

        {/* PWA Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/static/img/favicon/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/static/img/favicon/web-app-manifest-512x512.png" />

        <meta name="apple-mobile-web-app-title" content="Carlohcs" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/static/manifest.json" />

        {/* Preload de imagens críticas - baixa automaticamente */}
        <link rel="preload" as="image" href="/static/img/home/carlohcs-lg.png" />
        <link rel="preload" as="image" href="/static/img/home/carlohcs-xs-2.jpg" />

        {/* Prefetch para imagens de outras páginas - quando o navegador estiver livre */}
        <link rel="prefetch" as="video" href="/static/video/godaddy.webm" />
        <link rel="prefetch" as="image" href="/static/img/projects/godaddy.png" />
        <link rel="prefetch" as="image" href="/static/img/skills/instructor.png" />
        <link rel="prefetch" as="image" href="/static/img/skills/productowner.png" />
        <link rel="prefetch" as="image" href="/static/img/skills/facilitator.png" />

        <link href="https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Menu />
      {isTransitioning && <div className="loading-indicator" />}
      { translationKey &&
          <>
            <CustomHead title={getMessage(translationKey, 'title')} />
            {translationKey !== 'home' && <Introduction translationKey={translationKey} />}
          </>
      }

      { mainContent }
    </div>
  )
})

Main.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object
}

// https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function?answertab=votes#tab-top
// https://reactjs.org/docs/hooks-reference.html#usecontext
export {
  Main
}
