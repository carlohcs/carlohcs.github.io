const nextRoutes = require('next-routes')

const customRoutes = [
  {
    name: 'home',
    patterns: ['/en/', '/'],
    page:  '/'
  },
  {
    name: 'engineer',
    // patterns: ['/en/software-engineer', '/engenheiro-de-software'],
    patterns: ['/engineer'],
    page:  '/engineer'
  },
  {
    name: 'skills',
    // patterns: ['/en/skills', '/habilidades'],
    patterns: ['/skills'],
    page:  '/skills'
  },
  {
    name: 'resume',
    // patterns: ['/en/resume', '/curriculum-vitae'],
    patterns: ['/resume'],
    page:  '/resume'
  }
]

const routes = nextRoutes()

// customRoutes.forEach(route => routes.add(route))

module.exports = {
  routes,
  customRoutes
}
