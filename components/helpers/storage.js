const STORAGE_KEY = 'carlohcs.me'
const TOGGLE_THEME_KEY = 'theme'
const TOGGLE_LANG_KEY = 'lang'

// if (process.env === 'test') {
// console.log('process', process.env)
//   if (typeof localStorage === 'undefined' || localStorage === null) {
//     const LocalStorage = require('node-localstorage').LocalStorage;
//     localStorage = new LocalStorage('./etc/scratch');
//   }
// }

// TODO: rever toda essa lógica
export const storage = {
  setInitial: key => {
    let finalData = {}

    try {
      finalData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch (_err) {
      // Se não conseguir, inicializa o objeto
      finalData = {}
    }

    if (!finalData) {
    // Se não conseguir, inicializa o objeto
      finalData = {}
      finalData[key] = ''
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalData))
  },
  set: (key, value) => {
    let data = false

    if (typeof localStorage === 'undefined') {
      return false
    }

    try {
      data = JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch (_err) {
      storage.setInitial(key)

      data = JSON.parse(localStorage.getItem(STORAGE_KEY))
    }

    data[key] = value

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  },
  /**
   * Retorna o objeto da chave definida
   *
   * @param  {String}
   * @return {Object}
   */
  get: key => {
    let data = false

    if (typeof localStorage === 'undefined') {
      return false
    }

    try {
      data = JSON.parse(localStorage.getItem(STORAGE_KEY))[key]
    } catch (_err) {
      storage.setInitial(key)

      return storage.get(key)
    }

    return data
  },

  getAll: () => {
    let data

    try {
      data = JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch (err) {
      throw new Error(`Nothing is defined with key ${STORAGE_KEY}`)
    }

    return data
  },

  getTheme: () => {
    return storage.get(TOGGLE_THEME_KEY)
  },
  saveTheme: theme => {
    storage.set(TOGGLE_THEME_KEY, theme)
  },
  getLang: () => {
    return storage.get(TOGGLE_LANG_KEY)
  },
  saveLang: lang => {
    storage.set(TOGGLE_LANG_KEY, lang)
  }
}

// TODO: adicionar nos testes unitários
// localStorage.clear()
// const lang = storage.getLang()
// console.log('lang should be empty', lang)
// const saveLang = storage.saveLang('pt')
// const savedLang = storage.getLang()
// console.log('lang should be pt: ', savedLang)

// const theme = storage.getTheme()
// console.log('theme should be empty', theme)
// const saveTheme = storage.saveTheme('dark')
// const savedTheme = storage.getTheme()
// console.log('theme should be dark: ', savedTheme)

// console.log('all values: ', storage.getAll())

// const saveAnotherLang = storage.saveLang('en')
// const savedAnotherLang = storage.getLang()
// console.log('lang should be en: ', savedAnotherLang)

// console.log('all values: ', storage.getAll())
