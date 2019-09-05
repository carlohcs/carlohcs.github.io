import React, { Component } from 'react'
import storage from './helpers/storage'
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
        theme: THEMES.LIGHT
    }

    /**
     * Altera uma única propriedade
     * 
     * @param {String} prop 
     * @param {Mix} value 
     */
    changePropState = async (prop, value) => {
        const setStateFunction = (state, props) => {
            const newState = {...state}
            newState[prop] = value;

            return newState;
        }

        return await this.setState(setStateFunction)
    }

    /**
     * Altera a linguagem
     * 
     * Esse método não precisa ser assíncrono pois não estou esperando
     * o retorno dele para definir algum outro comportamento
     * em detrimento a essa mudança
     * @param  {String} val
     * @return {void
     */
    toggleLang = async val => {
        await this.changePropState('lang', LANGS[val.toUpperCase()])
        
        storage.saveLang(this.getLang())
    }

    /**
     * Altera o tema para dark ou não
     * 
     * @return {void}
     */
    toggleTheme = async activateDarkUI => {
        const bodyClassList = document.body.classList
        const darkUIClass = 'dark-ui'
        const activate = !activateDarkUI && [...bodyClassList].indexOf(darkUIClass) === -1
        let finalActivate = activateDarkUI || activate

        bodyClassList[finalActivate ? 'add' : 'remove'](darkUIClass)

        // TODO: Implementar controle de horas
        // TODO: Implementar salvar o tema selecionado para quando o usuário trocar
        // de página

        // https://ozmoroz.com/2018/11/why-my-setstate-doesnt-work/
        // Before this this.state.count is 0
        // this.setState({count: 1});
        // Read this.state values immediately after updating them
        // console.log(this.state.count); // May print 0 or 1

        // Mudei par uma promise porque foi a única maneira de rodar
        await this.changePropState('theme', THEMES[finalActivate ? 'DARK': 'LIGHT'])

        storage.saveTheme(this.getTheme())
    }

    /**
     * 
     * Retorna uma mensagem já traduzida de acordo com o contexto
     * 
     * @param  {String} page
     * @param  {String} subprop
     * @param  {String} prop
     * @return {String}
     */
    getMessage = (page, prop, subprop) => {
        const content = messages[this.state.lang][page]

        if(prop && subprop) {
            return content[prop][subprop]
        }

        if(prop) {
            return content[prop]
        }

        return content
    }

    getTheme = () => {
        return this.state.theme
    }

    getLang = () => {
        return this.state.lang
    }

    render() {
        return <AppContext.Provider
            value={{
                lang: this.state.lang,
                theme: this.state.theme,
                toggleLang: this.toggleLang,
                toggleTheme: this.toggleTheme,
                getMessage: this.getMessage,
                getTheme: this.getTheme,
                getLang: this.getLang,
                themes: THEMES,
                langs: LANGS
            }}
            >
                {this.props.children}
            </AppContext.Provider>
    }
}

const AppConsumer = AppContext.Consumer

// https://github.com/zeit/next.js/blob/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api/components/CounterProvider.js#L7
export default AppProvider
export { AppConsumer, THEMES, LANGS }