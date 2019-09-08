import React, { Component } from 'react'
import AppContext, { LANGS, THEMES } from '../components/AppProvider'

const languagueActiveOptionClass = 'toggle-language__option--active'

// Reacr Context: https://pt-br.reactjs.org/docs/context.html

class Header extends Component {
    static contextType = AppContext

    render() {
        return (
            <header className="container">
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
                <div className="trigger-menu-button" aria-label="Menu" onClick={() => this.context.toggleMenu()} />
                <div className="header__actions">
                    <div className="toggle-language">
                        <span onClick={() => this.context.toggleLang(LANGS['PT-BR'])} className={['toggle-language__option', this.context.getLang() === LANGS['PT-BR'] ? languagueActiveOptionClass : '' ].join(' ')}>PT-BR</span>
                        <span onClick={() => this.context.toggleLang(LANGS['EN'])} className={['toggle-language__option', this.context.getLang() === LANGS['EN'] ? languagueActiveOptionClass : '' ].join(' ')}>EN</span>
                    </div>

                    <div onClick={() => this.context.toggleTheme()}
                    className={['toggle-theme', this.context.getTheme() === THEMES.DARK ? 'toggle-theme--light' : 'toggle-theme--dark'].join(' ')}>
                        <div dangerouslySetInnerHTML={{ __html: require(`../assets/img/icons/adjust-solid.svg?include`) }} className="icon" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header