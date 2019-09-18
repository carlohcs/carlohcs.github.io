import { withRouter } from 'next/router'
import routes from '../routes'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

// TODO: Adicionar controle para navegação na mesma página. Apenas ocultar
// O menu ao invés de abrir novamente a página

function findRoute(route) {
  let routeObject = {}

  routes.routes.forEach(currentRoute => {
    if(route === currentRoute.pattern) {
      routeObject = currentRoute
    }
  })

  return routeObject
}

const ActiveLink = ({ children, router, route, className }) => {
  const activeClass = 'nav__item__link--active'
  const currentPath = router.pathname
  const findCurrentRoute = findRoute(route).page
  let active = currentPath === route || findCurrentRoute === currentPath ? activeClass : ''
  let findEnPage = {}

  const handleClick = e => {
    e.preventDefault()
    let finalRoute = false

    if(route === '#') {
        return
    }

    if(route === '/') {
      finalRoute = '/'
    } else {
      // Procurando rotas inglês
      findEnPage = findRoute(route)

      // A rota está em pt
      if(findEnPage.page) {
        finalRoute = findEnPage.page
      } else {
        finalRoute = route
      }
    }

    router.push(finalRoute)
  }

  return (
      <a href={route} data-page={findCurrentRoute} onClick={handleClick} className={[className, active].join(' ')}>
        {children}
      </a>
  )
}

export default withRouter(ActiveLink)