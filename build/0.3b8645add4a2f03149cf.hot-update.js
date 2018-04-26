exports.id = 0;
exports.modules = {

/***/ "./src/server/ssr-helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extractActiveRouteInfoFromRoutes;
/* harmony export (immutable) */ __webpack_exports__["a"] = doRedirect;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCurrentComponent;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extractInitialData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);






function extractActiveRouteInfoFromRoutes(url, router) {
  var routesArray = Object(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])().props.children.map(function (route) {
    return route;
  });
  var activeRoute = routesArray.find(function (route, index) {
    var routeInfoOnly = { path: route.props.path, exact: route.props.exact };
    console.log(Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["matchPath"])(url, routeInfoOnly));
    if (Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["matchPath"])(url, routeInfoOnly)) {
      return true;
    }
    return false;
  });

  var activeRouteInfo = {
    route: activeRoute,
    params: Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["matchPath"])(url, { path: activeRoute.props.path, exact: activeRoute.props.exact }).params
  };

  if (!activeRouteInfo.route) {
    // Set 404 Route
    activeRouteInfo = {
      route: routesArray.find(function (route) {
        return route.props.path.match(/\*/) ? route : false;
      })
    };
  }

  return activeRouteInfo;
}

function doRedirect(activeRoute, redirect) {
  if (activeRoute.props.render().props.to) {
    redirect(activeRoute.props.render().props.to);
  }
}

function getCurrentComponent(_ref) {
  var component = _ref.component;


  if (component.preload) {
    // Load Async
    return component.preload().then(function (component) {
      return component.default;
    });
  } else {
    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve) {
      // Load Sync
      resolve(component);
    });
  }
}

var extractInitialData = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(component, request) {
    var initialData;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initialData = {};
            // console.log('extractInitialData', component)

            if (!component.getInitialData) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return component.getInitialData(request);

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

  return function extractInitialData(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

};
//# sourceMappingURL=0.3b8645add4a2f03149cf.hot-update.js.map