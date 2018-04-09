exports.id = 0;
exports.modules = {

/***/ "./src/components/Html/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript__ = __webpack_require__("serialize-javascript");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_serialize_javascript__);
var _jsxFileName = '/Users/soutomario/Desktop/with-react-loadable/src/components/Html/index.js';





var Html = function Html(_ref) {
    var assets = _ref.assets,
        markup = _ref.markup,
        initialState = _ref.initialState;

    var body = markup;
    var head = __WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"].renderStatic();

    assets.chunks.map(function (chunk) {
        console.log(chunk.file);
        return chunk.file;
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'html',
        { lang: 'en-US', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'head',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            },
            head.title.toComponent(),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }),
            head.meta.toComponent(),
            head.link.toComponent(),
            head.script.toComponent(),
            assets.client.css ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: assets.client.css, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }) : '',
            initialState && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__PRELOADED_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default()(initialState) + ';' }, charSet: 'UTF-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'body',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: body }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }),
             false ? React.createElement('script', { src: assets.client.js, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: assets.client.js, crossOrigin: 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }),
            assets.chunks.map(function (chunk) {
                return  false ? React.createElement('script', { src: chunk.file, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'http://' + "localhost" + ':' + (parseInt("3000", 10) + 1) + '/' + chunk.file, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                });
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'script',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                'window.main();'
            )
        )
    );
};

Html.propTypes = {
    assets: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
    markup: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node.isRequired,
    initialState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ })

};
//# sourceMappingURL=0.113d53a5444f77aef124.hot-update.js.map