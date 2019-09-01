import React, { Component } from 'react'
import { AppConsumer } from '../components/AppProvider'

const LANGS = {
    'PT-BR': 'PT-BR',
    'EN': 'EN'
}

const languagueActiveOptionClass = 'toggle-language__option--active'

class Header extends Component {
    state = {
        currentLanguage: 'PT-BR',
        isDark: false
    }

    /**
     * Altera uma única propriedade
     * 
     * @param {String} prop 
     * @param {Mix} value 
     */
    _setPropState(prop, value) {
        let newState = Object.assign({}, this.state)

        newState[prop] = value

        this.setState(newState)
    }

    toggleMenu() {
        document.body.classList.toggle('menu-open')
    }

    toggleIsDark() { 
        this._setPropState('isDark', !this.state.isDark ? true : false)
    }

    toggleCurrentLanguage(currentLanguage) {
        this._setPropState('currentLanguage', currentLanguage)
    }

    render() {
        return (
            <AppConsumer>
                {({ toggleLang, toggleTheme }) => (
                    <div>
                        <style jsx global>{`
                        header {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            padding: 20px 20px 0;
                        }

                        header div {
                            display: block;
                        }

                        .header__actions {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .toggle-language {
                            margin-right: 10px;

                            &__option {
                                cursor: pointer;

                                &:nth-of-type(1) {
                                    &:after {
                                        content: "";
                                        width: 1px;
                                        height: 11px;
                                        display: inline-block;
                                        margin: 0 5px;
                                        background: #1e1e1e;
                                        position: relative;
                                    }
                                }

                                &--active {
                                    font-weight: bold;
                                }
                            }
                        }

                        .dark-ui .toggle-language {

                            &__option {
                                &:nth-of-type(1) {
                                    &:after {
                                        background: #e1e1e1;
                                    }
                                }
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
                            transition: all 0.3s ease-in;
                        }

                        .trigger-menu-button:before, 
                        .trigger-menu-button:after {
                            content: "";
                            display: block;
                            position: absolute;
                            height: 3px;
                            width: 30px;
                            left: 0;
                            background: #1e1e1e;
                            transition: all 0.3s ease-in;
                        }

                        .trigger-menu-button:before {
                            top: 8px;
                        }

                        .trigger-menu-button:after {
                            top: 20px;
                        }

                        body.menu-open .trigger-menu-button {
                            border-color:transparent;
                        }

                        body.menu-open .trigger-menu-button:before,
                        body.menu-open .trigger-menu-button:after {
                            width: 33px;
                            left: -2px;
                        }

                        body.menu-open .trigger-menu-button:before {
                            transform: rotate(45deg);
                        }

                        body.menu-open .trigger-menu-button:after {
                            transform: rotate(135deg);
                            top: 9px;
                        }

                        body.dark-ui:not(.menu-open) .trigger-menu-button {
                            border-top-color: #e1e1e1;
                        }

                        body.dark-ui .trigger-menu-button:before,
                        body.dark-ui .trigger-menu-button:after {
                            background: #e1e1e1;
                        }

                        .app {
                            overflow: hidden !important;
                        }
                        body.menu-open {
                            .nav li {
                              width: 200px;
                              margin-left: 0;
                            }

                            .main-content {
                                transform: scale(0.80) translateY(-10%);
                                margin-left: 200px;
                                background-color: rgba(29, 199, 121, .12);
                                filter: blur(5px);
                            }
                        }
                    `}</style>
                        <header>
                            <div className="trigger-menu-button" aria-label="Menu" onClick={this.toggleMenu}>
                            </div>

                            <div className="header__actions">
                                <div className="toggle-language">
                                    <span onClick={() => {
                                        toggleLang(LANGS['PT-BR'])
                                        this.toggleCurrentLanguage(LANGS['PT-BR'])
                                    }} className={['toggle-language__option', this.state.currentLanguage === LANGS['PT-BR'] ? languagueActiveOptionClass : '' ].join(' ')}>PT-BR</span>
                                    <span onClick={() => {
                                        toggleLang(LANGS['EN'])
                                        this.toggleCurrentLanguage(LANGS['EN'])
                                    }} className={['toggle-language__option', this.state.currentLanguage === LANGS['EN'] ? languagueActiveOptionClass : '' ].join(' ')}>EN</span>
                                </div>

                                <div onClick={() => {
                                    this.toggleIsDark()
                                    toggleTheme()
                                }}
                                className={['toggle-theme', this.state.isDark ? 'toggle-theme--light' : 'toggle-theme--dark'].join(' ')}>
                                    <div dangerouslySetInnerHTML={{ __html: require(`../assets/img/icons/adjust-solid.svg?include`) }} className="icon" />
                                </div>
                            </div>
                        </header>
                    </div>
                )}
            </AppConsumer>
        )
    }
}

export default Header