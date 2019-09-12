webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./assets/img/icons/adjust-solid.svg?include":
/*!***************************************************!*\
  !*** ./assets/img/icons/adjust-solid.svg?include ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var raw = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"adjust\" class=\"svg-inline--fa fa-adjust fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z\"></path></svg>"; module.exports = raw; exports.default = raw;

/***/ }),

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

var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      route = _ref.route,
      className = _ref.className;
  var active = router.pathname === route ? 'nav__item--active' : '';

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
      _routes__WEBPACK_IMPORTED_MODULE_2___default.a.routes.forEach(function (currentRoute) {
        if (route === currentRoute.pattern) {
          finalRoute = currentRoute.page;
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

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/GlobalStyle.js":
/*!***********************************!*\
  !*** ./components/GlobalStyle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

var TIMEOUT = 400;

var GlobalStyle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GlobalStyle, _Component);

  function GlobalStyle() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GlobalStyle);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GlobalStyle).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GlobalStyle, [{
    key: "render",
    value: function render() {
      return __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1245775527"
      }, "html,body,#__next,.app{height:100%;}body{background:#fff;color:#1e1e1e;font-family:'Rubik',sans-serif;font-weight:300;line-height:1.5;}body.dark-ui{background:#1e1e1e;color:#e1e1e1;}body.dark-ui a{color:#e1e1e1;}body.dark-ui:not(.menu-open) .trigger-menu-button{border-top-color:#e1e1e1;}body.dark-ui .trigger-menu-button:before,body.dark-ui .trigger-menu-button:after{background:#e1e1e1;}body.dark-ui .toggle-language__option:nth-of-type(1):after{background:#e1e1e1;}body.menu-open .trigger-menu-button{border-color:transparent;}body.menu-open .trigger-menu-button:before,body.menu-open .trigger-menu-button:after{width:33px;left:-2px;}body.menu-open .trigger-menu-button:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}body.menu-open .trigger-menu-button:after{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);top:9px;}body.menu-open .nav li{width:200px;margin-left:0;}body.menu-open .main-content{margin-left:220px;background-color:rgba(29,199,121,.12);-webkit-filter:blur(5px);filter:blur(5px);}a:not(.no-link-style){color:#1e1e1e;-webkit-text-decoration:none;text-decoration:none;position:relative;display:inline-block;vertical-align:middle;border-bottom:2px solid rgba(29,199,121,0.65);-webkit-transition:color 300ms cubic-bezier(0.47,0.99,1,0.99),-webkit-transform 0.3s ease-in-out;-webkit-transition:color 300ms cubic-bezier(0.47,0.99,1,0.99),transform 0.3s ease-in-out;transition:color 300ms cubic-bezier(0.47,0.99,1,0.99),transform 0.3s ease-in-out;}a:not(.no-link-style):hover{color:#fff;}a:not(.no-link-style):before{content:\" \";position:absolute;left:0;bottom:0;width:0;height:100%;z-index:-1;background-color:#1DC779;-webkit-transform:perspective(1px) translateZ(0);-ms-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);-webkit-transition:width 600ms cubic-bezier(0.47,0.99,1,0.99);transition:width 600ms cubic-bezier(0.47,0.99,1,0.99);}a:not(.no-link-style):hover:before{width:100%;}.container--center{margin:0 auto;}@media (min-width:992px){.container{max-width:960px;}}@media (min-width:1200px){.container{max-width:1140px;}}@media (min-width:1440px){.container{max-width:1348px;}}@media (min-width:1680px){.container{max-width:1556px;}}.page__description{max-width:600px;display:inline-block;}@media (min-width:1200px){.page__description{max-width:700px;}}.page__item{margin:80px 0;}.content{text-align:center;}@media (min-width:1024px) and (min-height:768px){.content{text-align:left;}}.column{width:50%;}.column:nth-of-type(1){padding-right:20px;}@media screen and (min-width:1280px){.column:nth-of-type(1){padding-right:60px;}}.column:nth-of-type(2){padding-left:20px;}@media screen and (min-width:1280px){.column:nth-of-type(2){padding-left:60px;}}h2{font-size:1.2em;}@media screen and (min-width:768px){h1{font-size:4.5em;font-weight:500;margin:0;}h2{font-size:2.2em;margin-top:0;}a{padding:2px 2px 0;}}.main-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;position:relative;width:100%;min-height:calc(100vh - 50px);z-index:20;visibility:visible;-webkit-transition:all 0.6s ease-in;transition:all 0.6s ease-in;box-sizing:border-box;padding:0 20px 20px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media screen and (min-width:1024px){.main-content{padding:40px;}}@media screen and (min-width:1280px){.main-content{padding:60px;}}.main-content>h1{margin-top:0;}@media screen and (min-width:1280px){.main-content{min-height:calc(100vh - 150px);}}#__next-prerender-indicator{display:none;}.icon{width:24px;height:24px;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.flex--justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.flex--justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.page-transition-enter{opacity:0;-webkit-transform:translate3d(0,20px,0);-ms-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);}.page-transition-enter-active{opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity ".concat(TIMEOUT, "ms,-webkit-transform ").concat(TIMEOUT, "ms;-webkit-transition:opacity ").concat(TIMEOUT, "ms,transform ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms,transform ").concat(TIMEOUT, "ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms;}.loading-indicator-appear,.loading-indicator-enter{opacity:0;}.loading-indicator-appear-active,.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms;}@media (min-width:1280px){.project:not(.project--main) .project__title{margin-top:-40px !important;}}@media (min-width:1440px){.project:not(.project--main) .project__title{margin-top:-60px !important;}}@media (min-width:1280px){.project:not(.project--main):nth-child(odd) .project__cover{box-shadow:-25px 50px 20px 5px rgba(0,0,0,.3);}}@media (min-width:1280px){.project:not(.project--main):nth-child(even) .project__cover{box-shadow:25px 50px 20px 5px rgba(0,0,0,.3);}}.dark-ui .project:not(.project--main) __cover{box-shadow:0 15px 20px 5px rgba(68,68,68,.3);}@media (min-width:1280px){.dark-ui .project:not(.project--main):nth-child(odd) .project__cover{box-shadow:-25px 50px 20px 5px rgba(68,68,68,.3);}}@media (min-width:1280px){.dark-ui .project:not(.project--main):nth-child(even) .project__cover{box-shadow:25px 50px 20px 5px rgba(68,68,68,.3);}}.project{margin:80px 0;}@media screen and (min-width:1024px){.project{margin:100px 0;}}@media screen and (min-width:1280px){.project{margin:200px 0;}}.project--no-shadow .project__cover{box-shadow:none !important;}@media screen and (min-width:1024px){.project--reduced-margin{margin:100px 0;}}@media screen and (min-width:1280px){.project--reduced-margin{margin:100px 0;}}.project__cover{max-width:100%;margin:0 auto 20px;box-shadow:0 15px 20px 5px rgba(68,68,68,.3);}.project__description{max-width:650px;margin-top:10px;}@media screen and (min-width:1024px){.project__description{margin-top:20px;}}.project__description p{margin:0;}@media screen and (min-width:1024px){.project--main .project__cover{max-width:1200px;margin:0 auto 60px;display:block;}}.project--main .project__content{-webkit-flex-flow:column !important;-ms-flex-flow:column !important;flex-flow:column !important;}.project--main .project__content__column:nth-of-type(1){width:100% !important;}.project--main .project__content__column:nth-of-type(2){width:auto !important;}.project .project__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media screen and (min-width:1024px){.project .project__content__column{width:50%;}}@media screen and (min-width:1024px){.project .project__content{-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;}.project:not(.project--main):nth-child(even) .project__content{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}@media screen and (min-width:1024px){.project:not(.project--main):nth-child(even) .project__content__column:nth-of-type(1){padding-left:20px;}.project:not(.project--main):nth-child(even) .project__content__column:nth-of-type(2){padding-right:20px;}}@media screen and (min-width:1280px){.project:not(.project--main):nth-child(even) .project__content__column:nth-of-type(1){padding-left:40px;}.project:not(.project--main):nth-child(even) .project__content__column:nth-of-type(2){padding-right:40px;}}@media screen and (min-width:1024px){.project:not(.project--main):nth-child(odd) .project__content__column:nth-of-type(1){padding-right:20px;}.project:not(.project--main):nth-child(odd) .project__content__column:nth-of-type(2){padding-left:20px;}}@media screen and (min-width:1280px){.project:not(.project--main):nth-child(odd) .project__content__column:nth-of-type(1){padding-right:40px;}.project:not(.project--main):nth-child(odd) .project__content__column:nth-of-type(2){padding-left:40px;}}}.project:last-child{margin-bottom:0;}.project__title{margin:0;}.project__technology{font-size:12px;margin-bottom:0;}@media screen and (min-width:1024px){.project__technology{font-size:16px;margin-top:20px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9jb21wb25lbnRzL0dsb2JhbFN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU8rQixBQUd5QixBQUlJLEFBV0ssQUFLSCxBQUlXLEFBS0YsQUFJUSxBQWlCUCxBQUtYLEFBS2EsQUFJQyxBQUtmLEFBTU0sQUFNUixBQVVELEFBS0MsQUFhRCxBQU1HLEFBV25CLEFBV0EsQUFTQSxBQU9BLEFBS3FCLEFBVW5CLEFBS21CLEFBSUEsQUFrQ3JCLEFBU2EsQUFJVyxBQU90QixBQUlxQixBQU9yQixBQUlpQixBQUtFLEFBTUEsQUFLRSxBQU1QLEFBc0JoQixBQVFBLEFBSWtCLEFBVWxCLEFBS2dCLEFBSUYsQUFLRSxBQUtZLEFBSUksQUFTckIsQUFJQSxBQUtBLEFBR0EsQUFLQSxBQUlBLEFBVVgsQUFLQSxBQUtJLEFBS0EsQUFJcUQsQUFPakQsQUFPQSxBQUlPLEFBT25CLEFBT0EsQUFJb0MsQUFPaEMsQUFPQSxBQUlvQixBQU1DLEFBUXJCLEFBSWtCLEFBTVksQUFPTyxBQUlFLEFBSUEsQUFJckIsQUFVZCxBQUttQixBQUdpQixBQUlHLEFBSUMsQUFNRCxBQUlDLEFBS0EsQUFJRCxBQU1DLEFBSUQsQUFNdEIsQUFJUCxBQUlNLEFBT0ksU0FwR25CLEFBMEZKLENBaFZBLEFBNEhrQyxBQUlILEFBS2pDLEFBR29ELEFBS3BELEFBSW9ELEFBdUk5QyxDQTdiYyxBQXFDaEIsQUFpQkEsQUFvTlksQ0FqVWQsQUFxRW9CLEFBMkJFLENBaU10QixBQVFBLEFBS0UsQUFlRixDQXpTSSxBQTZEbUIsQUFrQ3JCLEFBMERBLEFBK09OLENBTUEsQUFPQSxBQVdJLEFBT0EsQUFLdUIsQUFnSEgsQUFRckIsQ0FwakJpQixBQXlIaEIsQUFpQ3lCLEFBU3ZCLEFBMkNGLEFBb0NBLEFBS29CLEFBTUgsQUFxTUcsQUFPcEIsQUEyRkEsQ0FoYUEsQUFTQSxBQU9BLEFBZ1UrQixDQTdZZ0IsQUErSC9DLEFBaUNFLEFBTUEsQUFxQkEsQUEyUGtCLEFBVUEsQUFhQSxBQVVBLENBbmhCRixBQWNaLEFBSVEsQUErTFosQUFNQSxBQStSa0IsQUFVQSxBQUtBLEFBVUEsRUF0ZWQsQ0EyYU0sQUFJQSxDQXJLWixFQTFTSSxBQTBCQSxDQW9CQSxDQXdXRixDQXhERixBQUtBLENBekhFLENBNVBnQyxBQTJGdkIsQ0FzTlgsQUEwUEEsQ0FyVGEsQUEyTWIsQ0F2YkUsQ0FpYmtELEVBeUJqRCxDQXhYVSxBQTZEWCxJQThGQSxDQTJURixHQW5MSSxBQUtBLENBdlNRLEFBNlJSLEVBdUJJLENBUEEsQ0EwRUosSUF0WFksQUFzWlosRUE5YW1CLEtBckVMLEdBMkVFLEVBbUJMLFFBdUtJLEFBMERBLEFBcUtFLEdBbmVILEFBOEZXLEVBNFY3QixHQS9XdUIsRUF2QmpCLEdBSVUsTUF2RGhCLEFBb2ZRLEVBNWJGLENBOFpGLEVBbFpBLENBOFBGLEdBcE8yQyxDQW5CckIsRUEyUHRCLElBYzBGLFNBSjlGLEFBWUEsQUFTQSxPQXpScUQsWUF3TGhDLEFBMERuQixBQXFLdUIsa0JBOU5YLFdBQ29CLEtBekx1RCx5QkEwTDNFLFdBQ1EsbUJBQ1UsSUEyTkgsT0FyWWtDLHFEQTJLckMsc0JBQ0YsaUJBME50QixHQXpOeUIscUJBNUt2QixxREFxUEoseUJBcEVFLE9Bbk1BIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9jb21wb25lbnRzL0dsb2JhbFN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBUSU1FT1VUID0gNDAwXG5cbmNsYXNzIEdsb2JhbFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGh0bWwsIGJvZHksICNfX25leHQsIC5hcHAge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIGJvZHkgeyBcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBjb2xvcjogIzFlMWUxZTtcblxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAgICAgICAgICAgLyogVGVtYSBkYXJrICovXG4gICAgICAgICAgICAmLmRhcmstdWkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAgICAgICAgICAgICBjb2xvcjogI2UxZTFlMTtcblxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2UxZTFlMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6bm90KC5tZW51LW9wZW4pIC50cmlnZ2VyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZTFlMWUxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRyaWdnZXItbWVudS1idXR0b24ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlLFxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC50b2dnbGUtbGFuZ3VhZ2Uge1xuICAgICAgICAgICAgICAgICZfX29wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBNZW51IGFiZXJ0byAqL1xuICAgICAgICAgICAgJi5tZW51LW9wZW4ge1xuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvLyBQZW5zYXIgZW0gdW0gamVpdG8gbWVsaG9yXG4gICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgLnRyaWdnZXItbWVudS1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgIFxuICAgICAgICAgICAgICAgICY6YmVmb3JlLFxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5hdiBsaSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAgICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwLjgwKSB0cmFuc2xhdGVZKC01JSk7ICovXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDE5OSwgMTIxLCAuMTIpO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgLypmb290ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6bm90KC5uby1saW5rLXN0eWxlKSB7XG4gICAgICAgICAgICBjb2xvcjogIzFlMWUxZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyOSwgMTk5LCAxMjEsIDAuNjUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNDcsIDAuOTksIDEsIDAuOTkpLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7ICovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQzc3OTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDYwMG1zIGN1YmljLWJlemllcigwLjQ3LCAwLjk5LCAxLCAwLjk5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIC8qbWFyZ2luOiAwIGF1dG87Ki9cblxuICAgICAgICAgICAgJi0tY2VudGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIGh0dHBzOi8vcmljb3N0YWNydXouY29tL3RpbC9jc3MtbWVkaWEtcXVlcnktYnJlYWtwb2ludHMgKi9cbiAgICAgICAgICAgIC8qQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpe1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6NTQwcHg7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLypAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgIG1heC13aWR0aDo3MjBweDtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7XG4gICAgICAgICAgICAgIG1heC13aWR0aDo5NjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7XG4gICAgICAgICAgICAgIG1heC13aWR0aDoxMTQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjE0NDBweCl7XG4gICAgICAgICAgICAgIG1heC13aWR0aDoxMzQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjE2ODBweCl7XG4gICAgICAgICAgICAgIG1heC13aWR0aDoxNTU2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDgwcHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvKm1heC13aWR0aDogNzUwcHg7Ki9cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJl9fd2VsY29tZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSovXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvKiZfX3dlbGNvbWUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICB9Ki9cblxuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjVlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMnB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAvKiAjMURDNzc5OyAqL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgICAgICAgICAgei1pbmRleDoyMDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6dmlzaWJsZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW47XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA+IGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogaGVpZ2h0OjEwMCU7ICovXG4gICAgICAgICAgICAvKiB3aWR0aDoxMDAlOyBQcm9tb3ZlIHJvbGFnZW0gKi9cbiAgICAgICAgICAgIC8qIHRyYW5zaXRpb246IHNjYWxlIDAuNnMgZWFzZS1pbiwgbWFyZ2luLWxlZnQgMC42cyBlYXNlLWluLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZS1pbjsgKi9cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7IC8qIFRhbWFuaG8gZGEgdGVsYSAtIEhlYWRlciAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9pc3N1ZXMvNzk0NSAqL1xuICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcblxuICAgICAgICAgICAgJi0tanVzdGlmeS1jZW50ZXIge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0tanVzdGlmeS1zdGFydCB7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgLyouYXBwIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIC8qID09PT0gVFJBTlNJw4fDg08gREUgUMOBR0lOQVMgPT09PSAqL1xuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcywgdHJhbnNmb3JtICR7VElNRU9VVH1tcztcbiAgICAgICAgfVxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcbiAgICAgICAgfVxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLFxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhci1hY3RpdmUsXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLyogPT09PSBQUk9KRVRPUyA9PT09ICovXG4gICAgICAgIC5wcm9qZWN0Om5vdCgucHJvamVjdC0tbWFpbikge1xuICAgICAgICAgIC5wcm9qZWN0X190aXRsZSB7XG4gICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICAgIC5wcm9qZWN0X19jb3ZlciB7XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTI1cHggNTBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgLnByb2plY3RfX2NvdmVyIHtcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAyNXB4IDUwcHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5kYXJrLXVpIHtcbiAgICAgICAgICAucHJvamVjdDpub3QoLnByb2plY3QtLW1haW4pIHtcbiAgICAgICAgICAgICAgJl9fY292ZXIge1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggNXB4IHJnYmEoNjgsIDY4LCA2OCwgLjMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICAgICAgICAucHJvamVjdF9fY292ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTI1cHggNTBweCAyMHB4IDVweCByZ2JhKDY4LCA2OCwgNjgsIC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgICAgLnByb2plY3RfX2NvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDI1cHggNTBweCAyMHB4IDVweCByZ2JhKDY4LCA2OCwgNjgsIC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICBtYXJnaW46IDgwcHggMDtcblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwMHB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjAwcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLS1uby1zaGFkb3cge1xuICAgICAgICAgICAgLnByb2plY3RfX2NvdmVyIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYtLXJlZHVjZWQtbWFyZ2luIHtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAwcHggMDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJl9fY292ZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7ICAgXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTVweCAyMHB4IDVweCByZ2JhKDY4LCA2OCwgNjgsIC4zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLS1tYWluIHtcbiAgICAgICAgICAgICAgLnByb2plY3RfX2NvdmVyIHtcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIC5wcm9qZWN0X19jb250ZW50e1xuICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgJl9fY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2plY3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgJl9fY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgLnByb2plY3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmOm5vdCgucHJvamVjdC0tbWFpbik6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICAgIC5wcm9qZWN0X19jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAmX19jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpub3QoLnByb2plY3QtLW1haW4pOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICAgICAgICAgIC5wcm9qZWN0X19jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAmX19jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJl9fdGVjaG5vbG9neSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZSJdfQ== */\n/*@ sourceURL=/Users/carlohcs/Documents/workspace/carlohcs/carlohcs.github.io/components/GlobalStyle.js */"));
    }
  }]);

  return GlobalStyle;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AppProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppProvider */ "./components/AppProvider.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var languagueActiveOptionClass = 'toggle-language__option--active'; // Reacr Context: https://pt-br.reactjs.org/docs/context.html

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("header", {
        className: "jsx-2414568587"
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2414568587"
      }, "header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:20px;}@media screen and (min-width:1024px){header{padding:40px 40px 0;}}@media screen and (min-width:1280px){header{padding:60px;}}header div{display:block;}.header__actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.toggle-language{margin-right:10px;}.toggle-language__option{cursor:pointer;}.toggle-language__option:nth-of-type(1):after{content:\"\";width:1px;height:11px;display:inline-block;margin:0 5px;background:#1e1e1e;position:relative;}.toggle-language__option--active{font-weight:bold;}.toggle-theme{cursor:pointer;}.trigger-menu-button{border-top:3px solid #1e1e1e;height:30px;width:30px;box-sizing:border-box;position:relative;z-index:30;cursor:pointer;-webkit-transition:all 0.3s ease-in;transition:all 0.3s ease-in;}.trigger-menu-button:before,.trigger-menu-button:after{content:\"\";display:block;position:absolute;height:3px;width:30px;left:0;background:#1e1e1e;-webkit-transition:all 0.3s ease-in;transition:all 0.3s ease-in;}.trigger-menu-button:before{top:8px;}.trigger-menu-button:after{top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhbUMsQUFHc0MsQUFTbEIsQUFNQSxBQUl1QixBQUlMLEFBT0ssQUFJQyxBQUlJLEFBVUUsQUFJVixBQUtjLEFBV2QsQUFVSCxBQUdDLFFBRmIsQ0FHQSxFQTNDc0IsQUE4QkosRUF0RHRCLENBS0ksQ0FlQSxBQWtCSixFQUpRLENBbEJSLEVBdEJBLENBK0I0QixJQThCRixJQVpWLElBakJxQixRQWtCdEIsRUFZSSxTQVhPLEVBbEJHLEFBOEJWLFdBQ0osRUE5Qm9CLEtBK0JSLEVBekVKLEFBdUJBLEFBcUNELFlBakJZLEtBK0JFLENBYnJCLFdBQ0ksQ0FsQlAsY0FtQm9CLHlCQTlERSxBQXVCQSxZQW1EOUIsMkJBWEosNEVBOURpQixBQXVCTSxhQXRCdkIsZ0ZBdUJBIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb250ZXh0LCB7IExBTkdTLCBUSEVNRVMgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwcFByb3ZpZGVyJ1xuXG5jb25zdCBsYW5ndWFndWVBY3RpdmVPcHRpb25DbGFzcyA9ICd0b2dnbGUtbGFuZ3VhZ2VfX29wdGlvbi0tYWN0aXZlJ1xuXG4vLyBSZWFjciBDb250ZXh0OiBodHRwczovL3B0LWJyLnJlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX2FjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZS1sYW5ndWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICZfX29wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGUtdGhlbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLyogaHR0cHM6Ly9jb2RlcGVuLmlvL21hZGUtb24tbWFycy9wZW4vcXFFZ1hQICovXG4gICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMWUxZTFlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZTFlMWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWdnZXItbWVudS1idXR0b25cIiBhcmlhLWxhYmVsPVwiTWVudVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGV4dC50b2dnbGVNZW51KCl9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtbGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGV4dC50b2dnbGVMYW5nKExBTkdTWydQVC1CUiddKX0gY2xhc3NOYW1lPXtbJ3RvZ2dsZS1sYW5ndWFnZV9fb3B0aW9uJywgdGhpcy5jb250ZXh0LmdldExhbmcoKSA9PT0gTEFOR1NbJ1BULUJSJ10gPyBsYW5ndWFndWVBY3RpdmVPcHRpb25DbGFzcyA6ICcnIF0uam9pbignICcpfT5QVC1CUjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGV4dC50b2dnbGVMYW5nKExBTkdTWydFTiddKX0gY2xhc3NOYW1lPXtbJ3RvZ2dsZS1sYW5ndWFnZV9fb3B0aW9uJywgdGhpcy5jb250ZXh0LmdldExhbmcoKSA9PT0gTEFOR1NbJ0VOJ10gPyBsYW5ndWFndWVBY3RpdmVPcHRpb25DbGFzcyA6ICcnIF0uam9pbignICcpfT5FTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNvbnRleHQudG9nZ2xlVGhlbWUoKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbJ3RvZ2dsZS10aGVtZScsIHRoaXMuY29udGV4dC5nZXRUaGVtZSgpID09PSBUSEVNRVMuREFSSyA/ICd0b2dnbGUtdGhlbWUtLWxpZ2h0JyA6ICd0b2dnbGUtdGhlbWUtLWRhcmsnXS5qb2luKCcgJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWcvaWNvbnMvYWRqdXN0LXNvbGlkLnN2Zz9pbmNsdWRlYCkgfX0gY2xhc3NOYW1lPVwiaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=/Users/carlohcs/Documents/workspace/carlohcs/carlohcs.github.io/components/Header.js */"), __jsx("div", {
        "aria-label": "Menu",
        onClick: function onClick() {
          return _this.context.toggleMenu();
        },
        className: "jsx-2414568587" + " " + "trigger-menu-button"
      }), __jsx("div", {
        className: "jsx-2414568587" + " " + "header__actions"
      }, __jsx("div", {
        className: "jsx-2414568587" + " " + "toggle-language"
      }, __jsx("span", {
        onClick: function onClick() {
          return _this.context.toggleLang(_components_AppProvider__WEBPACK_IMPORTED_MODULE_8__["LANGS"]['PT-BR']);
        },
        className: "jsx-2414568587" + " " + (['toggle-language__option', this.context.getLang() === _components_AppProvider__WEBPACK_IMPORTED_MODULE_8__["LANGS"]['PT-BR'] ? languagueActiveOptionClass : ''].join(' ') || "")
      }, "PT-BR"), __jsx("span", {
        onClick: function onClick() {
          return _this.context.toggleLang(_components_AppProvider__WEBPACK_IMPORTED_MODULE_8__["LANGS"]['EN']);
        },
        className: "jsx-2414568587" + " " + (['toggle-language__option', this.context.getLang() === _components_AppProvider__WEBPACK_IMPORTED_MODULE_8__["LANGS"]['EN'] ? languagueActiveOptionClass : ''].join(' ') || "")
      }, "EN")), __jsx("div", {
        onClick: function onClick() {
          return _this.context.toggleTheme();
        },
        className: "jsx-2414568587" + " " + (['toggle-theme', this.context.getTheme() === _components_AppProvider__WEBPACK_IMPORTED_MODULE_8__["THEMES"].DARK ? 'toggle-theme--light' : 'toggle-theme--dark'].join(' ') || "")
      }, __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: __webpack_require__(/*! ../assets/img/icons/adjust-solid.svg?include */ "./assets/img/icons/adjust-solid.svg?include")
        },
        className: "jsx-2414568587" + " " + "icon"
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, "contextType", _components_AppProvider__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");
/* harmony import */ var _components_AppProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AppProvider */ "./components/AppProvider.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Menu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu, _Component);

  function Menu() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Menu).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "render",
    value: function render() {
      var list = function list(items) {
        return __jsx("ul", {
          className: "nav__subnav"
        }, items.map(function (item, key) {
          return __jsx("li", {
            key: key
          }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
            route: item.name,
            className: "nav__subitem"
          }, item.description));
        }));
      };

      return __jsx("div", {
        className: "jsx-3213157249"
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3213157249"
      }, ".nav{position:absolute;z-index:10;margin:20px 0 20px 20px;padding:0;overflow:hidden;}.nav .nav__subnav{padding-left:0;}.nav .nav__subnav a{font-size:14px;padding-left:20px;margin:5px 0;border:0;}.nav li{list-style-type:none;display:block;}.nav__item{width:0;margin-left:-120px;-webkit-transition:width 0.6s ease-in,margin-left 0.6s ease-in;transition:width 0.6s ease-in,margin-left 0.6s ease-in;}.nav__item .nav__subitem{padding:5px;margin-left:0px;}.nav a{display:block;height:30px;margin:10px 0;border:none;white-space:nowrap;overflow:hidden;}.nav a::before,.nav a::after{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9jb21wb25lbnRzL01lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJtQyxBQUd1QyxBQVFDLEFBSUksQUFPQyxBQUtaLEFBTUksQUFLRSxBQVlHLFFBdEJFLElBTUgsQ0FpQmhCLENBWlksQ0EzQmhCLEFBSTBCLEdBWmYsR0FtQk8sS0FpQkEsQ0FYMEMsQ0FNeEQsQ0E5Qm9CLElBWUgsRUFPckIsS0FpQmdCLE1BdkJDLE1BMEJNLENBdENiLEVBYU4sUUFaVyxRQXNDSyxRQXJDeEIsUUF1Q0ksMERBakJBIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9jb21wb25lbnRzL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICcuL0FjdGl2ZUxpbmsnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcFByb3ZpZGVyJ1xuXG5jbGFzcyBNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBBcHBDb250ZXh0XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBpdGVtcyA9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9fc3VibmF2XCI+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgcm91dGU9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPSduYXZfX3N1Yml0ZW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfX3N1Ym5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2UtaW4sIG1hcmdpbi1sZWZ0IDAuNnMgZWFzZS1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdl9fc3ViaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl90ZXh0LW92ZXJmbG93LmFzcCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPiAgICBcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuZ2V0TWVzc2FnZSgnbWVudScpLm1hcCgoaXRlbSwga2V5KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayByb3V0ZT17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtcyA/IGxpc3QoaXRlbS5pdGVtcykgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51Il19 */\n/*@ sourceURL=/Users/carlohcs/Documents/workspace/carlohcs/carlohcs.github.io/components/Menu.js */"), __jsx("ul", {
        className: "jsx-3213157249" + " " + "nav"
      }, this.context.getMessage('menu').map(function (item, key) {
        return __jsx("li", {
          key: key,
          className: "jsx-3213157249" + " " + "nav__item"
        }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
          route: item.url
        }, item.description), item.items ? list(item.items) : '');
      })));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Menu, "contextType", _components_AppProvider__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AppProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AppProvider */ "./components/AppProvider.js");
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






 // https://nextjs.org/learn/basics/using-shared-components/the-layout-component
// Fonts vs SVG: https://fontawesome.com/how-to-use/on-the-web/other-topics/performance
// TODO: Resolver
// Warning: Main defines an invalid contextType. contextType should point to the Context object returned by React.createContext(). Did you accidentally pass the Context.Consumer instead?
// O modo utilizado agora não é eficiente, pois o usuário consegue ver o tema sendo mudado em tempo de abertura da página

var Main =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _Component);

  function Main(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main).call(this, props));
    _this.state = {
      loadedConfigs: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var storage = __webpack_require__(/*! ../components/helpers/storage */ "./components/helpers/storage.js")["default"];

      var savedTheme = storage.getTheme();
      var savedLang = storage.getLang();

      if (savedTheme !== '' && savedTheme !== this.context.getTheme()) {
        this.context.toggleTheme(savedTheme === this.context.themes.DARK);
      }

      if (savedLang !== '' && savedLang !== this.context.getLang()) {
        this.context.toggleLang(savedLang);
      }

      this.setState({
        loadedConfigs: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loadedConfigs = this.state.loadedConfigs;
      var mainContent = !loadedConfigs ? '' : __jsx("div", {
        className: "main-content"
      }, this.props.children);
      return __jsx("div", {
        className: "app"
      }, __jsx(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), __jsx("meta", {
        charSet: "utf-8"
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap",
        rel: "stylesheet"
      })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], null), mainContent);
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function?answertab=votes#tab-top
// https://reactjs.org/docs/hooks-reference.html#usecontext


Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, "contextType", _components_AppProvider__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next-routes/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/next-routes/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pathToRegexp = _interopRequireDefault(__webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (opts) {
  return new Routes(opts);
};

var Routes =
/*#__PURE__*/
function () {
  function Routes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$Link = _ref.Link,
        Link = _ref$Link === void 0 ? _link.default : _ref$Link,
        _ref$Router = _ref.Router,
        Router = _ref$Router === void 0 ? _router.default : _ref$Router;

    _classCallCheck(this, Routes);

    this.routes = [];
    this.Link = this.getLink(Link);
    this.Router = this.getRouter(Router);
  }

  _createClass(Routes, [{
    key: "add",
    value: function add(name, pattern, page) {
      var options;

      if (name instanceof Object) {
        options = name;
        name = options.name;
      } else {
        if (name[0] === '/') {
          page = pattern;
          pattern = name;
          name = null;
        }

        options = {
          name: name,
          pattern: pattern,
          page: page
        };
      }

      if (this.findByName(name)) {
        throw new Error("Route \"".concat(name, "\" already exists"));
      }

      this.routes.push(new Route(options));
      return this;
    }
  }, {
    key: "findByName",
    value: function findByName(name) {
      if (name) {
        return this.routes.filter(function (route) {
          return route.name === name;
        })[0];
      }
    }
  }, {
    key: "match",
    value: function match(url) {
      var parsedUrl = (0, _url.parse)(url, true);
      var pathname = parsedUrl.pathname,
          query = parsedUrl.query;
      return this.routes.reduce(function (result, route) {
        if (result.route) return result;
        var params = route.match(pathname);
        if (!params) return result;
        return _objectSpread({}, result, {
          route: route,
          params: params,
          query: _objectSpread({}, query, params)
        });
      }, {
        query: query,
        parsedUrl: parsedUrl
      });
    }
  }, {
    key: "findAndGetUrls",
    value: function findAndGetUrls(nameOrUrl, params) {
      var route = this.findByName(nameOrUrl);

      if (route) {
        return {
          route: route,
          urls: route.getUrls(params),
          byName: true
        };
      } else {
        var _this$match = this.match(nameOrUrl),
            _route = _this$match.route,
            query = _this$match.query;

        var href = _route ? _route.getHref(query) : nameOrUrl;
        var urls = {
          href: href,
          as: nameOrUrl
        };
        return {
          route: _route,
          urls: urls
        };
      }
    }
  }, {
    key: "getRequestHandler",
    value: function getRequestHandler(app, customHandler) {
      var _this = this;

      var nextHandler = app.getRequestHandler();
      return function (req, res) {
        var _this$match2 = _this.match(req.url),
            route = _this$match2.route,
            query = _this$match2.query,
            parsedUrl = _this$match2.parsedUrl;

        if (route) {
          if (customHandler) {
            customHandler({
              req: req,
              res: res,
              route: route,
              query: query
            });
          } else {
            app.render(req, res, route.page, query);
          }
        } else {
          nextHandler(req, res, parsedUrl);
        }
      };
    }
  }, {
    key: "getLink",
    value: function getLink(Link) {
      var _this2 = this;

      var LinkRoutes = function LinkRoutes(props) {
        var route = props.route,
            params = props.params,
            to = props.to,
            newProps = _objectWithoutProperties(props, ["route", "params", "to"]);

        var nameOrUrl = route || to;

        if (nameOrUrl) {
          Object.assign(newProps, _this2.findAndGetUrls(nameOrUrl, params).urls);
        }

        return _react.default.createElement(Link, newProps);
      };

      return LinkRoutes;
    }
  }, {
    key: "getRouter",
    value: function getRouter(Router) {
      var _this3 = this;

      var wrap = function wrap(method) {
        return function (route, params, options) {
          var _this3$findAndGetUrls = _this3.findAndGetUrls(route, params),
              byName = _this3$findAndGetUrls.byName,
              _this3$findAndGetUrls2 = _this3$findAndGetUrls.urls,
              as = _this3$findAndGetUrls2.as,
              href = _this3$findAndGetUrls2.href;

          return Router[method](href, as, byName ? options : params);
        };
      };

      Router.pushRoute = wrap('push');
      Router.replaceRoute = wrap('replace');
      Router.prefetchRoute = wrap('prefetch');
      return Router;
    }
  }]);

  return Routes;
}();

var Route =
/*#__PURE__*/
function () {
  function Route(_ref2) {
    var name = _ref2.name,
        pattern = _ref2.pattern,
        _ref2$page = _ref2.page,
        page = _ref2$page === void 0 ? name : _ref2$page;

    _classCallCheck(this, Route);

    if (!name && !page) {
      throw new Error("Missing page to render for route \"".concat(pattern, "\""));
    }

    this.name = name;
    this.pattern = pattern || "/".concat(name);
    this.page = page.replace(/(^|\/)index$/, '').replace(/^\/?/, '/');
    this.regex = (0, _pathToRegexp.default)(this.pattern, this.keys = []);
    this.keyNames = this.keys.map(function (key) {
      return key.name;
    });
    this.toPath = _pathToRegexp.default.compile(this.pattern);
  }

  _createClass(Route, [{
    key: "match",
    value: function match(path) {
      var values = this.regex.exec(path);

      if (values) {
        return this.valuesToParams(values.slice(1));
      }
    }
  }, {
    key: "valuesToParams",
    value: function valuesToParams(values) {
      var _this4 = this;

      return values.reduce(function (params, val, i) {
        if (val === undefined) return params;
        return Object.assign(params, _defineProperty({}, _this4.keys[i].name, decodeURIComponent(val)));
      }, {});
    }
  }, {
    key: "getHref",
    value: function getHref() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return "".concat(this.page, "?").concat(toQuerystring(params));
    }
  }, {
    key: "getAs",
    value: function getAs() {
      var _this5 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var as = this.toPath(params) || '/';
      var keys = Object.keys(params);
      var qsKeys = keys.filter(function (key) {
        return _this5.keyNames.indexOf(key) === -1;
      });
      if (!qsKeys.length) return as;
      var qsParams = qsKeys.reduce(function (qs, key) {
        return Object.assign(qs, _defineProperty({}, key, params[key]));
      }, {});
      return "".concat(as, "?").concat(toQuerystring(qsParams));
    }
  }, {
    key: "getUrls",
    value: function getUrls(params) {
      var as = this.getAs(params);
      var href = this.getHref(params);
      return {
        as: as,
        href: href
      };
    }
  }]);

  return Route;
}();

var toQuerystring = function toQuerystring(obj) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] !== null && obj[key] !== undefined;
  }).map(function (key) {
    var value = obj[key];

    if (Array.isArray(value)) {
      value = value.join('/');
    }

    return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
  }).join('&');
};

/***/ }),

/***/ "./node_modules/next-server/head.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js!./":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var page = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value))

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = ''
  var isEndDelimited = false

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += prefix + '(' + capture + ')?'
        } else {
          route += '(?:' + prefix + '(' + capture + '))?'
        }
      } else {
        route += prefix + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _components_AppProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AppProvider */ "./components/AppProvider.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Error =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Error, _React$Component);

  function Error() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Error).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      var createMarkup = function createMarkup(value) {
        return {
          __html: value
        };
      };

      return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("div", {
        className: "jsx-1498844768" + " " + "error-page flex flex--justify-start"
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1498844768"
      }, ".error-page{min-height:100%;padding-top:30px;}.error-page__status-code{margin-bottom:0;}.error-page__message{margin-top:0;}.error-page__citation{max-width:750px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0IrQixBQUdpQyxBQUtFLEFBSUgsQUFJRyxhQUhsQixHQVRpQixBQUtqQixBQVFBLGlCQVpGIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9wYWdlcy9fZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9sYXlvdXRzL21haW4nXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcFByb3ZpZGVyJ1xuXG5jbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFwcENvbnRleHRcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBlcnIgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbFxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNyZWF0ZU1hcmt1cCA9IHZhbHVlID0+ICh7IF9faHRtbDogdmFsdWUgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluPiAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1wYWdlIGZsZXggZmxleC0tanVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgLmVycm9yLXBhZ2Uge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgICAgICAmX19zdGF0dXMtY29kZSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX21lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmX19jaXRhdGlvbiB7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJlcnJvci1wYWdlX19zdGF0dXMtY29kZVwiPnt0aGlzLnByb3BzLnN0YXR1c0NvZGV9PC9oMT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVycm9yLXBhZ2VfX21lc3NhZ2VcIj57dGhpcy5wcm9wcy5zdGF0dXNDb2RlID09PSA0MDQgPyAnUMOhZ2luYSBuw6NvIGVuY29udHJhZGEuJyA6ICdFcnJvIG5vIHNlcnZpZG9yLid9PC9oMj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItcGFnZV9fY2l0YXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17Y3JlYXRlTWFya3VwKHRoaXMuY29udGV4dC5nZXRNZXNzYWdlKCdlcnJvcicsICdjaXRhdGlvbicpKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NYWluPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvciJdfQ== */\n/*@ sourceURL=/Users/carlohcs/Documents/workspace/carlohcs/carlohcs.github.io/pages/_error.js */"), __jsx("h1", {
        className: "jsx-1498844768" + " " + "error-page__status-code"
      }, this.props.statusCode), __jsx("h2", {
        className: "jsx-1498844768" + " " + "error-page__message"
      }, this.props.statusCode === 404 ? 'Página não encontrada.' : 'Erro no servidor.'), __jsx("div", {
        dangerouslySetInnerHTML: createMarkup(this.context.getMessage('error', 'citation')),
        className: "jsx-1498844768" + " " + "error-page__citation"
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Error, "contextType", _components_AppProvider__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js")();

var customRoutes = [{
  name: 'home',
  pattern: '/en/',
  page: 'index'
}, {
  name: 'engenheiro',
  pattern: '/en/software-engineer',
  page: 'engenheiro-de-software'
}, {
  name: 'habilidades',
  pattern: '/en/skills',
  page: 'habilidades'
}, {
  name: 'palestras',
  pattern: '/en/talks',
  page: 'palestras'
}, {
  name: 'curriculo',
  pattern: '/en/resume',
  page: 'curriculum-vitae'
}];
customRoutes.map(function (route) {
  return routes.add(route);
});
module.exports = routes;

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.de7e1f2c20aa11fd70f9.hot-update.js.map