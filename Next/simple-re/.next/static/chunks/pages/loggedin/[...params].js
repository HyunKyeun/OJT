/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/loggedin/[...params]"],{

/***/ "./pages/loggedin/[...params].js":
/*!***************************************!*\
  !*** ./pages/loggedin/[...params].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ LoggedinPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_custombtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/custombtn */ \"./components/custombtn.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar __N_SSP = true;\nfunction LoggedinPage(param) {\n    var params = param.params;\n    var router = next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter;\n    console.log(params);\n    var _params = _slicedToArray(params, 1), userid = _params[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2a72f01c54915276\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"jsx-2a72f01c54915276\",\n                    children: [\n                        userid,\n                        \"님 logged in!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/loggedin/[...params].js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/loggedin/[...params].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2a72f01c54915276\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"jsx-2a72f01c54915276\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custombtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            post: \"메인으로 돌아가기\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/loggedin/[...params].js\",\n                            lineNumber: 17,\n                            columnNumber: 20\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/loggedin/[...params].js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/loggedin/[...params].js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/loggedin/[...params].js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2a72f01c54915276\",\n                children: \"div.jsx-2a72f01c54915276{position:relative;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n};\n_c = LoggedinPage;\nvar _c;\n$RefreshReg$(_c, \"LoggedinPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dnZWRpbi9bLi4ucGFyYW1zXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxRQUFRLENBQUNHLFlBQVksQ0FBQyxLQUFRLEVBQUUsQ0FBQztRQUFWQyxNQUFNLEdBQVAsS0FBUSxDQUFQQSxNQUFNO0lBQ3hDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSixrREFBUztJQUN4QkssT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU07SUFDbkIsR0FBYSxDQUFHQSxPQUFNLGtCQUFOQSxNQUFNLE1BQWhCSSxNQUFNLEdBQUlKLE9BQU07SUFFckIsTUFBTTs7d0ZBRURLLENBQUc7O29IQUNDQyxDQUFFOzs7d0JBQUVGLE1BQU07d0JBQUMsQ0FBWTs7Ozs7Ozs7Ozs7O3dGQUV6QkMsQ0FBQzs7c0dBQ0NULGtEQUFJO29CQUFDVyxJQUFJLEVBQUMsQ0FBRzswR0FDVEMsQ0FBQzs7OEdBQUVWLDZEQUFTOzRCQUFDVyxJQUFJLEVBQUMsQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTlDLENBQUM7S0F6QnVCVixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2dlZGluL1suLi5wYXJhbXNdLmpzP2VmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ3VzdG9tYnRuIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2N1c3RvbWJ0blwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dnZWRpblBhZ2Uoe3BhcmFtc30pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpXG4gICBjb25zdFt1c2VyaWRdID0gcGFyYW1zO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz57dXNlcmlkfeuLmCBsb2dnZWQgaW4hPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPjxDdXN0b21idG4gcG9zdD1cIuuplOyduOycvOuhnCDrj4zslYTqsIDquLBcIi8+PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgZGl2e1xuICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5IDogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtczp7cGFyYW1zfX0pIHtcbiAgICByZXR1cm57cHJvcHM6IHtcbiAgICAgICAgcGFyYW1zLFxuICAgIH0sXG59O1xufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiQ3VzdG9tYnRuIiwiTG9nZ2VkaW5QYWdlIiwicGFyYW1zIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZXJpZCIsImRpdiIsImgzIiwiaHJlZiIsImEiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/loggedin/[...params].js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Floggedin%2F%5B...params%5D&absolutePagePath=%2Fhome%2Fdev%2FNHK%2FOJT%2FNext%2Fsimple-re%2Fpages%2Floggedin%2F%5B...params%5D.js!":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Floggedin%2F%5B...params%5D&absolutePagePath=%2Fhome%2Fdev%2FNHK%2FOJT%2FNext%2Fsimple-re%2Fpages%2Floggedin%2F%5B...params%5D.js! ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/loggedin/[...params]\",\n      function () {\n        return __webpack_require__(/*! ./pages/loggedin/[...params].js */ \"./pages/loggedin/[...params].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/loggedin/[...params]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZsb2dnZWRpbiUyRiU1Qi4uLnBhcmFtcyU1RCZhYnNvbHV0ZVBhZ2VQYXRoPSUyRmhvbWUlMkZkZXYlMkZOSEslMkZPSlQlMkZOZXh0JTJGc2ltcGxlLXJlJTJGcGFnZXMlMkZsb2dnZWRpbiUyRiU1Qi4uLnBhcmFtcyU1RC5qcyEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyx3RUFBaUM7QUFDeEQ7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2M1MjAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9sb2dnZWRpbi9bLi4ucGFyYW1zXVwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvbG9nZ2VkaW4vWy4uLnBhcmFtc10uanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2xvZ2dlZGluL1suLi5wYXJhbXNdXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Floggedin%2F%5B...params%5D&absolutePagePath=%2Fhome%2Fdev%2FNHK%2FOJT%2FNext%2Fsimple-re%2Fpages%2Floggedin%2F%5B...params%5D.js!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Floggedin%2F%5B...params%5D&absolutePagePath=%2Fhome%2Fdev%2FNHK%2FOJT%2FNext%2Fsimple-re%2Fpages%2Floggedin%2F%5B...params%5D.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);