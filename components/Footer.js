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
                                text-align: center;

                                small {
                                    font-size: 10px;
                                }

                                @media screen and (min-width: 768px) {
                                    text-align: left;

                                    small {
                                        font-size: 12px;
                                    }
                                }
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