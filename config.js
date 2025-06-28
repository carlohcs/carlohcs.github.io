const config = {
  development: {
    host: 'localhost',
    baseUrl: 'http://localhost:3000'
  },
  production: {
    host: 'carlohcs.me',
    baseUrl: 'https://carlohcs.me'
  }
}

const makeConfig = () => {
  const env = process.env.NODE_ENV || 'development'

  return { ...config[env], env  }
}

module.exports = {
  makeConfig,
  config
}
