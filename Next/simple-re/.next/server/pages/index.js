"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home(props) {\n    const userinfo = props.item;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: userinfo.year\n    }, void 0, false, {\n        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this));\n};\nasync function getServerSideProps(props) {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:10001/movies\", {\n        title: \"hi post from next\",\n        year: 1425\n    });\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://127.0.0.1:10001/movies/2\");\n    const data = response.data;\n    return {\n        props: {\n            item: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBRVYsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ25DLEtBQUssQ0FBQ0MsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQUk7SUFFM0IsTUFBTSw2RUFBRUMsQ0FBRTtrQkFBRUYsUUFBUSxDQUFDRyxJQUFJOzs7Ozs7QUFDM0IsQ0FBQztBQUVNLGVBQWVDLGtCQUFrQixDQUFDTCxLQUFLLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUNGLGlEQUFVLENBQUMsQ0FBK0IsZ0NBQUUsQ0FBQztRQUNqRFMsS0FBSyxFQUFFLENBQW1CO1FBQzFCSCxJQUFJLEVBQUUsSUFBSTtJQUNaLENBQUM7SUFDRCxLQUFLLENBQUNJLFFBQVEsR0FBRyxLQUFLLENBQUNWLGdEQUFTLENBQUMsQ0FBaUM7SUFDbEUsS0FBSyxDQUFDWSxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0UsSUFBSTtJQUUxQixNQUFNLENBQUMsQ0FBQztRQUNOVixLQUFLLEVBQUUsQ0FBQztZQUNORSxJQUFJLEVBQUVRLElBQUk7UUFDWixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtcmUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCB1c2VyaW5mbyA9IHByb3BzLml0ZW07XG5cbiAgcmV0dXJuIDxoMT57dXNlcmluZm8ueWVhcn08L2gxPjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhwcm9wcykge1xuICBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwMS9tb3ZpZXNcIiwge1xuICAgIHRpdGxlOiBcImhpIHBvc3QgZnJvbSBuZXh0XCIsXG4gICAgeWVhcjogMTQyNSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMToxMDAwMS9tb3ZpZXMvMlwiKTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbTogZGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiSG9tZSIsInByb3BzIiwidXNlcmluZm8iLCJpdGVtIiwiaDEiLCJ5ZWFyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicG9zdCIsInRpdGxlIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();