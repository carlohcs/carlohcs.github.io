import React, { Component } from 'react'
import ActiveLink from './ActiveLink'
import AppContext from '../components/AppProvider'

class Menu extends Component {
    static contextType = AppContext

    render() {
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
            <>
                <style jsx global>{`
                .nav {
                    position: absolute;
                    z-index: 10;
                    margin: 20px 0 20px 20px;
                    padding: 0;
                    overflow:hidden;
                    height: 100%;

                    /*.nav__subnav {
                        padding-left: 0;

                        a {
                            font-size: 14px;
                            padding-left: 20px;
                            margin: 5px 0;
                            border: 0;
                        }
                    }*/

                    li {
                        list-style-type: none;
                        display: block;
                    }

                    &__item {
                        width: 0;
                        margin-left: -120px;
                        transition: width 0.6s ease-in, margin-left 0.6s ease-in;

                        /*.nav__subitem {
                            padding: 5px;
                            margin-left: 0px;
                        }*/
                    }

                    a {
                        display: block;
                        height: 30px;
                        border: none;

                        /*&::before, 
                        &::after {
                            display: none;
                        }*/

                        /* https://www.w3schools.com/cssref/css3_pr_text-overflow.asp */
                        white-space: nowrap; 
                        overflow: hidden;
                        
                        &.nav__item__link--active {
                            font-weight: bold;
                        }
                    }
                }
                `}</style>
                <ul className="nav">
                    {this.context.getMessage('menu').map((item, key) =>
                        <li key={key} className="nav__item">
                            <ActiveLink route={item.url}>
                                {item.description}
                            </ActiveLink>

                            {item.items ? list(item.items) : ''}
                        </li>
                    )}
                </ul>
            </>
        )
    }
}

export default Menu