import { useContext } from 'react'

import Link from 'next/link'

import { AppContext, LANGS, THEMES } from '../providers/AppProvider'

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
  const { toggleLang, getMessage, lang } = useContext(AppContext)

  return (
    <div className="toggle-language" role="menu">
      {Object.keys(LANGS).map((currentLang, index) => (
        <span
          role="menuitem"
          key={currentLang}
          tabIndex={index + 2}
          title={currentLang}
          onClick={() => toggleLang(currentLang)}
          onKeyDown={(e) => e.key === 'Enter' && toggleLang(currentLang)}
          className={[
            'toggle-language__option',
            LANGS[currentLang] === lang ? 'toggle-language__option--active' : ''
          ].join(' ')}
          aria-label={getMessage('toggleLang', `${currentLang.toLowerCase()}LangLabel`)}
        >
          {currentLang}
        </span>
      ))}
    </div>
  )
}

const ToggleThemeComponent = () => {
  const { toggleBetweenThemes, getMessage, theme } = useContext(AppContext)

  return (
    <div
      onClick={toggleBetweenThemes}
      onKeyDown={(e) => e.key === 'Enter' && toggleBetweenThemes()}
      className={['toggle-theme', theme === THEMES.DARK ? 'toggle-theme--light' : 'toggle-theme--dark'].join(' ')}
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
