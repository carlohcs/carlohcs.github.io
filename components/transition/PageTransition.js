import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const PageTransition = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Adiciona classe que previne transitions durante navegação
      document.body.classList.add('page-transitioning')
    }

    const handleRouteChangeComplete = () => {
      // Remove classe após navegação completar
      setTimeout(() => {
        document.body.classList.remove('page-transitioning')
      }, 50)
    }

    // Listeners para eventos do router
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeComplete)

    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeComplete)
    }
  }, [router])

  return children
}
