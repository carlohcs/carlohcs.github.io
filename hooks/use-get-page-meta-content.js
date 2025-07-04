import { getImageUrl } from '../components/helpers/get-image-url'
import { config } from '../etc/config'
import { messages as defaultMessages } from '../etc/messages'

export const useGetPageMetaContent = (page) => {
  const isDefault = page === 'default' || page === 'home'
  const messages = defaultMessages['en']

  const pageImage = isDefault ? 'default' : page
  const image = `${config.baseUrl}${getImageUrl(`meta/${pageImage}.png`)}`

  return {
    title: `${messages[page].title} ${messages.page.titleSuffix}`,
    description: messages[page].seoDescription || messages[page].titleDescription || messages[page].description,
    image,
    imageAlt: messages[page].title,
    locale: 'en_US'
  }
}
