"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction Home() {\n    let timerId = null;\n    async function throttleExecution(callback, delay) {\n        if (!timerId) {\n            timerId = setTimeout(()=>{\n                try {\n                    callback();\n                } catch (error) {\n                    console.log(\"#(delayExecution: \", error);\n                }\n                timerId = null;\n            }, delay);\n        }\n    }\n    const getLatestKrLotto = ()=>{\n        fetch(\"/api/getLatestKrLotto?drawNo=1120\").then((res)=>{}).catch((err)=>{});\n    };\n    const updateKrLotto = ()=>{\n        fetch(\"/api/updateKrLotto\").then((res)=>{}).catch((err)=>{});\n    };\n    const reffleKrLotto = ()=>{\n        /**\n     * all\n     * year\n     * month\n     * day\n     * week\n     * month and week\n     */ fetch(\"/api/reffleKrLotto\").then((res)=>{}).catch((err)=>{});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>throttleExecution(getLatestKrLotto, 1000),\n                        children: \"동행복권 최신 당첨번호 조회\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>throttleExecution(updateKrLotto, 1000),\n                        children: \"동행복권 최신 데이터 업데이트\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWUsU0FBU0E7SUFDdEIsSUFBSUMsVUFBaUM7SUFDckMsZUFBZUMsa0JBQWtCQyxRQUFhLEVBQUVDLEtBQWE7UUFDM0QsSUFBSSxDQUFDSCxTQUFTO1lBQ1pBLFVBQVVJLFdBQVc7Z0JBQ25CLElBQUk7b0JBQ0ZGO2dCQUNGLEVBQUUsT0FBT0csT0FBTztvQkFDZEMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkY7Z0JBQ3BDO2dCQUNBTCxVQUFVO1lBQ1osR0FBR0c7UUFDTDtJQUNGO0lBRUEsTUFBTUssbUJBQW1CO1FBQ3ZCQyxNQUFNLHFDQUNIQyxJQUFJLENBQUMsQ0FBQ0MsT0FBUyxHQUNmQyxLQUFLLENBQUMsQ0FBQ0MsT0FBUztJQUNyQjtJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQkwsTUFBTSxzQkFDSEMsSUFBSSxDQUFDLENBQUNDLE9BQVMsR0FDZkMsS0FBSyxDQUFDLENBQUNDLE9BQVM7SUFDckI7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDcEI7Ozs7Ozs7S0FPQyxHQUNETixNQUFNLHNCQUNIQyxJQUFJLENBQUMsQ0FBQ0MsT0FBUyxHQUNmQyxLQUFLLENBQUMsQ0FBQ0MsT0FBUztJQUNyQjtJQUVBLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQU9DLFNBQVMsSUFBTW5CLGtCQUFrQk8sa0JBQWtCO2tDQUFPOzs7Ozs7Ozs7Ozs4QkFFcEUsOERBQUNVOzhCQUNDLDRFQUFDQzt3QkFBT0MsU0FBUyxJQUFNbkIsa0JBQWtCYSxlQUFlO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pFO0tBckR3QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBsZXQgdGltZXJJZDogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcbiAgYXN5bmMgZnVuY3Rpb24gdGhyb3R0bGVFeGVjdXRpb24oY2FsbGJhY2s6IGFueSwgZGVsYXk6IG51bWJlcikge1xuICAgIGlmICghdGltZXJJZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCIjKGRlbGF5RXhlY3V0aW9uOiBcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBudWxsO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldExhdGVzdEtyTG90dG8gPSAoKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL2dldExhdGVzdEtyTG90dG8/ZHJhd05vPTExMjBcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHt9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVLckxvdHRvID0gKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS91cGRhdGVLckxvdHRvXCIpXG4gICAgICAudGhlbigocmVzKSA9PiB7fSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gIH07XG5cbiAgY29uc3QgcmVmZmxlS3JMb3R0byA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBhbGxcbiAgICAgKiB5ZWFyXG4gICAgICogbW9udGhcbiAgICAgKiBkYXlcbiAgICAgKiB3ZWVrXG4gICAgICogbW9udGggYW5kIHdlZWtcbiAgICAgKi9cbiAgICBmZXRjaChcIi9hcGkvcmVmZmxlS3JMb3R0b1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge30pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRocm90dGxlRXhlY3V0aW9uKGdldExhdGVzdEtyTG90dG8sIDEwMDApfT7rj5ntlonrs7Xqtowg7LWc7IugIOuLueyyqOuyiO2YuCDsobDtmow8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhyb3R0bGVFeGVjdXRpb24odXBkYXRlS3JMb3R0bywgMTAwMCl9PuuPme2Wieuzteq2jCDstZzsi6Ag642w7J207YSwIOyXheuNsOydtO2KuDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSG9tZSIsInRpbWVySWQiLCJ0aHJvdHRsZUV4ZWN1dGlvbiIsImNhbGxiYWNrIiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0TGF0ZXN0S3JMb3R0byIsImZldGNoIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwidXBkYXRlS3JMb3R0byIsInJlZmZsZUtyTG90dG8iLCJtYWluIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});