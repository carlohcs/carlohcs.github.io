import { useContext, useEffect, useState } from 'react'
import Router, { withRouter } from 'next/router'
import { Header } from '../components/header/Header'
import { Menu } from '../components/menu/Menu'
import { AppContext } from '../components/providers/AppProvider'
import PropTypes from 'prop-types'
import { Introduction } from '../components/page/Introduction'
import { Meta } from '../components/meta/Meta'
import { useGetTranslationKey } from '../hooks/use-get-translation-key'

// https://nextjs.org/learn/basics/using-shared-components/the-layout-component

// Fonts vs SVG: https://fontawesome.com/how-to-use/on-the-web/other-topics/performance

const Main = withRouter(({ children, router, customTitle, customTitleDescription, customDescription }) => {
  const { resetMenuBehavior } = useContext(AppContext)
  const translationKey = useGetTranslationKey(router)
  const [loadedConfigs, setLoadedConfigs] = useState(false)
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
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)
    Router.events.on('routeChangeError', handleRouteChangeError)

    document.body.addEventListener('click', handleCloseMenu)

    setLoadedConfigs(true)

    return () => {
      document.body.removeEventListener('click', handleCloseMenu)

      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
      Router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  const hasIntroduction = (translationKey || customTitle || customTitleDescription || customDescription)
  const excludedIntroduction = ['home'].includes(translationKey)

  const mainContent = !loadedConfigs && !isTransitioning ? '' : <div className={pageClasses} data-close-menu>
    { (hasIntroduction && !excludedIntroduction) && <Introduction title={customTitle} titleDescription={customTitleDescription} description={customDescription} /> }
    {children}
  </div>

  return (
    <div className="app">
      <Meta customTitle={customTitle} />
      <Header />
      <Menu />
      { isTransitioning && <div className="loading-indicator" /> }
      { mainContent }
    </div>
  )
})

Main.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object,
  customTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  customTitleDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  customDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

// https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function?answertab=votes#tab-top
// https://reactjs.org/docs/hooks-reference.html#usecontext
export {
  Main
}
