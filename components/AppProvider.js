import React, { Component } from 'react'
import messages from '../etc/messages'

// Sem precisar de Redux: 
// https://github.com/zeit/next.js/tree/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api
// https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/

const LANGS = {
    'PT-BR': 'pt-br',
    'EN': 'en',
}

const THEMES = {
    'LIGHT': 'light',
    'DARK': 'dark',
}

const AppContext = React.createContext()

class AppProvider extends Component {
    state = {
        lang: LANGS['PT-BR'],
        theme: THEMES.LIGHT,
        messages: messages
    }

    /**
     * Altera uma única propriedade
     * 
     * @param {String} prop 
     * @param {Mix} value 
     */
    changePropState(prop, value) {
        let newState = Object.assign({}, this.state)

        newState[prop] = value

        this.setState(newState)
    }

    /**
     * Altera a linguagem
     * 
     * @param  {String} val
     * @return {void
     */
    toggleLang = val => {
        this.changePropState('lang', LANGS[val])
    }

    /**
     * Altera o tema para dark ou não
     * 
     * @return {void}
     */
    toggleTheme = () => {
        const bodyClassList = document.body.classList
        const darkUIClass = 'dark-ui'
        const activate = [...bodyClassList].indexOf(darkUIClass) === -1

        bodyClassList[activate ? 'add' : 'remove'](darkUIClass)

        this.changePropState('theme', THEMES[activate ? 'DARK': 'LIGHT'])
    }

    /**
     * 
     * Retorna uma mensagem já traduzida de acordo com o contexto
     * 
     * @param  {String} page
     * @param  {String} prop
     * @return {String}
     */
    getMessage = (page, prop) => {
        const content = this.state.messages[this.state.lang][page]

        if(prop) {
            return content[prop]
        }

        return content
    }

    render() {
        return <AppContext.Provider
            value={{
                lang: this.state.lang,
                theme: this.state.theme,
                toggleLang: this.toggleLang,
                toggleTheme: this.toggleTheme,
                getMessage: this.getMessage
            }}
            >
                {this.props.children}
            </AppContext.Provider>
    }
}

const AppConsumer = AppContext.Consumer

// https://github.com/zeit/next.js/blob/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api/components/CounterProvider.js#L7
export default AppProvider
export { AppConsumer }