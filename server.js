const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const sslRedirect = require('heroku-ssl-redirect')
const routesHandler = routes.getRequestHandler(app)
const express = require('express')

// https://www.npmjs.com/package/heroku-ssl-redirect

// https://github.com/fridays/next-routes#on-the-server

// // With express

app.prepare().then(() => {
  express()
    .use(routesHandler) // Habilita rotas "/en/talks"
    .use(sslRedirect()) // Habilita redirecionamento SSL
    .listen(3000)
})

