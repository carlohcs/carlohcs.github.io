import React, { Component } from 'react'
import AppContext, { LANGS, THEMES } from '../components/AppProvider'

const languagueActiveOptionClass = 'toggle-language__option--active'

// Reacr Context: https://pt-br.reactjs.org/docs/context.html

class Header extends Component {
  static contextType = AppContext

  render() {
    return (
      <header data-close-menu>
        <div className="trigger-menu-button" role="menubar" tabIndex="1" title="Menu" onClick={() => this.context.toggleMenu()} onKeyDown={(e) => e.key === 'Enter' ? this.context.toggleMenu() : ''} />
        <div className="trigger-menu-button__hover"></div>
        <div className="header__actions">
          <div className="toggle-language" role="menu">
            <span role="menuitem" tabIndex="2" title="PT-BR" onClick={() => this.context.toggleLang(LANGS['PT-BR'])} onKeyDown={(e) => e.key === 'Enter' ? this.context.toggleLang(LANGS['PT-BR']) : ''} className={['toggle-language__option', this.context.getLang() === LANGS['PT-BR'] ? languagueActiveOptionClass : ''].join(' ')} aria-label={this.context.getMessage('toggleLang', 'ptBrLangLabel')}>PT-BR</span>
            <span role="menuitem" tabIndex="3" title="EN" onClick={() => this.context.toggleLang(LANGS['EN'])} onKeyDown={(e) => e.key === 'Enter' ? this.context.toggleLang(LANGS['EN']) : ''} className={['toggle-language__option', this.context.getLang() === LANGS['EN'] ? languagueActiveOptionClass : ''].join(' ')} aria-label={this.context.getMessage('toggleLang', 'enLangLabel')}>EN</span>
          </div>

          <div onClick={() => this.context.toogleBetweenThemes()}
            onKeyDown={(e) => e.key === 'Enter' ? this.context.toogleBetweenThemes() : ''}
            className={['toggle-theme', this.context.getTheme() === THEMES.DARK ? 'toggle-theme--light' : 'toggle-theme--dark'].join(' ')}
            aria-label={this.context.getMessage('toggleTheme', 'aria')}
            title={this.context.getMessage('toggleTheme', 'title')}
            role="menuitem" tabIndex="4">
            <div dangerouslySetInnerHTML={{ __html: require('../assets/img/icons/adjust-solid.svg?include') }} className="icon" />
          </div>
        </div>
        <style jsx global>{`
                    header {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 20px;

                        @media screen and (min-width: 1024px) {
                            padding: 40px 40px 0;
                        }

                        @media screen and (min-width: 1280px) {
                            padding: 40px 80px 0;
                        }

                        @media screen and (min-width: 1440px) {
                            padding: 120px 120px 0;
                        }

                        div {
                            display: block;
                        }
                    }

                    .header__actions {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .toggle-language {
                        margin-right: 15px;

                        &__option {
                            cursor: pointer;
                            transition: opacity 300ms ease-in;
                            opacity: .8;
                            outline: none;

                            &:nth-of-type(1) {
                                &:after {
                                    content: "";
                                    width: 1px;
                                    height: 11px;
                                    display: inline-block;
                                    margin: 0 10px;
                                    background: #1e1e1e;
                                    position: relative;
                                }
                            }

                            &:hover,
                            &:active,
                            &:focus,
                            &--active {
                                opacity: 1;
                                font-weight: bold;
                            }
                        }
                    }

                    .toggle-theme {
                        cursor: pointer;
                        transition: opacity 300ms ease-in;
                        opacity: .8;
                        outline: none;

                        &:hover,
                        &:active,
                        &:focus {
                            opacity: 1;
                        }
                    }

                    /* https://codepen.io/made-on-mars/pen/qqEgXP */
                    .trigger-menu-button {
                        border-top: 3px solid #1e1e1e;
                        height: 30px;
                        width: 30px;
                        box-sizing: border-box;
                        position: relative;
                        z-index: 30;
                        cursor: pointer;
                        transition: opacity 300ms ease-in;
                        opacity: .8;
                        outline: none;

                        &:before, 
                        &:after {
                            content: "";
                            display: block;
                            position: absolute;
                            height: 3px;
                            width: 30px;
                            left: 0;
                            background: #1e1e1e;
                            transition: all 0.3s ease-in;
                        }

                        &:before {
                            top: 8px;
                        }

                        &:after {
                            top: 20px;
                        }

                        &:hover,
                        &:active,
                        &:focus {
                            opacity: 1;

                            & + .trigger-menu-button__hover {
                                opacity: 1;
                            }
                        }

                        &__hover {
                            width: 60px;
                            height: 60px;
                            margin-top: -16px;
                            margin-left: -15px;
                            border-radius: 50%;
                            position: absolute;
                            background-color: rgba(154, 154, 154, 0.1);
                            opacity: 0;
                            transition: opacity 600ms cubic-bezier(0.47, 0.99, 1, 0.99);

                            @media (min-width: 1024px) {
                                width: 80px;
                                height: 80px;
                                margin-top: -26px;
                                margin-left: -25px;
                            }
                        }
                    }
            `}</style>
      </header>
    )
  }
}

export default Header
