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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _components_lavel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/lavel */ \"./components/lavel.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_custombtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/custombtn */ \"./components/custombtn.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LoginPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), /*#__PURE__*/ changedUserid = ref[0], setchangeUserid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserpw = ref1[0], setchangeUserpw = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserpw2 = ref2[0], setchangeUserpw2 = ref2[1];\n    var onClick = function(userid, userpw) {\n        {\n            userid === \"\" ? (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Put your ID \") : axios__WEBPACK_IMPORTED_MODULE_10___default().get(\"http://127.0.0.1:10001/userinfo/\".concat(userid)).then(function(response) {\n                response.data.userid === userid && response.data.userpw === userpw && email !== \"\" && username !== \"\" ? axios__WEBPACK_IMPORTED_MODULE_10___default().patch(\"http://127.0.0.1:10001/userinfo/\".concat(userid), {\n                    email: \"\".concat(email),\n                    name: \"\".concat(username)\n                }).then(function(response) {\n                    router.push(\"/Modified/\".concat(userid));\n                }).catch(function(error) {\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Unexpected error occuried sry\");\n                }) : response.data.userpw !== userpw ? (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"PW is Wrong\") : (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Put all material\");\n            }).catch(function(error) {\n                (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"There are no user ID : \".concat(userid));\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sig\", {\n        className: \"jsx-c089c38ed7fcb033\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userid\",\n                        post: \"- ID\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userid\",\n                        placeholder: \"아이디\",\n                        onChange: function(e) {\n                            return setchangeUserid(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userpw\",\n                        post: \"- PW\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userpw\",\n                        placeholder: \"패스워드\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setchangeUserpw(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userpw\",\n                        post: \"- PW\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userpw\",\n                        placeholder: \"패스워드 재확인\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setchangeUserpw2(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {}, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return onClick(changedUserid, changedUserpw);\n                    },\n                    className: \"jsx-c089c38ed7fcb033\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"jsx-c089c38ed7fcb033\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custombtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            post: \"삭제하기\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c089c38ed7fcb033\",\n                children: \"sig.jsx-c089c38ed7fcb033{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nwidth:100%;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column}\\n.input.jsx-c089c38ed7fcb033{padding-left:80px;\\npadding-right:80px}\\n.btn.jsx-c089c38ed7fcb033{margin-top:10px;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center}\\na.jsx-c089c38ed7fcb033{color:blue;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:visited{color:purple;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:hover{color:red;\\ntext-decoration:underline;\\nfont-size:14px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/DeletePage.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n};\n_s(LoginPage, \"a3YCl9XxAge+Ce/mzudXqnR6ePU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDZkosUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBS3hCLE1BQU0sQ0FBTkEsZUFBZSxDQUFDd0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7d0ZBR2xEUixDQUFHOzBEQUFXLENBQU87O2dHQUNuQi9CLHlEQUFLO3dCQUFDZ0MsRUFBRSxFQUFDLENBQVE7d0JBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Z0dBQzdCbEMseURBQU07d0JBQ0xtQyxFQUFFLEVBQUMsQ0FBUTt3QkFDWEMsV0FBVyxFQUFDLENBQVU7d0JBQ1JLLElBQVYsRUFBQyxDQUFVO3dCQUNmSixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLdEIsTUFBTSxDQUFOQSxnQkFBZ0IsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7O3dGQUluRGxDLDBEQUFjOzs7Ozt3RkFDZDBCLENBQUc7MERBQVcsQ0FBSztzR0FDakJBLENBQUc7b0JBQUNmLE9BQU8sRUFBRSxRQUFRO3dCQUFGQSxNQUFNLENBQU5BLE9BQU8sQ0FBQ04sYUFBYSxFQUFFRSxhQUFhOzs7MEdBQ3JENkIsQ0FBQzs7OEdBQ0N2Qyw2REFBUzs0QkFBQytCLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNsQyxDQUFDO0dBL0d1QnpCLFNBQVM7O1FBQ2hCTCxrREFBUzs7O0tBREZLLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGVsZXRlUGFnZS5qcz8xMTg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRcIjtcbmltcG9ydCBMYXZlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXZlbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEN1c3RvbWJ0biBmcm9tIFwiLi4vY29tcG9uZW50cy9jdXN0b21idG5cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY2hhbmdlZFVzZXJpZCwgc2V0Y2hhbmdlVXNlcmlkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhbmdlZFVzZXJwdywgc2V0Y2hhbmdlVXNlcnB3XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhbmdlZFVzZXJwdzIsIHNldGNoYW5nZVVzZXJwdzJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uQ2xpY2sgPSAodXNlcmlkLCB1c2VycHcpID0+IHtcbiAgICB7XG4gICAgICB1c2VyaWQgPT09IFwiXCJcbiAgICAgICAgPyB0b2FzdChcIlB1dCB5b3VyIElEIFwiKVxuICAgICAgICA6IGF4aW9zXG4gICAgICAgICAgICAuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjEwMDAxL3VzZXJpbmZvLyR7dXNlcmlkfWApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS51c2VyaWQgPT09IHVzZXJpZCAmJlxuICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnVzZXJwdyA9PT0gdXNlcnB3ICYmXG4gICAgICAgICAgICAgIGVtYWlsICE9PSBcIlwiICYmXG4gICAgICAgICAgICAgIHVzZXJuYW1lICE9PSBcIlwiXG4gICAgICAgICAgICAgICAgPyBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucGF0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6MTAwMDEvdXNlcmluZm8vJHt1c2VyaWR9YCwge1xuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBgJHtlbWFpbH1gLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGAke3VzZXJuYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvTW9kaWZpZWQvJHt1c2VyaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdChgVW5leHBlY3RlZCBlcnJvciBvY2N1cmllZCBzcnlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHJlc3BvbnNlLmRhdGEudXNlcnB3ICE9PSB1c2VycHdcbiAgICAgICAgICAgICAgICA/IHRvYXN0KGBQVyBpcyBXcm9uZ2ApXG4gICAgICAgICAgICAgICAgOiB0b2FzdChgUHV0IGFsbCBtYXRlcmlhbGApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgdG9hc3QoYFRoZXJlIGFyZSBubyB1c2VyIElEIDogJHt1c2VyaWR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2lnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICA8TGF2ZWwgaGY9XCJ1c2VyaWRcIiBwb3N0PVwiLSBJRFwiIC8+XG4gICAgICAgIDxJbnB1dHNcbiAgICAgICAgICBpZD1cInVzZXJpZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Y2hhbmdlVXNlcmlkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICA8TGF2ZWwgaGY9XCJ1c2VycHdcIiBwb3N0PVwiLSBQV1wiIC8+XG4gICAgICAgIDxJbnB1dHNcbiAgICAgICAgICBpZD1cInVzZXJwd1wiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLtjKjsiqTsm4zrk5xcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRjaGFuZ2VVc2VycHcoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgIDxMYXZlbCBoZj1cInVzZXJwd1wiIHBvc3Q9XCItIFBXXCIgLz5cbiAgICAgICAgPElucHV0c1xuICAgICAgICAgIGlkPVwidXNlcnB3XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2MqOyKpOybjOuTnCDsnqztmZXsnbhcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRjaGFuZ2VVc2VycHcyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25DbGljayhjaGFuZ2VkVXNlcmlkLCBjaGFuZ2VkVXNlcnB3KX0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8Q3VzdG9tYnRuIHBvc3Q9XCLsgq3soJztlZjquLBcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzaWcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogcHVycGxlO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2lnPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIklucHV0cyIsIkxhdmVsIiwiTGluayIsIkN1c3RvbWJ0biIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsImF4aW9zIiwiTG9naW5QYWdlIiwicm91dGVyIiwiY2hhbmdlZFVzZXJpZCIsInNldGNoYW5nZVVzZXJpZCIsImNoYW5nZWRVc2VycHciLCJzZXRjaGFuZ2VVc2VycHciLCJjaGFuZ2VkVXNlcnB3MiIsInNldGNoYW5nZVVzZXJwdzIiLCJvbkNsaWNrIiwidXNlcmlkIiwidXNlcnB3IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJwYXRjaCIsIm5hbWUiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsInNpZyIsImRpdiIsImhmIiwicG9zdCIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DeletePage.js\n");

/***/ })

});