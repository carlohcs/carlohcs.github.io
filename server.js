const next = require('next');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);

// https://github.com/fridays/next-routes#on-the-server

// // With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})

// Without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//   createServer(handler).listen(3000)
// })

// const express = require('express');
// const { parse } = require('url');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare()
//   .then(() => {
//     const server = express();

//     server.get('/en/:path?', (req, res) => {
//       let searchRoute = {}
//       const currentPath = req.params.path

//       if(typeof currentPath === 'undefined') {
//         searchRoute = routes[0]
//       } else {
//         routes.forEach(route => {
//           if(route.pattern === currentPath) {
//             searchRoute = route
//           }
//         })
//       }
      
//       console.log('searchRoute:', searchRoute)

//       if(searchRoute.page) {
//         const page = searchRoute.page
//         console.log('foo', page)
//         return app.render(req, res, `${page}`, req.query);
//       }
//     })

//     server.get('*', (req, res) => handle(req, res));

//     server.listen(3000, (err) => {
//       if (err) throw err;
//       console.log('> Server rodando em http://localhost:3000');
//     });
//   });