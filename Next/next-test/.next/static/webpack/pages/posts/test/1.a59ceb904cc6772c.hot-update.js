"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/test/1",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Navbar() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        __source: {\n            fileName: \"/home/dev/NHK/OJT/Next/next-test/components/NavBar.js\",\n            lineNumber: 8,\n            columnNumber: 6\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/components/NavBar.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    style: {\n                        color: router.pathname === \"/\" ? \"red\" : \"blue\"\n                    },\n                    __source: {\n                        fileName: \"/home/dev/NHK/OJT/Next/next-test/components/NavBar.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"home\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/posts/test/1\",\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/components/NavBar.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    style: {\n                        color: router.pathname === \"/posts/test/1\" ? \"red\" : \"blue\"\n                    },\n                    __source: {\n                        fileName: \"/home/dev/NHK/OJT/Next/next-test/components/NavBar.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"About\"\n                })\n            })\n        ]\n    }));\n}; // import Link from \"next/link\";\n // import {useRouter} from \"next/router\"\n // export default function Navbar3(){\n //     const router = useRouter();\n //     console.log(router);\n //     return(\n //      <nav>\n //         <Link href =\"/\">\n //         <a style = {{color : router.pathname === \"/\" ? \"red\" : \"blue\" }}>home</a>\n //         </Link>\n //         <Link href = \"/posts/test/1\">\n //         <a style = {{color : router.pathname === \"/posts/test/1\" ?  \"red\" : \"blue\" }}>About</a>\n //         </Link>\n //     </nav>\n //     )\n // }\n_s(Navbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDUzs7QUFFdEIsUUFBUSxDQUFDRSxNQUFNLEdBQUUsQ0FBQzs7SUFDN0IsR0FBSyxDQUFDQyxNQUFNLEdBQUdGLHNEQUFTO0lBQ3hCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtJQUNsQixNQUFNLHVFQUNKRyxDQUFHOzs7Ozs7OztpRkFDQU4sa0RBQUk7Z0JBQUNPLElBQUksRUFBRSxDQUFHOzs7Ozs7OytGQUNkQyxDQUFDO29CQUFDQyxLQUFLLEVBQUksQ0FBQ0M7d0JBQUFBLEtBQUssRUFBR1AsTUFBTSxDQUFDUSxRQUFRLEtBQUssQ0FBRyxLQUFHLENBQUssT0FBRyxDQUFNO29CQUFDLENBQUM7Ozs7Ozs7OEJBQUUsQ0FBSTs7O2lGQUdwRVgsa0RBQUk7Z0JBQUNPLElBQUksRUFBRyxDQUFlOzs7Ozs7OytGQUMzQkMsQ0FBQztvQkFBQ0MsS0FBSyxFQUFJLENBQUNDO3dCQUFBQSxLQUFLLEVBQUdQLE1BQU0sQ0FBQ1EsUUFBUSxLQUFLLENBQWUsaUJBQUksQ0FBSyxPQUFHLENBQU07b0JBQUMsQ0FBQzs7Ozs7Ozs4QkFBRSxDQUFLOzs7OztBQUszRixDQUFDLENBRUQsQ0FBZ0M7QUFDaEMsQ0FBd0M7QUFFeEMsQ0FBcUM7QUFDckMsQ0FBa0M7QUFDbEMsQ0FBMkI7QUFDM0IsQ0FBYztBQUNkLENBQWE7QUFDYixDQUEyQjtBQUMzQixDQUFvRjtBQUNwRixDQUFrQjtBQUVsQixDQUF3QztBQUN4QyxDQUFrRztBQUNsRyxDQUFrQjtBQUVsQixDQUFhO0FBQ2IsQ0FBUTtBQUNSLENBQUk7R0FuQ29CVCxNQUFNOztRQUNYRCxrREFBUzs7O0tBREpDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCl7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcbiAgICByZXR1cm4oXG4gICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIGhyZWYgPVwiL1wiPlxuICAgICAgICA8YSBzdHlsZSA9IHt7Y29sb3IgOiByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJyZWRcIiA6IFwiYmx1ZVwiIH19PmhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8TGluayBocmVmID0gXCIvcG9zdHMvdGVzdC8xXCI+XG4gICAgICAgIDxhIHN0eWxlID0ge3tjb2xvciA6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcG9zdHMvdGVzdC8xXCIgPyAgXCJyZWRcIiA6IFwiYmx1ZVwiIH19PkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICA8L25hdj5cbiAgICApXG59XG5cbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIzKCl7XG4vLyAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4vLyAgICAgY29uc29sZS5sb2cocm91dGVyKTtcbi8vICAgICByZXR1cm4oXG4vLyAgICAgIDxuYXY+XG4vLyAgICAgICAgIDxMaW5rIGhyZWYgPVwiL1wiPlxuLy8gICAgICAgICA8YSBzdHlsZSA9IHt7Y29sb3IgOiByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJyZWRcIiA6IFwiYmx1ZVwiIH19PmhvbWU8L2E+XG4vLyAgICAgICAgIDwvTGluaz5cblxuLy8gICAgICAgICA8TGluayBocmVmID0gXCIvcG9zdHMvdGVzdC8xXCI+XG4vLyAgICAgICAgIDxhIHN0eWxlID0ge3tjb2xvciA6IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcG9zdHMvdGVzdC8xXCIgPyAgXCJyZWRcIiA6IFwiYmx1ZVwiIH19PkFib3V0PC9hPlxuLy8gICAgICAgICA8L0xpbms+XG5cbi8vICAgICA8L25hdj5cbi8vICAgICApXG4vLyB9Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiaHJlZiIsImEiLCJzdHlsZSIsImNvbG9yIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});