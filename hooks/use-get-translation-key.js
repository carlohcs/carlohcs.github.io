import { useEffect, useState } from 'react'
import { findRoute } from '../components/helpers/find-route'

export const useGetTranslationKey = (router) => {
  const [translationKey, setTranslationKey] = useState('home')

  useEffect(() => {
    if (router && router.route) {
      const currentRoute = router.route
      let findRouteName = findRoute(currentRoute).name

      if (currentRoute === '/blog' || currentRoute.startsWith('/blog/')) {
        findRouteName = 'blog'
      }

      if (!findRouteName) {
        findRouteName = 'home'
      }

      setTranslationKey(findRouteName)
    }
  }, [router])

  return translationKey
}
