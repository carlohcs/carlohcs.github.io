import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href, className }) => {
  const active = router.pathname === href ? 'nav__item--active' : ''

  const handleClick = e => {
    e.preventDefault()
    
    if(href === '#') {
        return
    }

    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={[className, active].join(' ')}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)