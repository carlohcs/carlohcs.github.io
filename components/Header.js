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
                    <header>
                        <style jsx global>{`
                            header {
                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;
                                padding: 20px;

                                @media screen and (min-width: 1280px) {
                                    padding: 60px;
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

                            .toggle-theme {
                                cursor: pointer;
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
                            }
                    `}</style>
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
                )}
            </AppConsumer>
        )
    }
}

export default Header