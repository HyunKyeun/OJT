"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ModifyingPage",{

/***/ "./pages/ModifyingPage.js":
/*!********************************!*\
  !*** ./pages/ModifyingPage.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _components_lavel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/lavel */ \"./components/lavel.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_custombtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/custombtn */ \"./components/custombtn.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LoginPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), /*#__PURE__*/ changedEmail = ref[0], setchangeEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedName = ref1[0], setchangeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserid = ref2[0], setchangeUserid = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserpw = ref3[0], setchangeUserpw = ref3[1];\n    var onClick = function(email, username, userid, userpw) {\n        {\n            userid === \"\" || userpw === \"\" ? (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Please write ID and PW\") : axios__WEBPACK_IMPORTED_MODULE_10___default().patch(\"http://127.0.0.1:10001/userinfo/\".concat(userid)).then(function(response) {\n                response.data.userid === userid && response.data.userpw === userpw ? router.push(\"loggedin/\".concat(userid)) : (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Your PW isn't correct\");\n            }).catch(function(error) {\n                (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"There are no user ID : \".concat(userid));\n            });\n        }\n    };\n    var onClickToast = function() {\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"I didnt make it yet\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sig\", {\n        className: \"jsx-c089c38ed7fcb033\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {}, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"emails\",\n                        post: \"- E-Mail\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"email\",\n                        placeholder: \"E-Mail\",\n                        type: \"email\",\n                        onChange: function(e) {\n                            return setchangeEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"name\",\n                        post: \"- 이름\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"name\",\n                        placeholder: \"이름\",\n                        onChange: function(e) {\n                            return setchangeName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userid\",\n                        post: \"- ID\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userid\",\n                        placeholder: \"아이디\",\n                        onChange: function(e) {\n                            return setchangeUserid(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userpw\",\n                        post: \"- PW\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userpw\",\n                        placeholder: \"패스워드\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setchangeUserpw(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {}, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return onClick(changedEmail, changedName, changedUserid, changedUserpw);\n                    },\n                    className: \"jsx-c089c38ed7fcb033\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"jsx-c089c38ed7fcb033\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custombtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            post: \"수정하기\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c089c38ed7fcb033\",\n                children: \"sig.jsx-c089c38ed7fcb033{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nwidth:100%;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column}\\n.input.jsx-c089c38ed7fcb033{padding-left:80px;\\npadding-right:80px}\\n.btn.jsx-c089c38ed7fcb033{margin-top:10px;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center}\\na.jsx-c089c38ed7fcb033{color:blue;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:visited{color:purple;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:hover{color:red;\\ntext-decoration:underline;\\nfont-size:14px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this));\n};\n_s(LoginPage, \"ADiFLl9hhQd7CBLXZvG7RBrdXuk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7d0JBQUNpQyxFQUFFLEVBQUMsQ0FBUTt3QkFBQ0MsSUFBSSxFQUFDLENBQU07Ozs7OztnR0FDN0JuQyx5REFBTTt3QkFDTG9DLEVBQUUsRUFBQyxDQUFRO3dCQUNYQyxXQUFXLEVBQUMsQ0FBSzt3QkFDWEUsUUFBRSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBS3hCLE1BQU0sQ0FBTkEsZUFBZSxDQUFDd0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7d0ZBR2xEVCxDQUFHOzBEQUFXLENBQU87O2dHQUNuQmhDLHlEQUFLO3dCQUFDaUMsRUFBRSxFQUFDLENBQVE7d0JBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Z0dBQzdCbkMseURBQU07d0JBQ0xvQyxFQUFFLEVBQUMsQ0FBUTt3QkFDWEMsV0FBVyxFQUFDLENBQU07d0JBQ1ZDLElBQUosRUFBQyxDQUFVO3dCQUNmQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLdEIsTUFBTSxDQUFOQSxlQUFlLENBQUNzQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozt3RkFHbERwQywwREFBYzs7Ozs7d0ZBQ2QyQixDQUFHOzBEQUFXLENBQUs7c0dBQ2pCQSxDQUFHO29CQUNGZCxPQUFPLEVBQUUsUUFDakI7d0JBQVVBLE1BQU0sQ0FBTkEsT0FBTyxDQUFDUixZQUFZLEVBQUVFLFdBQVcsRUFBRUUsYUFBYSxFQUFFRSxhQUFhOzs7MEdBR2hFMEIsQ0FBQzs7OEdBQ0N4Qyw2REFBUzs0QkFBQ2dDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNsQyxDQUFDO0dBaEh1QjFCLFNBQVM7O1FBQ2hCTCxrREFBUzs7O0tBREZLLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTW9kaWZ5aW5nUGFnZS5qcz83N2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRcIjtcbmltcG9ydCBMYXZlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXZlbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEN1c3RvbWJ0biBmcm9tIFwiLi4vY29tcG9uZW50cy9jdXN0b21idG5cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY2hhbmdlZEVtYWlsLCBzZXRjaGFuZ2VFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NoYW5nZWROYW1lLCBzZXRjaGFuZ2VOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhbmdlZFVzZXJpZCwgc2V0Y2hhbmdlVXNlcmlkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhbmdlZFVzZXJwdywgc2V0Y2hhbmdlVXNlcnB3XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvbkNsaWNrID0gKGVtYWlsLCB1c2VybmFtZSwgdXNlcmlkLCB1c2VycHcpID0+IHtcbiAgICB7XG4gICAgICB1c2VyaWQgPT09IFwiXCIgfHwgdXNlcnB3ID09PSBcIlwiXG4gICAgICAgID8gdG9hc3QoXCJQbGVhc2Ugd3JpdGUgSUQgYW5kIFBXXCIpXG4gICAgICAgIDogYXhpb3NcbiAgICAgICAgICAgIC5wYXRjaChgaHR0cDovLzEyNy4wLjAuMToxMDAwMS91c2VyaW5mby8ke3VzZXJpZH1gKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEudXNlcmlkID09PSB1c2VyaWQgJiYgcmVzcG9uc2UuZGF0YS51c2VycHcgPT09IHVzZXJwd1xuICAgICAgICAgICAgICAgID8gcm91dGVyLnB1c2goYGxvZ2dlZGluLyR7dXNlcmlkfWApXG4gICAgICAgICAgICAgICAgOiB0b2FzdChcIllvdXIgUFcgaXNuJ3QgY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIHRvYXN0KGBUaGVyZSBhcmUgbm8gdXNlciBJRCA6ICR7dXNlcmlkfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tUb2FzdCA9ICgpID0+IHtcbiAgICB0b2FzdChcIkkgZGlkbnQgbWFrZSBpdCB5ZXRcIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNpZz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgIDxMYXZlbCBoZj1cImVtYWlsc1wiIHBvc3Q9XCItIEUtTWFpbFwiIC8+XG4gICAgICAgIDxJbnB1dHNcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtTWFpbFwiXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGNoYW5nZUVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICA8TGF2ZWwgaGY9XCJuYW1lXCIgcG9zdD1cIi0g7J2066aEXCIgLz5cbiAgICAgICAgPElucHV0c1xuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Y2hhbmdlTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgPExhdmVsIGhmPVwidXNlcmlkXCIgcG9zdD1cIi0gSURcIiAvPlxuICAgICAgICA8SW5wdXRzXG4gICAgICAgICAgaWQ9XCJ1c2VyaWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JWE7J2065SUXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGNoYW5nZVVzZXJpZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgPExhdmVsIGhmPVwidXNlcnB3XCIgcG9zdD1cIi0gUFdcIiAvPlxuICAgICAgICA8SW5wdXRzXG4gICAgICAgICAgaWQ9XCJ1c2VycHdcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Yyo7Iqk7JuM65OcXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Y2hhbmdlVXNlcnB3KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIG9uQ2xpY2soY2hhbmdlZEVtYWlsLCBjaGFuZ2VkTmFtZSwgY2hhbmdlZFVzZXJpZCwgY2hhbmdlZFVzZXJwdylcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxDdXN0b21idG4gcG9zdD1cIuyImOygle2VmOq4sFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNpZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zaWc+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW5wdXRzIiwiTGF2ZWwiLCJMaW5rIiwiQ3VzdG9tYnRuIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiYXhpb3MiLCJMb2dpblBhZ2UiLCJyb3V0ZXIiLCJjaGFuZ2VkRW1haWwiLCJzZXRjaGFuZ2VFbWFpbCIsImNoYW5nZWROYW1lIiwic2V0Y2hhbmdlTmFtZSIsImNoYW5nZWRVc2VyaWQiLCJzZXRjaGFuZ2VVc2VyaWQiLCJjaGFuZ2VkVXNlcnB3Iiwic2V0Y2hhbmdlVXNlcnB3Iiwib25DbGljayIsInVzZXJuYW1lIiwiZW1haWwiLCJ1c2VyaWQiLCJ1c2VycHciLCJwYXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsIm9uQ2xpY2tUb2FzdCIsInNpZyIsImRpdiIsImhmIiwicG9zdCIsImlkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ModifyingPage.js\n");

/***/ })

});