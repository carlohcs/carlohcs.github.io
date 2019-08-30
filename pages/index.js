import React, { Component } from 'react'
import Main from '../layouts/main'
import { AppConsumer } from '../components/AppProvider'

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

class Index extends Component {
    render() {
        const createMarkup = value => ({__html: value})
        return (
            <AppConsumer>
                {({ getMessage }) => (
                    <Main>
                        <h1>{getMessage('home', 'welcome')}</h1>
                        <h2>{getMessage('home', 'welcomeSubdescription')}</h2>

                        {getMessage('home', 'description').map((description, key) =>
                            <p dangerouslySetInnerHTML={createMarkup(description)} key={key} />)}

                        <p>{getMessage('home', 'connect')}</p>
                    </Main>
                )}
            </AppConsumer>
        )
    }
}

export default Index