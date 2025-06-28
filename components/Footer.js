import { Component } from 'react'
import { AppConsumer } from '../components/AppProvider'
import { createMarkup } from './helpers/create-markup'

class Footer extends Component {
  render() {
    return (
      <AppConsumer>
        {({ getMessage }) => (
          <footer>
            <style jsx>{`
                            footer {
                                padding: 20px 0;
                                line-height: 1.3;
                                /*text-align: center;*/

                                small {
                                    font-size: 10px;
                                }

                                @media screen and (min-width: 768px) {
                                    text-align: left;

                                    small {
                                        font-size: 12px;
                                    }
                                }

                                @media screen and (min-width: 1280px) {
                                    position: absolute;
                                    bottom: 0;
                                    padding-bottom: 60px;
                                }
                            }
                        `}
            </style>
            <small dangerouslySetInnerHTML={createMarkup(getMessage('footer', 'description'))} />
          </footer>
        )}
      </AppConsumer>
    )
  }
}

export default Footer
