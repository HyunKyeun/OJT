"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[...params]",{

/***/ "./pages/movies/[...params].js":
/*!*************************************!*\
  !*** ./pages/movies/[...params].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Detail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Seo */ \"./components/Seo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar __N_SSP = true;\n// params값을 title, id에 넣기\nfunction Detail(param) {\n    var params = param.params;\n    _s1();\n    console.log({\n        params: params\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = _slicedToArray(params || [], 2), title = ref[0], id = ref[1];\n    console.log(router);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: title,\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/movies/[...params].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: id\n            })\n        ]\n    }));\n};\n_s1(Detail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Detail;\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEMsRUFBeUI7QUFDVixRQUFRLENBQUNFLE1BQU0sQ0FBQyxLQUFRLEVBQUMsQ0FBQztRQUFUQyxNQUFNLEdBQVAsS0FBUSxDQUFQQSxNQUFNOztJQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Y7UUFBQUEsTUFBTSxFQUFOQSxNQUFNO0lBQUEsQ0FBQztJQUNwQixHQUFLLENBQUNHLE1BQU0sR0FBR04sc0RBQVM7SUFDeEIsR0FBSyxDQUFlRyxHQUFZLGtCQUFaQSxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQXpCSSxLQUFLLEdBQVFKLEdBQVksS0FBbEJLLEVBQUUsR0FBSUwsR0FBWTtJQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU07SUFDbEIsTUFBTSx1RUFDTEcsQ0FBRzs7Ozs7Ozs7aUZBQ0NSLHVEQUFHO2dCQUFDTSxLQUFLLEVBQUlBLEtBQUs7Ozs7Ozs7O2lGQUNsQkcsQ0FBRTs7Ozs7OzswQkFBRUgsS0FBSzs7aUZBQ1RHLENBQUU7Ozs7Ozs7MEJBQUVGLEVBQUU7Ozs7QUFLZixDQUFDO0lBZHVCTixNQUFNOztRQUVYRixrREFBUzs7O0tBRkpFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzL1suLi5wYXJhbXNdLmpzPzJlZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW9cIjtcblxuXG4vLyBwYXJhbXPqsJLsnYQgdGl0bGUsIGlk7JeQIOuEo+q4sFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsKHtwYXJhbXN9KXtcbiAgICBjb25zb2xlLmxvZyh7cGFyYW1zfSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3RpdGxlLCBpZF0gPSBwYXJhbXMgfHwgW107XG4gICAgY29uc29sZS5sb2cocm91dGVyKTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxTZW8gdGl0bGUgPSB7dGl0bGV9Lz5cbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICA8aDQ+e2lkfTwvaDQ+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICAgICk7XG5cbn1cbi8vIHBhcmFtcyDqsJLsl5Ag7J6F66Cl7ZaI642YIOqwkiBpZCwgdGl0bGXqsJIg64Sj6rOgLCBwcm9wc+yXkCBwYXJhbXMg64Sj6riwXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6e3BhcmFtc319KSB7XG4gICAgICAgIHJldHVybnsgcHJvcHM6IHtcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTZW8iLCJEZXRhaWwiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidGl0bGUiLCJpZCIsImRpdiIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[...params].js\n");

/***/ })

});