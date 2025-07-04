import { useContext } from 'react'

import { getBuildTimeData } from '../components/helpers/build-time-data'
import { getImageUrl } from '../components/helpers/get-image-url'
import { AppContext } from '../components/providers/AppProvider'
import { config } from '../etc/config'
import { messages } from '../etc/messages'
import { customRoutes } from '../routes'
import { useGetHost } from './use-get-host'
import { useGetPageTitle } from './use-get-page-title'
import { useGetTranslationKey } from './use-get-translation-key'

const defaultPageMessage = messages['en'].page

export const useMetaContent = ({ router, customTitle }) => {
  const { getMessage, lang } = useContext(AppContext)
  const buildTimeData = getBuildTimeData()
  const isServer = typeof window === 'undefined'
  const host = useGetHost()

  const defaultSeoContent = {
    title: defaultPageMessage.seoTitle,
    description: defaultPageMessage.seoDescription,
    image: `${host}${getImageUrl('home/carlohcs-xs-2.jpg')}`,
    imageAlt: defaultPageMessage.seoAltImageTitle
  }

  const translationKey = useGetTranslationKey(router)

  const title = useGetPageTitle({ title: customTitle || getMessage(translationKey, 'title') })
  const currentLang = buildTimeData?.lang || lang || 'en'
  const locale = config.locales[currentLang.toUpperCase()] || config.locales['EN']

  const getMessageSafe = (key, prop, fallback = '') => {
    if (buildTimeData && isServer) {
      let staticMessages =  {}

      customRoutes.forEach(route => {
        staticMessages[route.name] = {
          title: messages['en'][route.name].title,
          titleDescription: messages['en'][route.name].titleDescription,
          description: messages['en'][route.name].description
          // TODO:
          // image: messages['en'][route.name].image
        }
      })

      staticMessages.page = messages['en'].page

      return staticMessages[key]?.[prop] || fallback
    }

    return getMessage ? getMessage(key, prop) : fallback
  }

  const url = `${host}${router.asPath}`

  const description = translationKey && translationKey !== 'home' ? getMessageSafe(translationKey, 'titleDescription') : getMessageSafe('page', 'seoDescription')

  // Evita mismatch entre servidor e cliente
  const seoImageTitle = getMessageSafe('page', 'seoAltImageTitle')

  return {
    url,
    title: title || defaultSeoContent.title,
    description: description || defaultSeoContent.description,
    image: defaultSeoContent.image,
    imageAlt: seoImageTitle || defaultSeoContent.imageAlt,
    keywords: 'Carlos Henrique Carvalho de Santana, Carlos Henrique, Carlos, Henrique, Carvalho, Santana, portfólio, portfolio, software engineer, frontend developer, react, javascript',
    author: 'Carlos Henrique Carvalho de Santana',
    siteName: 'Carlos Henrique Carvalho de Santana',
    locale
  }
}
