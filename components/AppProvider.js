import React, { Component } from 'react'
import storage from './helpers/storage'
import messages from '../etc/messages'
import { LANGS, THEMES, DEFAULT_LANG, DEFAULT_THEME } from '../components/helpers/constants'

// Sem precisar de Redux: 
// https://github.com/zeit/next.js/tree/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api
// https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/


const AppContext = React.createContext()

const MENU_OPEN = "menu-open"
const OVERFLOW = 'overflow--hidden'

    class AppProvider extends Component {
    
    state = {
        lang: DEFAULT_LANG,
        theme: DEFAULT_THEME
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
        // TypeError: Cannot read property 'toUpperCase' of undefined
        if(!val) {
            throw new Error('Invalid lang')
        }

        await this.changePropState('lang', LANGS[val.toUpperCase()])
        
        storage.saveLang(this.getLang())
        document.documentElement.lang = this.getLang()
    }

    /**
     * 
     */
    toggleTheme = async theme => {
        const bodyClassList = document.body.classList
        const darkUIClass = 'dark-ui'
        const choosedTheme = THEMES[theme.toUpperCase()]

        if(!choosedTheme) {
            throw new Error('invalid theme')
        }

        const activateDark = choosedTheme === THEMES.DARK
        bodyClassList[activateDark ? 'add' : 'remove'](darkUIClass)

        await this.changePropState('theme', choosedTheme)

        storage.saveTheme(this.getTheme())
    }

    /**
     * Altera o tema para dark ou não
     * https://medium.com/free-code-camp/how-to-detect-a-users-preferred-color-scheme-in-javascript-ec8ee514f1ef
     * 
     * @return {void}
     */
    toogleBetweenThemes = async () => {
        const bodyClassList = document.body.classList
        const darkUIClass = 'dark-ui'
        const activate = [...bodyClassList].indexOf(darkUIClass) === -1

        bodyClassList[activate ? 'add' : 'remove'](darkUIClass)

        // TODO: Implementar controle de horas
        // TODO: Implementar salvar o tema selecionado para quando o usuário trocar
        // de página

        // https://ozmoroz.com/2018/11/why-my-setstate-doesnt-work/
        // Before this this.state.count is 0
        // this.setState({count: 1});
        // Read this.state values immediately after updating them
        // console.log(this.state.count); // May print 0 or 1

        // Mudei par uma promise porque foi a única maneira de rodar
        await this.changePropState('theme', THEMES[activate ? 'DARK': 'LIGHT'])

        storage.saveTheme(this.getTheme())
    }

    /**
     * Altera a exibição do menu lateral
     * 
     * @return {void}
     */
    toggleMenu = () => {
        document.body.classList.toggle(MENU_OPEN)
        document.documentElement.classList.toggle(OVERFLOW)
    }

    /**
     * Altera a exibição do menu lateral
     * 
     * @return {void}
     */
    resetMenuBehavior = () => {
        document.body.classList.remove(MENU_OPEN)
        document.documentElement.classList.remove(OVERFLOW)
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

    /**
     * Retorna o tema definido
     * 
     * @return {String}
     */
    getTheme = () => {
        return this.state.theme
    }

    /**
     * Retorna o idioma definido
     * 
     * @return {String}
     */
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
                toogleBetweenThemes: this.toogleBetweenThemes,
                toggleMenu: this.toggleMenu,
                resetMenuBehavior: this.resetMenuBehavior,
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

// https://github.com/zeit/next.js/blob/2c7b4d8aaac475f81de21c0e9cb40fdea1a7a178/examples/with-context-api/components/CounterProvider.js#L7
const AppConsumer = AppContext.Consumer

export { AppConsumer, AppProvider, THEMES, LANGS }
export default AppContext