import { useContext } from 'react'
import { AppContext } from '../components/providers/AppProvider'
import { getImageUrl } from '../components/helpers/get-image-url'
import { useGetTranslationKey } from './use-get-translation-key'
import { useGetPageTitle } from './use-get-page-title'

export const useMetaContent = ({ router, customTitle }) => {
  const { getMessage, lang } = useContext(AppContext)

  const translationKey = useGetTranslationKey(router)

  const title = useGetPageTitle({ title: customTitle || getMessage(translationKey, 'title') })

  const host = 'https://carlohcs.me'

  const url = router.route?.fullPath || `${host}${router.asPath}`

  // const title = getMessage('meta', 'title')
  // const description = getMessage('meta', 'description')
  // const imageUrl = getImageUrl(getMessage('meta', 'image'))
  const seoDescription = translationKey && translationKey !== 'home' ? getMessage(translationKey, 'titleDescription') : getMessage('page', 'seoDescription')
  const seoImage = `${host}${getImageUrl('home/carlohcs-xs-2.jpg')}`
  const seoImageTitle = getMessage('page', 'seoAltImageTitle')

  const locales = {
    'PT-BR': 'pt_BR',
    'EN': 'en_US'
  }

  const locale = locales[lang.toUpperCase()] || locales['EN']

  return {
    url,
    title,
    description: seoDescription,
    image: seoImage,
    imageAlt: seoImageTitle,
    keywords: 'Carlos Henrique Carvalho de Santana, Carlos Henrique, Carlos, Henrique, Carvalho, Santana, portfólio, portfolio, software engineer, frontend developer, react, javascript',
    author: 'Carlos Henrique Carvalho de Santana',
    siteName: 'Carlos Henrique Carvalho de Santana',
    locale
  }
}
