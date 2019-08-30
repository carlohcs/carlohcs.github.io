import React, { Component } from 'react'
import { AppConsumer } from '../components/AppProvider'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDark: false
        }
    }
    toggleMenu() {
        document.body.classList.toggle('menu-open')
    }
    toggleIsDark() {
        const isDark = !this.state.isDark ? true : false
        this.setState({
            isDark: isDark
        })
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
                        }

                        .toggle-language {
                            margin-left: 10px;
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
                                <div>
                                    <span onClick={() => toggleLang('PT-BR')}>PT-BR</span> |
                                    <span onClick={() => toggleLang('EN')}>EN</span>
                                </div>

                                <div onClick={() => {
                                    this.toggleIsDark()
                                    toggleTheme()
                                }}
                                className="toggle-language">
                                    {this.state.isDark ? 'LIGHT' : 'DARK'}
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