webpackHotUpdate("static/development/pages/_error.js",{

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

/***/ "./node_modules/next/dist/pages/_error.js":
false,

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
/* harmony import */ var _components_CustomHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CustomHead */ "./components/CustomHead.js");







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

      var title = this.props.statusCode === 404 ? this.context.getMessage('error', 'codes', '404') : this.context.getMessage('error', 'defaultErrorMessage');
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_CustomHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: title
      }), __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("div", {
        className: "jsx-1498844768" + " " + "error-page flex flex--justify-start"
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1498844768"
      }, ".error-page{min-height:100%;padding-top:30px;}.error-page__status-code{margin-bottom:0;}.error-page__message{margin-top:0;}.error-page__citation{max-width:750px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0IrQixBQUdpQyxBQUtFLEFBSUgsQUFJRyxhQUhsQixHQVRpQixBQUtqQixBQVFBLGlCQVpGIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9wYWdlcy9fZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9sYXlvdXRzL21haW4nXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcFByb3ZpZGVyJ1xuaW1wb3J0IEN1c3RvbUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9DdXN0b21IZWFkJ1xuXG5jbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFwcENvbnRleHRcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBlcnIgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbFxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNyZWF0ZU1hcmt1cCA9IHZhbHVlID0+ICh7IF9faHRtbDogdmFsdWUgfSlcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMuc3RhdHVzQ29kZSA9PT0gNDA0ID8gdGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ2Vycm9yJywgJ2NvZGVzJywgJzQwNCcpIDogdGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ2Vycm9yJywgJ2RlZmF1bHRFcnJvck1lc3NhZ2UnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q3VzdG9tSGVhZCB0aXRsZT17dGl0bGV9IC8+XG4gICAgICAgICAgPE1haW4+ICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLXBhZ2UgZmxleCBmbGV4LS1qdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAuZXJyb3ItcGFnZSB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAgICAgICAgICAgICAgICZfX3N0YXR1cy1jb2RlIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJl9fbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX2NpdGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImVycm9yLXBhZ2VfX3N0YXR1cy1jb2RlXCI+e3RoaXMucHJvcHMuc3RhdHVzQ29kZX08L2gxPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZXJyb3ItcGFnZV9fbWVzc2FnZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1wYWdlX19jaXRhdGlvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAodGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ2Vycm9yJywgJ2NpdGF0aW9uJykpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW4+XG4gICAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvciJdfQ== */\n/*@ sourceURL=/Users/carlohcs/Documents/workspace/carlohcs/carlohcs.github.io/pages/_error.js */"), __jsx("h1", {
        className: "jsx-1498844768" + " " + "error-page__status-code"
      }, this.props.statusCode), __jsx("h2", {
        className: "jsx-1498844768" + " " + "error-page__message"
      }, title), __jsx("div", {
        dangerouslySetInnerHTML: createMarkup(this.context.getMessage('error', 'citation')),
        className: "jsx-1498844768" + " " + "error-page__citation"
      }))));
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

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fcarlohcs%2FDocuments%2Fworkspace%2Fcarlohcs%2Fcarlohcs.github.io%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.231764e0f0740b81e9c2.hot-update.js.map