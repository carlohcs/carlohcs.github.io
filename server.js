const next = require('next')
const { routes } = require('./routes')
const { makeConfig } = require('./config')
const express = require('express')

const envConfig = makeConfig()
const app = next({ dev: envConfig.env !== 'production' })
const routesHandler = routes.getRequestHandler(app)

// https://github.com/fridays/next-routes#on-the-server

// https://medium.com/letsboot/basic-redirect-with-expressjs-f5acedf0ba9b
function handleRedirect(req, res, next) {
  let requestedUrl = req.originalUrl === '/' ? '' : req.originalUrl

  if (envConfig.env === 'production' && req.hostname !== envConfig.host) {
    return res.redirect(301, `${envConfig.baseUrl}${requestedUrl}`)
  } else {
    return next()
  }
}

app.prepare().then(() => {
  const server = express()

  server
    .use(handleRedirect) // Redireciona se o site não for 'carlohcs.me'
    .use('/static', express.static('static')) // Serve arquivos estáticos da pasta 'static'
    .use(routesHandler) // Habilita rotas "/en/software-engineer"
    .listen(process.env.PORT || 3000)
})
