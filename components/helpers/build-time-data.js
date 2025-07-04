export const getBuildTimeData = () => {
  // Durante build, usa dados injetados pelo webpack
  if (typeof window === 'undefined') {
    return {
      lang: process.env.BUILD_TIME_LANG || 'en',
      posts: process.env.BUILD_TIME_POSTS || [],
      theme: process.env.BUILD_TIME_THEME || 'light'
    }
  }

  // No cliente, retorna null para usar dados dinâmicos
  return null
}
