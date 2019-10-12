webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.
// TODO: Adicionar controle para navegação na mesma página. Apenas ocultar
// O menu ao invés de abrir novamente a página

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
      _routes__WEBPACK_IMPORTED_MODULE_3___default.a.routes.forEach(function (currentRoute) {
        if (route === currentRoute.pattern) {
          finalRoute = currentRoute.page;
          active = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("active"), activeClass);
        }
      }); // A rota está em pt

      if (!finalRoute) {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=index.js.536aa8bd3f26fa6710a8.hot-update.js.map