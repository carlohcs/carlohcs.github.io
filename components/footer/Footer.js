import { useContext } from 'react'

import { AppContext } from '../AppProvider'
import { createMarkup } from '../helpers/create-markup'

import './footer.css'

const Footer = () => {
  const { getMessage } = useContext(AppContext)

  return (
    <footer>
      <small dangerouslySetInnerHTML={createMarkup(getMessage('footer', 'description'))} />
    </footer>
  )
}

export default Footer
