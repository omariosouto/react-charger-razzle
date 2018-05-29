exports.id = 0;
exports.modules = {

/***/ "./src/pages/Home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_img_react_svg__ = __webpack_require__("./src/assets/img/react.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_img_react_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_img_react_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css__ = __webpack_require__("./src/pages/Home/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_NavMenu__ = __webpack_require__("./src/components/NavMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);





var _jsxFileName = '/Users/omariosouto/workspace/omariosouto/react-charger-razzle/src/pages/Home/index.js';







var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'componentDidMount',


    // static async getInitialData() {
    //   try {
    //     return {
    //       repos: []
    //       // repos:  await fetch('https://api.github.com/users/omariosouto/repos').then((response) => response.json())
    //     }
    //   } catch(error) {
    //     // Se algum erro acontecer: console.log(error)
    //     return {
    //       repos: []
    //     }
    //   }
    // }

    value: function componentDidMount() {
      if (this.props.repos.length === 0) {
        this.props.carregaRepos();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_helmet___default.a, { title: 'React SSR - P\xE1gina Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'Home-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_7__assets_img_react_svg___default.a, className: 'Home-logo', alt: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            'Welcome to React Charger Razzle: React + React Router'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'p',
          { className: 'Home-intro', __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          'To get started, edit ',
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'code',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            './src/client.js'
          ),
          ' or',
          ' ',
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'code',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            './src/pages/Home.js'
          ),
          ' and save to reload.'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_NavMenu__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            'Getting Repos from GitHub and SSR it:'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'ul',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            this.state.repos.map(function (repo) {
              return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'li',
                { key: repo.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                repo.full_name
              );
            })
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

var mapStateToProps = function mapStateToProps(stateDaStore) {
  return {
    repos: stateDaStore.repos
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    carregaRepos: function carregaRepos() {
      fetch('https://api.github.com/users/omariosouto/repos').then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log('disparou o carrega repos :)', response);
        dispatch({ type: 'CARREGA_REPOS', repos: response });
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ })

};
//# sourceMappingURL=0.7f0007670e46f9ce8700.hot-update.js.map