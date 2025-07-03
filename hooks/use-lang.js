import { useEffect, useState } from 'react'
import { DEFAULT_LANG, LANGS } from '../components/helpers/constants'
import { storage } from '../components/helpers/storage'

export const useLang = () => {
  const [lang, setLang] = useState(DEFAULT_LANG)
  const [isHydrated, setIsHydrated] = useState(false)

  const toggleLang = (val) => {
    let targetLang = val

    if (LANGS[val.toUpperCase()]) {
      targetLang = LANGS[val.toUpperCase()]
    }

    const isValidValue = Object.values(LANGS).includes(targetLang)

    if (!isValidValue) {
      throw new Error(`Invalid language: ${val}`)
    }

    setLang(targetLang)
  }

  // Hidratação interna - executa apenas no cliente
  useEffect(() => {
    const savedLang = storage.getLang() || DEFAULT_LANG

    setLang(savedLang)
    setIsHydrated(true)
  }, [])

  // Atualiza DOM apenas após hidratação
  useEffect(() => {
    if (!isHydrated) {
      return
    }

    document.documentElement.lang = lang
    storage.saveLang(lang)
  }, [lang, isHydrated])

  return {
    lang,
    toggleLang
  }
}
