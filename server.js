const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const routesHandler = routes.getRequestHandler(app)
const express = require('express')
const ENV = process.env.NODE_ENV
const HOST = 'carlohcs.me'
const BASE_URL = `https://${HOST}`

// https://github.com/fridays/next-routes#on-the-server

// https://medium.com/letsboot/basic-redirect-with-expressjs-f5acedf0ba9b
function handleRedirect(req, res, next) {
  let requestedUrl = req.originalUrl === '/' ? '' : req.originalUrl

  if (ENV === 'production' && req.hostname !== HOST) {
    return res.redirect(301, `${BASE_URL}${requestedUrl}`)
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
