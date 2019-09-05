const STORAGE_KEY = 'carlohcs'
const TOGGLE_THEME_KEY = 'carlohcs_theme'
const TOGGLE_LANG_KEY = 'carlohcs_lang'

// TODO: rever toda essa lógica
const storage = {
  setInitial: key => {
    let finalData = JSON.stringify(localStorage.getItem(STORAGE_KEY))

    if(typeof finalData !== 'string') { // null
      finalData[key] = {}
    } else {
      finalData = {}
      finalData[key] = {}
    }

    localStorage.setItem(STORAGE_KEY, finalData)
  },
  set: (key, prop, value) => {
    let data = storage.get(key)
    const finalData = {}

    if (!data) {
      storage.setInitial(key)
    }

    data = storage.get(key)

    if (data) {
      finalData[key] = data
    }

    finalData[key][prop] = value

    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalData))
  },
  get: key => {
    let data = false

    try {
      data = JSON.parse(localStorage.getItem(STORAGE_KEY))[key]
    } catch (err) {}

    if (data[key]) {
      data = data[key]
    }

    return data
  },
  getTheme: () => {
    return storage.get(TOGGLE_THEME_KEY)
  },
  saveTheme: theme => {
    storage.set(TOGGLE_THEME_KEY, 'current', theme)
  },
  getLang: () => {
    return storage.get(TOGGLE_LANG_KEY)
  },
  saveLang: lang => {
    storage.set(TOGGLE_LANG_KEY, 'current', lang)
  },
}

export default storage