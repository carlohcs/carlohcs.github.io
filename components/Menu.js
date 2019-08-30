import React, { Component } from 'react';
import { AppConsumer } from '../components/AppProvider'

class Menu extends Component {
    render() {
        const list = items =>
            <ul className="nav__subnav">
                {items.map((item, key) =>
                    <li key={key}>
                        <a href={item.url} className="nav__subitem">
                            {item.name}
                        </a>
                    </li>
                )}
            </ul>

        return (
            <AppConsumer>
                {({ getMessage }) => (
                    <div>
                        <style jsx global>{`
                        .nav {
                            position: absolute;
                            z-index: 10;
                            margin: 20px 0 20px 20px;
                            padding: 0;
                            overflow:hidden;

                            .nav__subnav {
                                padding-left: 0;

                                a {
                                    font-size: 14px;
                                    padding-left: 20px;
                                    margin: 5px 0;
                                }
                            }

                            li {
                                list-style-type:none;
                                display: block;
                            }

                            &__item {
                              width: 0;
                              margin-left: -120px;
                              transition: width 0.6s ease-in, margin-left 0.6s ease-in;

                              .nav__subitem {
                                padding: 5px;
                                margin-left: 0px;
                              }
                            }

                            a {
                                display: block;
                                height: 30px;
                                margin: 10px 0;
                                border: none;
                                &::before, &::after {
                                    display: none;
                                }

                                /* https://www.w3schools.com/cssref/css3_pr_text-overflow.asp */
                                white-space: nowrap; 
                                overflow: hidden;
                                
                            }
                          }
                        `}</style>    
                        <ul className="nav">
                            {getMessage('menu').map((item, key) =>
                                <li key={key} className="nav__item">
                                    <a href={item.url}>
                                        {item.name}
                                    </a>

                                    {item.items ? list(item.items) : ''}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </AppConsumer >
        )
    }
}

export default Menu