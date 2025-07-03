import { useContext } from 'react'
import { AppContext } from '../components/providers/AppProvider'

export const useGetPageTitle = ({ title }) => {
  const { getMessage } = useContext(AppContext)
  const isBlogPost = typeof window !== 'undefined' && window.location.pathname.includes('/blog/')

  let finalTitle

  if (isBlogPost) {
    finalTitle = `${finalTitle} | Blog`
  }

  finalTitle = title ? `${title} ${getMessage('page', 'titleSuffix')}` : getMessage('page', 'defaultTitle')

  return finalTitle
}
