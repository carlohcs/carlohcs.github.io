webpackHotUpdate("static/development/pages/engenheiro-de-software.js",{

/***/ "./pages/engenheiro-de-software.js":
/*!*****************************************!*\
  !*** ./pages/engenheiro-de-software.js ***!
  \*****************************************/
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



 // TODO: usar essa página como modelo para as outras -> criar um componente

var EngenheiroDeSoftware =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EngenheiroDeSoftware, _Component);

  function EngenheiroDeSoftware() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EngenheiroDeSoftware);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EngenheiroDeSoftware).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EngenheiroDeSoftware, [{
    key: "render",
    value: function render() {
      var createMarkup = function createMarkup(value) {
        return {
          __html: value
        };
      };

      var renderProject = function renderProject(project, key) {
        var main = typeof key === 'undefined';
        return __jsx("div", {
          key: key,
          className: ['project', main ? 'project--main' : ''].join(' ')
        }, __jsx("div", {
          className: "project__content"
        }, __jsx("div", {
          className: "project__content__column"
        }, __jsx("img", {
          src: project.cover.indexOf('https') === -1 ? "../../static/img/projects/".concat(project.cover) : 'https://dummyimage.com/500x250/aaa/000',
          loading: "lazy",
          alt: "Projeto",
          className: "project__cover"
        })), __jsx("div", {
          className: "project__content__column"
        }, __jsx("h2", {
          className: "project__title",
          dangerouslySetInnerHTML: createMarkup(project.titleDescription)
        }), project.url ? __jsx("a", {
          href: project.url,
          target: "_blank"
        }, project.url) : '', __jsx("div", {
          className: "project__description",
          dangerouslySetInnerHTML: createMarkup(project.description)
        }))));
      };

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_CustomHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.context.getMessage('softwareEngineer', 'title')
      }), __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("section", {
        className: "jsx-7867524" + " " + "software-engineer"
      }, __jsx("div", {
        className: "jsx-7867524" + " " + "content"
      }, __jsx("div", {
        className: "jsx-7867524" + " " + "software-engineer__introduction"
      }, __jsx("h1", {
        className: "jsx-7867524" + " " + "page__title"
      }, this.context.getMessage('softwareEngineer', 'title')), __jsx("h2", {
        className: "jsx-7867524" + " " + "page__title-description"
      }, this.context.getMessage('softwareEngineer', 'titleDescription')), __jsx("p", {
        className: "jsx-7867524" + " " + "page__description"
      }, this.context.getMessage('softwareEngineer', 'description')))), __jsx("div", {
        className: "jsx-7867524" + " " + "content container container--center"
      }, __jsx("div", {
        className: "jsx-7867524" + " " + "projects"
      }, renderProject(this.context.getMessage('softwareEngineer', 'mainProject')), this.context.getMessage('softwareEngineer', 'projects').map(function (project, key) {
        return renderProject(project, key);
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "7867524"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb2hjcy9Eb2N1bWVudHMvd29ya3NwYWNlL2NhcmxvaGNzL2NhcmxvaGNzLmdpdGh1Yi5pby9wYWdlcy9lbmdlbmhlaXJvLWRlLXNvZnR3YXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEdUMiLCJmaWxlIjoiL1VzZXJzL2NhcmxvaGNzL0RvY3VtZW50cy93b3Jrc3BhY2UvY2FybG9oY3MvY2FybG9oY3MuZ2l0aHViLmlvL3BhZ2VzL2VuZ2VuaGVpcm8tZGUtc29mdHdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9sYXlvdXRzL21haW4nXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcFByb3ZpZGVyJ1xuaW1wb3J0IEN1c3RvbUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9DdXN0b21IZWFkJ1xuXG4vLyBUT0RPOiB1c2FyIGVzc2EgcMOhZ2luYSBjb21vIG1vZGVsbyBwYXJhIGFzIG91dHJhcyAtPiBjcmlhciB1bSBjb21wb25lbnRlXG5jbGFzcyBFbmdlbmhlaXJvRGVTb2Z0d2FyZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjcmVhdGVNYXJrdXAgPSB2YWx1ZSA9PiAoeyBfX2h0bWw6IHZhbHVlIH0pXG4gICAgICAgIGNvbnN0IHJlbmRlclByb2plY3QgPSAocHJvamVjdCwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYWluID0gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCdcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e1sncHJvamVjdCcsIG1haW4gPyAncHJvamVjdC0tbWFpbicgOiAnJ10uam9pbignICcpfT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfX2NvbnRlbnRfX2NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmNvdmVyLmluZGV4T2YoJ2h0dHBzJykgPT09IC0xID8gYC4uLy4uL3N0YXRpYy9pbWcvcHJvamVjdHMvJHtwcm9qZWN0LmNvdmVyfWAgOiAnaHR0cHM6Ly9kdW1teWltYWdlLmNvbS81MDB4MjUwL2FhYS8wMDAnfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cIlByb2pldG9cIiBjbGFzc05hbWU9XCJwcm9qZWN0X19jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X19jb250ZW50X19jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvamVjdF9fdGl0bGVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17Y3JlYXRlTWFya3VwKHByb2plY3QudGl0bGVEZXNjcmlwdGlvbil9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC51cmwgPyA8YSBocmVmPXtwcm9qZWN0LnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X19kZXNjcmlwdGlvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAocHJvamVjdC5kZXNjcmlwdGlvbil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tSGVhZCB0aXRsZT17dGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ3NvZnR3YXJlRW5naW5lZXInLCAndGl0bGUnKX0gLz5cbiAgICAgICAgICAgICAgICA8TWFpbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic29mdHdhcmUtZW5naW5lZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29mdHdhcmUtZW5naW5lZXJfX2ludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZV9fdGl0bGVcIj57dGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ3NvZnR3YXJlRW5naW5lZXInLCAndGl0bGUnKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZV9fdGl0bGUtZGVzY3JpcHRpb25cIj57dGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ3NvZnR3YXJlRW5naW5lZXInLCAndGl0bGVEZXNjcmlwdGlvbicpfTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFnZV9fZGVzY3JpcHRpb25cIj57dGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ3NvZnR3YXJlRW5naW5lZXInLCAnZGVzY3JpcHRpb24nKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGNvbnRhaW5lciBjb250YWluZXItLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclByb2plY3QodGhpcy5jb250ZXh0LmdldE1lc3NhZ2UoJ3NvZnR3YXJlRW5naW5lZXInLCAnbWFpblByb2plY3QnKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5nZXRNZXNzYWdlKCdzb2Z0d2FyZUVuZ2luZWVyJywgJ3Byb2plY3RzJykubWFwKChwcm9qZWN0LCBrZXkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QsIGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L01haW4+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5nZW5oZWlyb0RlU29mdHdhcmU7Il19 */\n/*@ sourceURL=/Users/carlohcs/Documents/workspace/carlohcs/carlohcs.github.io/pages/engenheiro-de-software.js */")));
    }
  }]);

  return EngenheiroDeSoftware;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(EngenheiroDeSoftware, "contextType", _components_AppProvider__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (EngenheiroDeSoftware);

/***/ })

})
//# sourceMappingURL=engenheiro-de-software.js.5e4519c83d4da57e8cf3.hot-update.js.map