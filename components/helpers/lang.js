const env = process.env || {}

// https://stackoverflow.com/questions/46072248/node-js-how-to-detect-user-language?answertab=votes#tab-top
const language = env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES || ( navigator.userLanguage || navigator.language )

const lang = {
    getCurrentLanguage() {
        return language
    },
    getCurrentLanguageFormated() {
        return language.split('.')[0].toLowerCase().replace('_', '-')
    },
    isPTBR() {
        return language.indexOf('pt_BR') > -1
    },
    isEN() {
        return language.indexOf('en_') > -1
    }
}

export default lang
