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

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        __source: {\n            fileName: \"/home/dev/NHK/OJT/Next/next-test/components/Seo.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"title\", {\n            __source: {\n                fileName: \"/home/dev/NHK/OJT/Next/next-test/components/Seo.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFFYixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNwQyxNQUFNLHNFQUNERixrREFBSTs7Ozs7Ozt3RkFDQUUsQ0FBSzs7Ozs7Ozs7Z0JBQUVBLEtBQUs7Z0JBQUMsQ0FBYzs7OztBQUd4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vY29tcG9uZW50cy9TZW8uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbyh7IHRpdGxlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9IHwgTmV4dCBNb3ZpZXM8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiU2VvIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\nfunction Home() {\n    const { 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { results  } = await (await fetch(`/api/movies`)).json();\n            setMovies(results);\n        })();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/index.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\",\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            !movies && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                __source: {\n                    fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/index.js\",\n                    lineNumber: 15,\n                    columnNumber: 19\n                },\n                __self: this,\n                children: \"Loading...\"\n            }),\n            movies === null || movies === void 0 ? void 0 : movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                        __source: {\n                            fileName: \"/home/dev/NHK/OJT/Next/next-test/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: movie.original_title\n                    })\n                }, movie.id)\n            )\n        ]\n    }));\n}; // export default function Home2() {\n //   const [counter, setCounter] = useState(0);\n //   return (\n //     <div>\n //       <h1>Hello {counter}</h1>\n //       <button onClick={() => setCounter((prev) => prev + 2)}>+</button>\n //       <button onClick={() => setCounter(0)}>reset</button>\n //     </div>\n //   )\n // }\n // import Navbar from \"../components/NavBar\";\n // export default function Home3() {\n //   return (\n //     <div>\n //       <Navbar />\n //       <h1>Hello</h1>\n //     </div>\n //   )\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFFcEIsUUFBUSxDQUFDRyxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJSiwrQ0FBUTtJQUNwQ0QsZ0RBQVMsS0FBTyxDQUFDO21CQUNGLENBQUM7WUFDWixLQUFLLENBQUMsQ0FBQyxDQUFDTSxPQUFPLEVBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUNDLEtBQUssRUFBRSxXQUFXLElBQUlDLElBQUk7WUFDM0RILFNBQVMsQ0FBQ0MsT0FBTztRQUNuQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sdUVBQ0hHLENBQUc7Ozs7Ozs7O2lGQUNEUCx1REFBRztnQkFBQ1EsS0FBSyxFQUFDLENBQU07Ozs7Ozs7O2FBQ2ZOLE1BQU0seUVBQUtPLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBVTs7WUFDekJQLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLE1BQU0sQ0FBRVEsR0FBRyxFQUFFQyxLQUFLLHdFQUNoQkosQ0FBRzs7Ozs7OzttR0FDREUsQ0FBRTs7Ozs7OztrQ0FBRUUsS0FBSyxDQUFDQyxjQUFjOzttQkFEakJELEtBQUssQ0FBQ0UsRUFBRTs7OztBQU0xQixDQUFDLENBRUQsQ0FBb0M7QUFDcEMsQ0FBK0M7QUFDL0MsQ0FBYTtBQUNiLENBQVk7QUFDWixDQUFpQztBQUNqQyxDQUEwRTtBQUMxRSxDQUE2RDtBQUM3RCxDQUFhO0FBQ2IsQ0FBTTtBQUNOLENBQUk7QUFFSixDQUE2QztBQUc3QyxDQUFvQztBQUNwQyxDQUFhO0FBQ2IsQ0FBWTtBQUNaLENBQW1CO0FBQ25CLENBQXVCO0FBQ3ZCLENBQWE7QUFDYixDQUFNO0FBQ04sQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGVzdC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgKGF3YWl0IGZldGNoKGAvYXBpL21vdmllc2ApKS5qc29uKCk7XG4gICAgICBzZXRNb3ZpZXMocmVzdWx0cyk7XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2VvIHRpdGxlPVwiSG9tZVwiIC8+XG4gICAgICB7IW1vdmllcyAmJiA8aDQ+TG9hZGluZy4uLjwvaDQ+fVxuICAgICAge21vdmllcz8ubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17bW92aWUuaWR9PlxuICAgICAgICAgIDxoND57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZTIoKSB7XG4vLyAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDE+SGVsbG8ge2NvdW50ZXJ9PC9oMT5cbi8vICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnRlcigocHJldikgPT4gcHJldiArIDIpfT4rPC9idXR0b24+XG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50ZXIoMCl9PnJlc2V0PC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcbi8vIH1cblxuLy8gaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcblxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lMygpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPE5hdmJhciAvPlxuLy8gICAgICAgPGgxPkhlbGxvPC9oMT5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VvIiwiSG9tZSIsIm1vdmllcyIsInNldE1vdmllcyIsInJlc3VsdHMiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJ0aXRsZSIsImg0IiwibWFwIiwibW92aWUiLCJvcmlnaW5hbF90aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();