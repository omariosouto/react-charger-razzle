exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server__ = __webpack_require__("./src/server/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv__ = __webpack_require__("dotenv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dotenv__);




__WEBPACK_IMPORTED_MODULE_3_dotenv___default.a.config();

var server = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_2__server__["default"]);

var currentApp = __WEBPACK_IMPORTED_MODULE_2__server__["default"];

__WEBPACK_IMPORTED_MODULE_1_react_loadable___default.a.preloadAll().then(function () {
  server.listen("4600");
});

if (true) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept("./src/server/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_2__server__ = __webpack_require__("./src/server/index.js"); (function () {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    var newApp = __webpack_require__("./src/server/index.js").default;
    server.on('request', newApp);
    currentApp = newApp;
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ })

};
//# sourceMappingURL=0.670d11f0338caee8a83e.hot-update.js.map