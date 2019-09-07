import { withRouter } from 'next/router'
import routes from '../routes'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, route, className }) => {
  const active = router.pathname === route ? 'nav__item--active' : ''

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
      routes.routes.forEach(currentRoute => {
        if(route === currentRoute.pattern) {
          finalRoute = currentRoute.page
        }
      })

      // A rota está em pt
      if(!finalRoute) {
        finalRoute = route
      }
    }

    router.push(finalRoute)
  }


  return (
      <a href={route} onClick={handleClick} className={[className, active].join(' ')}>
        {children}
      </a>
  )
}

export default withRouter(ActiveLink)