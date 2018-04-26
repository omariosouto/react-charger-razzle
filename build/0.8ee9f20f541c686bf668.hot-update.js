exports.id = 0;
exports.modules = {

/***/ "./src/pages/Home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_css__ = __webpack_require__("./src/pages/Home/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_redux__);







var _jsxFileName = '/Users/soutomario/Desktop/ssr-example/react-charger-razzle/src/pages/Home/index.js';







var Intro = __WEBPACK_IMPORTED_MODULE_10_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/pages/Home/components/Intro.js"));
  },
  modules: ['./components/Intro'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/pages/Home/components/Intro.js")];
  },
  loading: function loading() {
    return null;
  }
});

var Logo = __WEBPACK_IMPORTED_MODULE_10_react_loadable___default()({
  loader: function loader() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/pages/Home/components/Logo.js"));
  },
  modules: ['./components/Logo'],
  webpack: function webpack() {
    return [/*require.resolve*/("./src/pages/Home/components/Logo.js")];
  },
  loading: function loading() {
    return null;
  }
});

var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Home);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Home)).call(this));

    _this.state = {
      tweets: []
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.tweets.length === 0) {
        this.props.carregaTweets();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_helmet___default.a, { title: 'React SSR - P\xE1gina Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: 'Home-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Logo, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            { className: 'Home-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            'React Charger'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Intro, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'ul',
          { className: 'Home-resources', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
              { to: '/about', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              'About'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
              { to: '/404crosstest', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              '404 Page'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'a',
              { href: 'https://github.com/jaredpalmer/razzle', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              'Docs'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'a',
              { href: 'https://github.com/jaredpalmer/razzle/issues', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              'Issues'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'a',
              { href: 'https://palmer.chat', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              'Community Slack'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            'List Async'
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'ul',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            this.props.tweets.map(function (tweet) {
              return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'li',
                { key: tweet._id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    }
                  },
                  '@',
                  tweet.usuario.login
                ),
                ': ',
                tweet.conteudo
              );
            })
          )
        )
      );
    }
  }], [{
    key: 'getInitialData',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://twitelum-api.herokuapp.com/tweets').then(function (response) {
                  return response.json();
                });

              case 2:
                _context.t0 = _context.sent;
                return _context.abrupt('return', {
                  tweets: _context.t0
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialData() {
        return _ref.apply(this, arguments);
      }

      return getInitialData;
    }()
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

// export default Home

var mapStateToProps = function mapStateToProps(stateDaStore) {
  return {
    tweets: stateDaStore.tweets
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    carregaTweets: function carregaTweets() {
      fetch('https://twitelum-api.herokuapp.com/tweets').then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log('disparou o carrega tweets :)', response);
        dispatch({ type: 'CARREGA_TWEETS', tweets: response });
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_12_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ })

};
//# sourceMappingURL=0.8ee9f20f541c686bf668.hot-update.js.map