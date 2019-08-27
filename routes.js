const routes = require('next-routes')();

const customRoutes = [
    {
        name: 'home',
        pattern: '/en/', 
        page:  'index', 
        data: {}
    },
    {
        name: 'engenheiro',
        pattern: '/en/experience/software-engineer', 
        page:  'experiencia/engenheiro-de-software', 
        data: {}
    },
    {
        name: 'instrutor',
        pattern: '/en/experience/instructor', 
        page:  'experiencia/instrutor', 
        data: {}
    },
    {
        name: 'palestras',
        pattern: '/en/experience/talks', 
        page:  'experiencia/palestras', 
        data: {}
    },
    {
        name: 'productowner',
        pattern: '/en/experience/product-owner', 
        page:  'experiencia/productowner', 
        data: {}
    },
    {
        name: 'facilitator',
        pattern: '/en/experience/facilitator', 
        page:  'experiencia/facilitador', 
        data: {}
    },
    {
        name: 'curriculo',
        pattern: '/en/resume', 
        page:  'curriculo', 
        data: {}
    }
];

customRoutes.map(route => routes.add(route));

module.exports = routes;