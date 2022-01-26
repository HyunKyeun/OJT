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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home(props) {\n    const count = props.item;\n    console.log(count);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            count,\n            \" user Info's are in Nest server!\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this));\n};\n//현재 nest에 저장된 갯수 확인\nasync function getServerSideProps(props) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://127.0.0.1:10001/userinfo/\");\n    const data = response.data.length;\n    return {\n        props: {\n            item: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBRVYsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ25DLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRCxLQUFLLENBQUNFLElBQUk7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLO0lBQ2pCLE1BQU0sNkVBQUVJLENBQUU7O1lBQUVKLEtBQUs7WUFBQyxDQUFnQzs7Ozs7OztBQUNwRCxDQUFDO0FBRUQsRUFBb0I7QUFDYixlQUFlSyxrQkFBa0IsQ0FBQ04sS0FBSyxFQUFFLENBQUM7SUFDL0MsS0FBSyxDQUFDTyxRQUFRLEdBQUcsS0FBSyxDQUFDVCxnREFBUyxDQUFDLENBQWtDO0lBQ25FLEtBQUssQ0FBQ1csSUFBSSxHQUFHRixRQUFRLENBQUNFLElBQUksQ0FBQ0MsTUFBTTtJQUVqQyxNQUFNLENBQUMsQ0FBQztRQUNOVixLQUFLLEVBQUUsQ0FBQztZQUNORSxJQUFJLEVBQUVPLElBQUk7UUFDWixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtcmUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBjb3VudCA9IHByb3BzLml0ZW07XG4gIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgcmV0dXJuIDxoMT57Y291bnR9IHVzZXIgSW5mbydzIGFyZSBpbiBOZXN0IHNlcnZlciE8L2gxPjtcbn1cblxuLy/tmITsnqwgbmVzdOyXkCDsoIDsnqXrkJwg6rCv7IiYIO2ZleyduFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhwcm9wcykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6MTAwMDEvdXNlcmluZm8vXCIpO1xuICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YS5sZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbTogZGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiSG9tZSIsInByb3BzIiwiY291bnQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImgxIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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