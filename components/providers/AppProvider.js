import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { storage } from '../helpers/storage'
import { messages } from '../../etc/messages'
import { LANGS, THEMES, DEFAULT_LANG, DEFAULT_THEME } from '../helpers/constants'

// Sem precisar de Redux:
// https://github.com/zeit/next.js/tree/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api
// https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/

const AppContext = createContext()

const MENU_OPEN = 'menu-open'
const OVERFLOW = 'overflow--hidden'

const AppProvider = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false)
  const [lang, setLang] = useState(DEFAULT_LANG)
  const [theme, setTheme] = useState(DEFAULT_THEME)

  // Hidratação após mount (evita SSR/client mismatch)
  useEffect(() => {
    const savedLang = storage.getLang() || DEFAULT_LANG
    const savedTheme = storage.getTheme() || DEFAULT_THEME

    setLang(savedLang)
    setTheme(savedTheme)
    setIsHydrated(true)
  }, [])

  // Aplica idioma apenas após hidratação
  useEffect(() => {
    if (!isHydrated) return

    document.documentElement.lang = lang
    storage.saveLang(lang)
  }, [lang, isHydrated])

  useEffect(() => {
    if (!isHydrated) return

    document.body.classList.toggle('dark-ui', theme === THEMES.DARK)
    storage.saveTheme(theme)
  }, [theme, isHydrated])

  const toggleLang = (val) => {
    if (!val) {
      throw new Error('Invalid lang')
    }

    setLang(LANGS[val.toUpperCase()])
  }

  const toggleTheme = (newTheme) => {
    if (!THEMES[newTheme.toUpperCase()]) {
      throw new Error('Invalid theme')
    }

    setTheme(THEMES[newTheme.toUpperCase()])
  }

  const getMessage = (page, prop, subprop) => {
    const content = messages[lang][page]

    if (prop && subprop) {
      return content[prop][subprop]
    }

    if (prop) {
      return content[prop]
    }

    return content
  }

  const toggleBetweenThemes = () => {
    toggleTheme(theme === THEMES.DARK ? 'LIGHT' : 'DARK')
  }

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
        getMessage,
        getTheme: () => theme,
        getLang: () => lang,
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
