exports.id = 0;
exports.modules = {

/***/ "./src/server/ssr-helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getActiveRouteFromRoutes;
/* harmony export (immutable) */ __webpack_exports__["a"] = doRedirect;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCurrentComponent;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return extractInitialData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/routes.js");





function getActiveRouteFromRoutes(url, router) {
  var routesArray = Object(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])().props.children.map(function (route) {
    return route;
  });
  var activeRoute = routesArray.find(function (route) {
    return route.props.path.match(new RegExp('' + url)) ? route : false;
  });

  if (!activeRoute) {
    // Set 404 Route
    activeRoute = routesArray.find(function (route) {
      return route.props.path.match(/\*/) ? route : false;
    });
  }

  return activeRoute;
}

function doRedirect(activeRoute, redirect) {
  if (activeRoute.props.render().props.to) {
    redirect(activeRoute.props.render().props.to);
  }
}

function getCurrentComponent(_ref) {
  var component = _ref.component;

  console.log(component.preload);
  if (component.awaitComponent) {
    // Load Async
    return component.awaitComponent.then(function (component) {
      return component.default;
    });
  } else {
    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve) {
      resolve(component);
    });
  }
}

var extractInitialData = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(component) {
    var initialData;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initialData = {};

            if (!component.getInitialData) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return component.getInitialData();

          case 4:
            initialData = _context.sent;

          case 5:
            return _context.abrupt('return', {
              component: component,
              initialData: initialData
            });

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function extractInitialData(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

};
//# sourceMappingURL=0.16c9ed6cbfeb554bca6b.hot-update.js.map