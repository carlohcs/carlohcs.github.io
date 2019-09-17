const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
// const sslRedirect = require('heroku-ssl-redirect')
const routesHandler = routes.getRequestHandler(app)
const express = require('express')
const ENV = process.NODE_ENV
const HOST = 'carlohcs.me'
const BASE_URL = `https://${HOST}`

// https://www.npmjs.com/package/heroku-ssl-redirect

// https://github.com/fridays/next-routes#on-the-server

// https://medium.com/letsboot/basic-redirect-with-expressjs-f5acedf0ba9b
function handleRedirect(req, res, next) {
  let requestedUrl = req.originalUrl === '/' ? '' : req.originalUrl

  // Redireciona se o site não for 'carlohcs.me'
  if (ENV === 'production' && req.hostname !== HOST) {
    res.redirect(301, `${BASE_URL}${requestedUrl}`)
  } else {
    next()
  }
}

function forceSSL(req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect([BASE_URL, req.url].join(''))
  }
  return next();
};

app.prepare().then(() => {
  const server = express()
  
  if (ENV === 'production') {
    server
      .use(forceSSL)
  }
  

  server
    .use(handleRedirect)
    // .use(sslRedirect(['production'], 301)) // Habilita redirecionamento SSL
    .use(routesHandler) // Habilita rotas "/en/talks"
    .listen(process.env.PORT || 3000)
})
