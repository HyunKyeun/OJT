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
exports.id = "pages/movies/[...params]";
exports.ids = ["pages/movies/[...params]"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        __source: {\n            fileName: \"/home/dev/NHK/OJT/Next/next-test/components/Seo.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"title\", {\n            __source: {\n                fileName: \"/home/dev/NHK/OJT/Next/next-test/components/Seo.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFFYixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNwQyxNQUFNLHNFQUNERixrREFBSTs7Ozs7Ozt3RkFDQUUsQ0FBSzs7Ozs7Ozs7Z0JBQUVBLEtBQUs7Z0JBQUMsQ0FBYzs7OztBQUd4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vY29tcG9uZW50cy9TZW8uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbyh7IHRpdGxlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9IHwgTmV4dCBNb3ZpZXM8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiU2VvIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/movies/[...params].js":
/*!*************************************!*\
  !*** ./pages/movies/[...params].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Detail),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Seo */ \"./components/Seo.js\");\n\n\n\n//\nfunction Detail({ params  }) {\n    console.log({\n        params\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [title, id] = params || [];\n    console.log(router);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: title,\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: id\n            })\n        ]\n    }));\n};\n// \nfunction getServerSideProps({ params: { params  }  }) {\n    return {\n        props: {\n            params\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUM7QUFDQztBQUd0QyxFQUFFO0FBQ2EsUUFBUSxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsQ0FBQUEsTUFBTSxHQUFDLEVBQUMsQ0FBQztJQUNyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Y7UUFBQUEsTUFBTTtJQUFBLENBQUM7SUFDcEIsS0FBSyxDQUFDRyxNQUFNLEdBQUdOLHNEQUFTO0lBQ3hCLEtBQUssRUFBRU8sS0FBSyxFQUFFQyxFQUFFLElBQUlMLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNO0lBQ2xCLE1BQU0sdUVBQ0xHLENBQUc7Ozs7Ozs7O2lGQUNDUix1REFBRztnQkFBQ00sS0FBSyxFQUFJQSxLQUFLOzs7Ozs7OztpRkFDbEJHLENBQUU7Ozs7Ozs7MEJBQUVILEtBQUs7O2lGQUNURyxDQUFFOzs7Ozs7OzBCQUFFRixFQUFFOzs7O0FBS2YsQ0FBQztBQUNELEVBQUc7QUFDSSxTQUFTRyxrQkFBa0IsQ0FBQyxDQUFDUixDQUFBQSxNQUFNLEVBQUMsQ0FBQ0EsQ0FBQUEsTUFBTSxHQUFDLEdBQUMsRUFBRSxDQUFDO0lBQy9DLE1BQU0sRUFBQztRQUFDUyxLQUFLLEVBQUUsQ0FBQztZQUNaVCxNQUFNO1FBQ1YsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vcGFnZXMvbW92aWVzL1suLi5wYXJhbXNdLmpzPzJlZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW9cIjtcblxuXG4vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsKHtwYXJhbXN9KXtcbiAgICBjb25zb2xlLmxvZyh7cGFyYW1zfSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3RpdGxlLCBpZF0gPSBwYXJhbXMgfHwgW107XG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxTZW8gdGl0bGUgPSB7dGl0bGV9Lz5cbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICA8aDQ+e2lkfTwvaDQ+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICAgICk7XG5cbn1cbi8vIFxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zOntwYXJhbXN9fSkge1xuICAgICAgICByZXR1cm57IHByb3BzOiB7XG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgfTtcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU2VvIiwiRGV0YWlsIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInRpdGxlIiwiaWQiLCJkaXYiLCJoNCIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[...params].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[...params].js"));
module.exports = __webpack_exports__;

})();