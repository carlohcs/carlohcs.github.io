import { createContext, useEffect } from 'react'

import PropTypes from 'prop-types'

import { getMessage } from '../../hooks/use-get-message'
import { useLang } from '../../hooks/use-lang'
import { useTheme } from '../../hooks/use-theme'
import { LANGS, THEMES } from '../helpers/constants'

// Sem precisar de Redux:
// https://github.com/zeit/next.js/tree/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api
// https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/

const AppContext = createContext()

const MENU_OPEN = 'menu-open'
const OVERFLOW = 'overflow--hidden'

const AppProvider = ({ children }) => {
  const { theme, toggleTheme, toggleBetweenThemes } = useTheme()
  const { lang, toggleLang } = useLang()

  useEffect(() => {
    document.body.classList.add('hydrated')
  }, [])

  const toggleMenu = () => {
    document.body.classList.toggle(MENU_OPEN)
    document.documentElement.classList.toggle(OVERFLOW)
  }

  const resetMenuBehavior = () => {
    document.body.classList.remove(MENU_OPEN)
    document.documentElement.classList.remove(OVERFLOW)
  }

  return (
    <AppContext.Provider
      value={{
        lang,
        theme,
        toggleLang,
        toggleTheme,
        toggleBetweenThemes,
        toggleMenu,
        resetMenuBehavior,
        getMessage: (page, prop, subprop) => getMessage(lang, page, prop, subprop),
        themes: THEMES,
        langs: LANGS
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node
}

// https://github.com/zeit/next.js/blob/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api/components/CounterProvider.js#L7
const AppConsumer = AppContext.Consumer

export { AppConsumer, AppProvider, AppContext, THEMES, LANGS }
