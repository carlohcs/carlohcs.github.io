const STORAGE_KEY = 'carlohcs';
const TOGGLE_THEME_KEY = 'carlohcs_theme';

// TODO: Implementar na troca de linguagem e de tema

const storage = {
  setInitial: key => {
    const data = {}

    data[key] = {}

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
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
  fetchStepsValues: stepName => {
    return storage.get(CREATE_MISSION_KEY, stepName)
  },
  saveStepValue: (stepName, value) => {
    return storage.set(CREATE_MISSION_KEY, stepName, value)
  }
}

export default storage