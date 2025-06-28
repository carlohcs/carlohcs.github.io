import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { findRoute } from './helpers/find-route'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

// TODO: Adicionar controle para navegação na mesma página. Apenas ocultar
// O menu ao invés de abrir novamente a página

const ActiveLink = ({ children, router, route, className }) => {
  const activeClass = 'nav__item__link--active'
  const currentPath = router.pathname
  const findCurrentRoute = findRoute(route).page
  let active =
    currentPath === route || findCurrentRoute === currentPath ? activeClass : ''

  const handleClick = (e) => {
    e.preventDefault()

    if (route === '#') {
      return
    }

    // Procurando rotas inglês
    const finalRoute = findRoute(route).name

    router.push(finalRoute !== 'home' ? finalRoute : '/')
  }

  return (
    <a
      href={route}
      data-page={findCurrentRoute}
      onClick={handleClick}
      className={[className, active].join(' ')}
    >
      {children}
    </a>
  )
}

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default withRouter(ActiveLink)
