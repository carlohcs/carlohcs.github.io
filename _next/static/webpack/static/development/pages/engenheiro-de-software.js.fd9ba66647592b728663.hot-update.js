webpackHotUpdate("static/development/pages/engenheiro-de-software.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AppProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AppProvider */ "./components/AppProvider.js");
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.js");






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
      loadedConfigs: false // Router.events.on('routeChangeStart', url => {
      //   console.log('App is changing to: ', url)
      // })

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
      }, __jsx(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), __jsx("meta", {
        charSet: "utf-8"
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Rubik:300,500&display=swap",
        rel: "stylesheet"
      })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], null), mainContent);
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function?answertab=votes#tab-top
// https://reactjs.org/docs/hooks-reference.html#usecontext


Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, "contextType", _components_AppProvider__WEBPACK_IMPORTED_MODULE_12__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=engenheiro-de-software.js.fd9ba66647592b728663.hot-update.js.map