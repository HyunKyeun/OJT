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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home(props) {\n    const count = props.item;\n    console.log(count);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-82095d7633c3be6e\" + \" \" + \"main\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-82095d7633c3be6e\",\n                    children: [\n                        count,\n                        \" user Info's are in Nest server!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"82095d7633c3be6e\",\n                children: \".main.jsx-82095d7633c3be6e{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nwidth:100%;\\nmargin-top:10px;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n};\n//현재 nest에 저장된 갯수 확인\nasync function getServerSideProps(props) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://127.0.0.1:10001/userinfo/\");\n    const data = response.data.length;\n    return {\n        props: {\n            item: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBRVYsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ25DLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRCxLQUFLLENBQUNFLElBQUk7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLO0lBQ2pCLE1BQU07O3dGQUVESSxDQUFHOzBEQUFXLENBQU07b0hBQ2xCQyxDQUFFOzs7d0JBQUVMLEtBQUs7d0JBQUMsQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNuRCxDQUFDO0FBRUQsRUFBb0I7QUFDYixlQUFlTSxrQkFBa0IsQ0FBQ1AsS0FBSyxFQUFFLENBQUM7SUFDL0MsS0FBSyxDQUFDUSxRQUFRLEdBQUcsS0FBSyxDQUFDVixnREFBUyxDQUFDLENBQWtDO0lBQ25FLEtBQUssQ0FBQ1ksSUFBSSxHQUFHRixRQUFRLENBQUNFLElBQUksQ0FBQ0MsTUFBTTtJQUVqQyxNQUFNLENBQUMsQ0FBQztRQUNOWCxLQUFLLEVBQUUsQ0FBQztZQUNORSxJQUFJLEVBQUVRLElBQUk7UUFDWixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtcmUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBjb3VudCA9IHByb3BzLml0ZW07XG4gIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxoMT57Y291bnR9IHVzZXIgSW5mbydzIGFyZSBpbiBOZXN0IHNlcnZlciE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbi8v7ZiE7J6sIG5lc3Tsl5Ag7KCA7J6l65CcIOqwr+yImCDtmZXsnbhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocHJvcHMpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjEwMDAxL3VzZXJpbmZvL1wiKTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEubGVuZ3RoO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGl0ZW06IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIkhvbWUiLCJwcm9wcyIsImNvdW50IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

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