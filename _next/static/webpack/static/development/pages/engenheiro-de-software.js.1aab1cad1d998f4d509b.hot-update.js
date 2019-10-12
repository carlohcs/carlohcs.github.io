webpackHotUpdate("static/development/pages/engenheiro-de-software.js",{

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.
// TODO: Adicionar controle para navegação na mesma página. Apenas ocultar
// O menu ao invés de abrir novamente a página

function findRoute(route) {
  var routeObject = {};
  _routes__WEBPACK_IMPORTED_MODULE_2___default.a.routes.forEach(function (currentRoute) {
    if (route === currentRoute.pattern) {
      routeObject = currentRoute;
    }
  });
  return routeObject;
}

var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      route = _ref.route,
      className = _ref.className;
  var activeClass = 'nav__item__link--active';
  var active = router.pathname === route ? activeClass : '';

  var handleClick = function handleClick(e) {
    e.preventDefault();
    var finalRoute = false;

    if (route === '#') {
      return;
    }

    if (route === '/') {
      finalRoute = '/';
    } else {
      // Procurando rotas inglês
      finalRoute = findRoute(route); // A rota está em pt

      if (finalRoute.page) {
        finalRoute = finalRoute.page;
      } else {
        finalRoute = route;
      }
    }

    router.push(finalRoute);
  };

  return __jsx("a", {
    href: route,
    onClick: handleClick,
    className: [className, active].join(' ')
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ })

})
//# sourceMappingURL=engenheiro-de-software.js.1aab1cad1d998f4d509b.hot-update.js.map