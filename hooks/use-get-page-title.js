import { useContext } from 'react'
import { AppContext } from '../components/providers/AppProvider'
import { messages } from '../etc/messages'

export const useGetPageTitle = ({ title }) => {
  const { getMessage } = useContext(AppContext)
  const isBlogPost = typeof window !== 'undefined' && window.location.pathname.includes('/blog/')

  let finalTitle

  if (isBlogPost) {
    finalTitle = `${finalTitle} | Blog ${messages['en'].page.titleSuffix}`
  }

  finalTitle = title ? `${title} ${getMessage('page', 'titleSuffix')}` : getMessage('page', 'defaultTitle')

  return finalTitle
}
