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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _components_lavel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/lavel */ \"./components/lavel.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_custombtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/custombtn */ \"./components/custombtn.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LoginPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), /*#__PURE__*/ changedEmail = ref[0], setchangeEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedName = ref1[0], setchangeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserid = ref2[0], setchangeUserid = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), changedUserpw = ref3[0], setchangeUserpw = ref3[1];\n    var onClick = function(email, username, userid, userpw) {\n        {\n            userid === \"\" ? (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Put your ID \") : axios__WEBPACK_IMPORTED_MODULE_10___default().get(\"http://127.0.0.1:10001/userinfo/\".concat(userid)).then(function(response1) {\n                response1.data.userid === userid && response1.data.userpw === userpw && email !== \"\" && username !== \"\" ? axios__WEBPACK_IMPORTED_MODULE_10___default().patch(\"http://127.0.0.1:10001/userinfo/\".concat(userid)).then(function(response) {\n                    response.data.userid === userid && response.data.userpw === userpw ? router.push(\"/modifyied/\".concat(userid)) : (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"Unexpected error occuried sry\");\n                }).catch(function(error) {\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"There are no user ID : \".concat(userid));\n                }) : (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"There are no user ID : \".concat(userid));\n            }).catch(function(error) {\n                (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"There are no user ID : \".concat(userid));\n            });\n        }\n    };\n    var onClickToast = function() {\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(\"I didnt make it yet\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sig\", {\n        className: \"jsx-c089c38ed7fcb033\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userid\",\n                        post: \"- ID\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userid\",\n                        placeholder: \"아이디\",\n                        onChange: function(e) {\n                            return setchangeUserid(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"userpw\",\n                        post: \"- PW\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"userpw\",\n                        placeholder: \"패스워드\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setchangeUserpw(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {}, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"emails\",\n                        post: \"- E-Mail\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"email\",\n                        placeholder: \"E-Mail\",\n                        type: \"email\",\n                        onChange: function(e) {\n                            return setchangeEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lavel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        hf: \"name\",\n                        post: \"- 이름\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"name\",\n                        placeholder: \"이름\",\n                        onChange: function(e) {\n                            return setchangeName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {}, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c089c38ed7fcb033\" + \" \" + \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return onClick(changedEmail, changedName, changedUserid, changedUserpw);\n                    },\n                    className: \"jsx-c089c38ed7fcb033\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"jsx-c089c38ed7fcb033\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custombtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            post: \"수정하기\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c089c38ed7fcb033\",\n                children: \"sig.jsx-c089c38ed7fcb033{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nwidth:100%;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column}\\n.input.jsx-c089c38ed7fcb033{padding-left:80px;\\npadding-right:80px}\\n.btn.jsx-c089c38ed7fcb033{margin-top:10px;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center}\\na.jsx-c089c38ed7fcb033{color:blue;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:visited{color:purple;\\ntext-decoration:underline;\\nfont-size:14px}\\na.jsx-c089c38ed7fcb033:hover{color:red;\\ntext-decoration:underline;\\nfont-size:14px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/NHK/OJT/Next/simple-re/pages/ModifyingPage.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this));\n};\n_s(LoginPage, \"ADiFLl9hhQd7CBLXZvG7RBrdXuk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFLFFBQ2pCO3dCQUFVQSxNQUFNLENBQU5BLE9BQU8sQ0FBQ1IsWUFBWSxFQUFFRSxXQUFXLEVBQUVFLGFBQWEsRUFBRUUsYUFBYTs7OzBHQUdoRTJCLENBQUM7OzhHQUNDekMsNkRBQVM7NEJBQUNpQyxJQUFJLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDbEMsQ0FBQztHQTdIdUIzQixTQUFTOztRQUNoQkwsa0RBQVM7OztLQURGSyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01vZGlmeWluZ1BhZ2UuanM/NzdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXRzIGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0XCI7XG5pbXBvcnQgTGF2ZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF2ZWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDdXN0b21idG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3VzdG9tYnRuXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2NoYW5nZWRFbWFpbCwgc2V0Y2hhbmdlRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGFuZ2VkTmFtZSwgc2V0Y2hhbmdlTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NoYW5nZWRVc2VyaWQsIHNldGNoYW5nZVVzZXJpZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NoYW5nZWRVc2VycHcsIHNldGNoYW5nZVVzZXJwd10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25DbGljayA9IChlbWFpbCwgdXNlcm5hbWUsIHVzZXJpZCwgdXNlcnB3KSA9PiB7XG4gICAge1xuICAgICAgdXNlcmlkID09PSBcIlwiXG4gICAgICAgID8gdG9hc3QoXCJQdXQgeW91ciBJRCBcIilcbiAgICAgICAgOiBheGlvc1xuICAgICAgICAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMToxMDAwMS91c2VyaW5mby8ke3VzZXJpZH1gKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEudXNlcmlkID09PSB1c2VyaWQgJiZcbiAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS51c2VycHcgPT09IHVzZXJwdyAmJlxuICAgICAgICAgICAgICBlbWFpbCAhPT0gXCJcIiAmJlxuICAgICAgICAgICAgICB1c2VybmFtZSAhPT0gXCJcIlxuICAgICAgICAgICAgICAgID8gYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBhdGNoKGBodHRwOi8vMTI3LjAuMC4xOjEwMDAxL3VzZXJpbmZvLyR7dXNlcmlkfWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEudXNlcmlkID09PSB1c2VyaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnVzZXJwdyA9PT0gdXNlcnB3XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJvdXRlci5wdXNoKGAvbW9kaWZ5aWVkLyR7dXNlcmlkfWApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRvYXN0KFwiVW5leHBlY3RlZCBlcnJvciBvY2N1cmllZCBzcnlcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdChgVGhlcmUgYXJlIG5vIHVzZXIgSUQgOiAke3VzZXJpZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHRvYXN0KGBUaGVyZSBhcmUgbm8gdXNlciBJRCA6ICR7dXNlcmlkfWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgdG9hc3QoYFRoZXJlIGFyZSBubyB1c2VyIElEIDogJHt1c2VyaWR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja1RvYXN0ID0gKCkgPT4ge1xuICAgIHRvYXN0KFwiSSBkaWRudCBtYWtlIGl0IHlldFwiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2lnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICA8TGF2ZWwgaGY9XCJ1c2VyaWRcIiBwb3N0PVwiLSBJRFwiIC8+XG4gICAgICAgIDxJbnB1dHNcbiAgICAgICAgICBpZD1cInVzZXJpZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Y2hhbmdlVXNlcmlkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICA8TGF2ZWwgaGY9XCJ1c2VycHdcIiBwb3N0PVwiLSBQV1wiIC8+XG4gICAgICAgIDxJbnB1dHNcbiAgICAgICAgICBpZD1cInVzZXJwd1wiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLtjKjsiqTsm4zrk5xcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRjaGFuZ2VVc2VycHcoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICA8TGF2ZWwgaGY9XCJlbWFpbHNcIiBwb3N0PVwiLSBFLU1haWxcIiAvPlxuICAgICAgICA8SW5wdXRzXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLU1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRjaGFuZ2VFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgPExhdmVsIGhmPVwibmFtZVwiIHBvc3Q9XCItIOydtOumhFwiIC8+XG4gICAgICAgIDxJbnB1dHNcbiAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066aEXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGNoYW5nZU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgb25DbGljayhjaGFuZ2VkRW1haWwsIGNoYW5nZWROYW1lLCBjaGFuZ2VkVXNlcmlkLCBjaGFuZ2VkVXNlcnB3KVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEN1c3RvbWJ0biBwb3N0PVwi7IiY7KCV7ZWY6riwXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2lnIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NpZz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbnB1dHMiLCJMYXZlbCIsIkxpbmsiLCJDdXN0b21idG4iLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJheGlvcyIsIkxvZ2luUGFnZSIsInJvdXRlciIsImNoYW5nZWRFbWFpbCIsInNldGNoYW5nZUVtYWlsIiwiY2hhbmdlZE5hbWUiLCJzZXRjaGFuZ2VOYW1lIiwiY2hhbmdlZFVzZXJpZCIsInNldGNoYW5nZVVzZXJpZCIsImNoYW5nZWRVc2VycHciLCJzZXRjaGFuZ2VVc2VycHciLCJvbkNsaWNrIiwidXNlcm5hbWUiLCJlbWFpbCIsInVzZXJpZCIsInVzZXJwdyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJwYXRjaCIsInB1c2giLCJjYXRjaCIsImVycm9yIiwib25DbGlja1RvYXN0Iiwic2lnIiwiZGl2IiwiaGYiLCJwb3N0IiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ModifyingPage.js\n");

/***/ })

});