exports.id = 0;
exports.modules = {

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route__ = __webpack_require__("react-router-dom/Route");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch__ = __webpack_require__("react-router-dom/Switch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Home__ = __webpack_require__("./src/pages/Home/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
var _jsxFileName = '/Users/soutomario/Desktop/ssr-example/react-charger-razzle/src/routes.js';







var AsyncAbout = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/pages/About/index.js"));
  },
  modules: ['./pages/About'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/pages/About/index.js")];
  },
  loading: function loading() {
    return null;
  }
});

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route___default.a, { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__pages_Home__["a" /* default */], __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route___default.a, { exact: true, path: '/about', component: AsyncAbout, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route___default.a, { path: '*', component: function component() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          '404 Page'
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ })

};
//# sourceMappingURL=0.514abaae73b30fe87d42.hot-update.js.map