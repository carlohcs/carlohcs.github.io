import { useContext } from 'react'
import ActiveLink from '../activate-link/ActiveLink'
import { AppContext } from '../providers/AppProvider'

import './menu.css'

export const Menu = () => {
  const { getMessage } = useContext(AppContext)

  const list = items =>
    <ul className="nav__subnav">
      {items.map((item, key) =>
        <li key={key}>
          <ActiveLink route={item.name} className='nav__subitem'>
            {item.description}
          </ActiveLink>
        </li>
      )}
    </ul>

  return (
    <ul className="nav">
      {getMessage('menu').map((item, key) =>
        <li key={key} className="nav__item">
          <ActiveLink route={item.url}>
            {item.description}
          </ActiveLink>

          {item.items ? list(item.items) : ''}
        </li>
      )}
    </ul>
  )
}
