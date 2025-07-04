const genericConfig = {
  locales: {
    'PT-BR': 'pt_BR',
    'EN-US': 'en_US'
  }
}

const defaultConfig = {
  development: {
    host: 'localhost',
    baseUrl: 'http://localhost:3000',
    port: 3000
  },
  production: {
    host: 'carlohcs.me',
    baseUrl: 'https://carlohcs.me'
  }
}

const makeConfig = () => {
  const env = process.env.APP_ENV || 'production'

  return { ...genericConfig, ...defaultConfig[env], env, isProd: env === 'production' }
}

module.exports = {
  makeConfig,
  config: makeConfig()
}
