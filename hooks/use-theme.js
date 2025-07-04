import { useEffect, useState } from 'react'

import { DEFAULT_THEME, THEMES } from '../components/helpers/constants'
import { storage } from '../components/helpers/storage'

export const useTheme = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME)
  const [isHydrated, setIsHydrated] = useState(false)

  const getUserPreferredTheme = () => {
    if (typeof window === 'undefined') return DEFAULT_THEME

    const userPreferredTheme = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('content')
      .replace(/"/g, '')

    return userPreferredTheme === THEMES.DARK ? THEMES.DARK : DEFAULT_THEME
  }

  const toggleTheme = (newTheme) => {
    if (!THEMES[newTheme.toUpperCase()]) {
      throw new Error('Invalid theme')
    }

    setTheme(THEMES[newTheme.toUpperCase()])
  }

  const toggleBetweenThemes = () => {
    toggleTheme(theme === THEMES.DARK ? 'LIGHT' : 'DARK')
  }

  // Hidratação interna - executa apenas no cliente
  useEffect(() => {
    const savedTheme = storage.getTheme()
    const userPreferredTheme = getUserPreferredTheme()

    const finalTheme = savedTheme && savedTheme !== '' ? savedTheme : userPreferredTheme

    setTheme(finalTheme)
    setIsHydrated(true)
  }, [])

  // Atualiza DOM apenas após hidratação
  useEffect(() => {
    if (!isHydrated) {
      return
    }

    document.body.classList.toggle('dark-ui', theme === THEMES.DARK)
    storage.saveTheme(theme)
  }, [theme, isHydrated])

  return {
    theme,
    toggleTheme,
    toggleBetweenThemes,
    isDarkTheme: theme === THEMES.DARK
  }
}
