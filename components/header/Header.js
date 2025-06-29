import { AppContext, LANGS, THEMES } from '../providers/AppProvider'
import Link from 'next/link'
import { useContext } from 'react'

import './header.css'

const LogoComponent = () => (
  <div className='left-header__name'>
    <Link href="/" passHref>
      <strong>CARLOHCS.ME</strong>
    </Link>
  </div>
)

const ToggleMenuComponent = () => {
  const { toggleMenu } = useContext(AppContext)

  return (
    <div className="trigger-menu-button" role="menubar" tabIndex="1" title="Menu" onClick={toggleMenu} onKeyDown={(e) => e.key === 'Enter' && toggleMenu()} />
  )
}

const ToggleLanguageComponent = () => {
  const { toggleLang, getMessage, getLang } = useContext(AppContext)

  return (
    <div className="toggle-language" role="menu">
      {Object.keys(LANGS).map((lang, index) => (
        <span role="menuitem" key={lang} tabIndex={index + 2} title={lang} onClick={() => toggleLang(LANGS[lang])} onKeyDown={(e) => e.key === 'Enter' && toggleLang(LANGS[lang])} className={['toggle-language__option', getLang() === LANGS[lang] ? 'toggle-language__option--active' : ''].join(' ')} aria-label={getMessage('toggleLang', `${lang.toLowerCase()}LangLabel`)}>{lang}</span>
      ))}
    </div>
  )
}

const ToggleThemeComponent = () => {
  const { toggleBetweenThemes, getMessage, getTheme } = useContext(AppContext)

  return (
    <div
      onClick={toggleBetweenThemes}
      onKeyDown={(e) => e.key === 'Enter' && toggleBetweenThemes()}
      className={['toggle-theme', getTheme() === THEMES.DARK ? 'toggle-theme--light' : 'toggle-theme--dark'].join(' ')}
      aria-label={getMessage('toggleTheme', 'aria')}
      title={getMessage('toggleTheme', 'title')}
      role="menuitem" tabIndex="4">
      <div dangerouslySetInnerHTML={{ __html: require('../../assets/img/icons/adjust-solid.svg?include') }} className="icon" />
    </div>
  )
}

export const Header = () => {
  return (
    <header data-close-menu>
      <div className='left-header'>
        <ToggleMenuComponent />
        <LogoComponent />
      </div>

      <div className="trigger-menu-button__hover"></div>
      <div className="header__actions">
        <ToggleLanguageComponent />
        <ToggleThemeComponent />
      </div>
    </header>
  )
}
