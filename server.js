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

// Middleware de segurança - adiciona headers de proteção
function securityHeaders(req, res, next) {
  // Proteção contra iframe embedding (clickjacking)
  res.setHeader('X-Frame-Options', 'DENY')

  // Prevenção de MIME sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff')

  // Proteção XSS (Cross-Site Scripting)
  res.setHeader('X-XSS-Protection', '1; mode=block')

  // Content Security Policy
  res.setHeader('Content-Security-Policy',
    'default-src \'self\'; ' +
    'script-src \'self\' \'unsafe-inline\' https://www.google-analytics.com; ' +
    'style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; ' +
    'font-src \'self\' https://fonts.gstatic.com; ' +
    'img-src \'self\' data: https:; ' +
    'connect-src \'self\' https://www.google-analytics.com; ' +
    'frame-ancestors \'none\';'
  )

  // Strict Transport Security (HTTPS)
  if (envConfig.env === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  }

  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')

  next()
}

app.prepare().then(() => {
  const server = express()

  server
    .use(securityHeaders) // Headers de segurança
    .use(handleRedirect) // Redireciona se o site não for 'carlohcs.me'

    // Serve sitemap.xml na raiz (convenção SEO padrão)
    .get('/sitemap.xml', (req, res) => {
      res.sendFile('sitemap.xml', { root: './static' })
    })

    // Serve robots.txt na raiz (convenção SEO padrão)
    .get('/robots.txt', (req, res) => {
      res.sendFile('robots.txt', { root: './static' })
    })

    .use('/static', express.static('static')) // Serve arquivos estáticos da pasta 'static'
    .use(routesHandler) // Habilita rotas "/en/software-engineer"
    .listen(process.env.PORT || 3000)
})
