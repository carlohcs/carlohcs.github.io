export const getImageUrl = (imagePath) => {
  try {
    const ext = imagePath.split('.').pop().toLowerCase()
    const optimizedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif']
    const staticOnlyExtensions = ['ico']

    if (staticOnlyExtensions.includes(ext)) {
      return `/static/img/${imagePath}`
    }

    if (optimizedExtensions.includes(ext)) {
      return require(`../../static/img/${imagePath}`)
    }

    if (ext === 'svg') {
      try {
        return require(`../../static/img/${imagePath}`)
      } catch {
        return `/static/img/${imagePath}`
      }
    }

    return `/static/img/${imagePath}`
  } catch (error) {
    console.warn(`Could not optimize image: ${imagePath}`, error)
    return `/static/img/${imagePath}`
  }
}
