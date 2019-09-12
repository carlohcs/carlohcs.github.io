const routes = require('next-routes')();

const customRoutes = [
    {
        name: 'home',
        pattern: '/en/', 
        page:  'index'
    },
    {
        name: 'engenheiro',
        pattern: '/en/software-engineer', 
        page:  'engenheiro-de-software'
    },
    {
        name: 'habilidades',
        pattern: '/en/skills', 
        page:  'habilidades'
    },
    {
        name: 'palestras',
        pattern: '/en/talks', 
        page:  'palestras'
    },
    {
        name: 'curriculo',
        pattern: '/en/resume', 
        page:  'curriculum-vitae'
    }
];

customRoutes.map(route => routes.add(route));

module.exports = routes;