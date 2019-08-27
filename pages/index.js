import React, { Component } from 'react'
import Main from '../layouts/main'
import { AppConsumer } from '../components/AppProvider'

class Index extends Component {
    render() {
        return (
            <AppConsumer>
                {({ getMessage, toggleLang, toggleTheme }) => (
                    <Main>
                        <h1>TESTE! {getMessage('home', 'welcome')}</h1>
                        <button onClick={() => toggleLang('EN')}>Inglês!</button>
                        <br />
                        <button onClick={toggleTheme}>Tema Dark</button>
                    </Main>
                )}
            </AppConsumer>
        )
    } 
}

export default Index