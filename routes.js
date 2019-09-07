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
        name: 'instrutor',
        pattern: '/en/instructor', 
        page:  'instrutor'
    },
    {
        name: 'palestras',
        pattern: '/en/talks', 
        page:  'palestras'
    },
    {
        name: 'productowner',
        pattern: '/en/product-owner', 
        page:  'productowner'
    },
    {
        name: 'facilitator',
        pattern: '/en/facilitator', 
        page:  'facilitador'
    },
    {
        name: 'curriculo',
        pattern: '/en/resume', 
        page:  'curriculo'
    }
];

customRoutes.map(route => routes.add(route));

module.exports = routes;