"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DeletePage",{

/***/ "./pages/DeletePage.js":
/*!*****************************!*\
  !*** ./pages/DeletePage.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _components_lavel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/lavel */ \"./components/lavel.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_custombtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/custombtn */ \"./components/custombtn.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LoginPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), /*#__PURE__*/ changedUserid = ref[0], setchangeUserid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserpw = ref1[0], setchangeUserpw = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserpw2 = ref2[0], setchangeUserpw2 = ref2[1];\n    var onClick = function(userid, userpw, userpw2) {\n        {\n            userid === \"\" ? (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Put your ID \") : axios__WEBPACK_IMPORTED_MODULE_10___default().get(\"http://127.0.0.1:10001/userinfo/\".concat(userid)).then(function(response) {\n                response.data.userid === userid && response.data.userpw === userpw && userpw === userpw2 ? axios__WEBPACK_IMPORTED_MODULE_10___default()[\"delete\"](\"http://127.0.0.1:10001/userinfo/\".concat(userid)).then(function(response) {\n                    router.push(\"/Modified/\".concat(userid));\n                }).catch(function(error) {\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Unexpected error occuried sry\");\n                }) : userpw !== userpw2 ? (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"PW is Wrong\") : (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Put all material\");\n            }).catch(function(error) {\n                (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"There are no user ID : \".concat(userid));\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sig\", {\n        className: \"jsx-c089c38ed7fcb033\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userid\",\n                        post: \"- ID\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userid\",\n                        placeholder: \"아이디\",\n                        onChange: function(e) {\n                            return setchangeUserid(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userpw\",\n                        post: \"- PW\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userpw\",\n                        placeholder: \"패스워드\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setchangeUserpw(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userpw\",\n                        post: \"- PW 재확인\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userpw\",\n                        placeholder: \"패스워드 재확인\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setchangeUserpw2(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {}, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return onClick(changedUserid, changedUserpw, changedUserpw2);\n                    },\n                    className: \"jsx-c089c38ed7fcb033\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"jsx-c089c38ed7fcb033\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custombtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            post: \"삭제하기\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c089c38ed7fcb033\",\n                children: \"sig.jsx-c089c38ed7fcb033{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nwidth:100%;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column}\\n.input.jsx-c089c38ed7fcb033{padding-left:80px;\\npadding-right:80px}\\n.btn.jsx-c089c38ed7fcb033{margin-top:10px;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center}\\na.jsx-c089c38ed7fcb033{color:blue;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:visited{color:purple;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:hover{color:red;\\ntext-decoration:underline;\\nfont-size:14px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this));\n};\n_s(LoginPage, \"a3YCl9XxAge+Ce/mzudXqnR6ePU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQU87O2dHQUNuQjdCLHlEQUFLO3dCQUFDOEIsRUFBRSxFQUFDLENBQVE7d0JBQUNDLElBQUksRUFBQyxDQUFVOzs7Ozs7Z0dBQzNCaEMseURBQUE7d0JBQ0xpQyxFQUFFLEVBQUMsQ0FBUTt3QkFDWEMsV0FBVyxFQUFDLENBQVU7d0JBQ1JLLElBQVYsRUFBQyxDQUFVO3dCQUNmSixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLcEIsTUFBTSxDQUFOQSxnQkFBZ0IsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7O3dGQUluRGhDLDBEQUFjOzs7Ozt3RkFDZHdCLENBQUc7MERBQVcsQ0FBSztzR0FDakJBLENBQUc7b0JBQ0ZiLE9BQU8sRUFBRSxRQUFRO3dCQUFGQSxNQUFNLENBQU5BLE9BQU8sQ0FBQ04sYUFBYSxFQUFFRSxhQUFhLEVBQUVFLGNBQWM7OzswR0FFbEV5QixDQUFDOzs4R0FDQ3JDLDZEQUFTOzRCQUFDNkIsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q2xDLENBQUM7R0E3R3VCdkIsU0FBUzs7UUFDaEJMLGtEQUFTOzs7S0FERkssU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EZWxldGVQYWdlLmpzPzExODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dFwiO1xuaW1wb3J0IExhdmVsIGZyb20gXCIuLi9jb21wb25lbnRzL2xhdmVsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ3VzdG9tYnRuIGZyb20gXCIuLi9jb21wb25lbnRzL2N1c3RvbWJ0blwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjaGFuZ2VkVXNlcmlkLCBzZXRjaGFuZ2VVc2VyaWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGFuZ2VkVXNlcnB3LCBzZXRjaGFuZ2VVc2VycHddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGFuZ2VkVXNlcnB3Miwgc2V0Y2hhbmdlVXNlcnB3Ml0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25DbGljayA9ICh1c2VyaWQsIHVzZXJwdywgdXNlcnB3MikgPT4ge1xuICAgIHtcbiAgICAgIHVzZXJpZCA9PT0gXCJcIlxuICAgICAgICA/IHRvYXN0KFwiUHV0IHlvdXIgSUQgXCIpXG4gICAgICAgIDogYXhpb3NcbiAgICAgICAgICAgIC5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6MTAwMDEvdXNlcmluZm8vJHt1c2VyaWR9YClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnVzZXJpZCA9PT0gdXNlcmlkICYmXG4gICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEudXNlcnB3ID09PSB1c2VycHcgJiZcbiAgICAgICAgICAgICAgdXNlcnB3ID09PSB1c2VycHcyXG4gICAgICAgICAgICAgICAgPyBheGlvc1xuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlKGBodHRwOi8vMTI3LjAuMC4xOjEwMDAxL3VzZXJpbmZvLyR7dXNlcmlkfWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvTW9kaWZpZWQvJHt1c2VyaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdChgVW5leHBlY3RlZCBlcnJvciBvY2N1cmllZCBzcnlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHVzZXJwdyAhPT0gdXNlcnB3MlxuICAgICAgICAgICAgICAgID8gdG9hc3QoYFBXIGlzIFdyb25nYClcbiAgICAgICAgICAgICAgICA6IHRvYXN0KGBQdXQgYWxsIG1hdGVyaWFsYCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICB0b2FzdChgVGhlcmUgYXJlIG5vIHVzZXIgSUQgOiAke3VzZXJpZH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzaWc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgIDxMYXZlbCBoZj1cInVzZXJpZFwiIHBvc3Q9XCItIElEXCIgLz5cbiAgICAgICAgPElucHV0c1xuICAgICAgICAgIGlkPVwidXNlcmlkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRjaGFuZ2VVc2VyaWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgIDxMYXZlbCBoZj1cInVzZXJwd1wiIHBvc3Q9XCItIFBXXCIgLz5cbiAgICAgICAgPElucHV0c1xuICAgICAgICAgIGlkPVwidXNlcnB3XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2MqOyKpOybjOuTnFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGNoYW5nZVVzZXJwdyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgPExhdmVsIGhmPVwidXNlcnB3XCIgcG9zdD1cIi0gUFcg7J6s7ZmV7J24XCIgLz5cbiAgICAgICAgPElucHV0c1xuICAgICAgICAgIGlkPVwidXNlcnB3XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2MqOyKpOybjOuTnCDsnqztmZXsnbhcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRjaGFuZ2VVc2VycHcyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGNoYW5nZWRVc2VyaWQsIGNoYW5nZWRVc2VycHcsIGNoYW5nZWRVc2VycHcyKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEN1c3RvbWJ0biBwb3N0PVwi7IKt7KCc7ZWY6riwXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2lnIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NpZz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbnB1dHMiLCJMYXZlbCIsIkxpbmsiLCJDdXN0b21idG4iLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJheGlvcyIsIkxvZ2luUGFnZSIsInJvdXRlciIsImNoYW5nZWRVc2VyaWQiLCJzZXRjaGFuZ2VVc2VyaWQiLCJjaGFuZ2VkVXNlcnB3Iiwic2V0Y2hhbmdlVXNlcnB3IiwiY2hhbmdlZFVzZXJwdzIiLCJzZXRjaGFuZ2VVc2VycHcyIiwib25DbGljayIsInVzZXJpZCIsInVzZXJwdyIsInVzZXJwdzIiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZGVsZXRlIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJzaWciLCJkaXYiLCJoZiIsInBvc3QiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DeletePage.js\n");

/***/ })

});