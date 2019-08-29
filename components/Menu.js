import React, { Component } from 'react';
import { AppConsumer } from '../components/AppProvider'

class Menu extends Component {
    render() {
        const list = items =>
            <ul>
                {items.map((item, key) =>
                    <li key={key}>
                        <a href={item.url}>
                            {item.name}
                        </a>
                    </li>
                )}
            </ul>

        return (
            <AppConsumer>
                {({ getMessage }) => (
                    <ul>
                        {getMessage('menu').map((item, key) =>
                            <li key={key}>
                                <a href={item.url}>
                                    {item.name}
                                </a>

                                {item.items ? list(item.items) : ''}
                            </li>
                        )}
                    </ul>
                )}
            </AppConsumer >
        )
    }
}

export default Menu