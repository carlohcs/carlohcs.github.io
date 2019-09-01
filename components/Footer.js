import React, { Component } from 'react'
import { AppConsumer } from '../components/AppProvider'


class Footer extends Component {
    render() {
        const createMarkup = value => ({ __html: value })
        return (
            <AppConsumer>
                {({ getMessage }) => (
                    <div>
                        <style jsx>{`
                            footer {
                                padding: 20px;
                                line-height: 1.3;
                            }
                        `}
                        </style>
                        <footer>
                            <small dangerouslySetInnerHTML={createMarkup(getMessage('footer', 'description'))} />
                        </footer>
                    </div>
                )}
            </AppConsumer>
        )
    }
}

export default Footer