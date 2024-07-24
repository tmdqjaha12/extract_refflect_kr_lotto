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

/***/ "(app-pages-browser)/./src/app/components/LottoGenerator.tsx":
/*!***********************************************!*\
  !*** ./src/app/components/LottoGenerator.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hooks_useLotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLotto */ \"(app-pages-browser)/./src/app/hooks/useLotto.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LottoGenerator = ()=>{\n    _s();\n    const { selectRound, selectTypeArgs, TYPE_ARGS_LABEL } = (0,_hooks_useLotto__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { register, handleSubmit, setValue, watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        mode: \"all\",\n        criteriaMode: \"firstError\",\n        shouldFocusError: true\n    });\n    const generateLottoNumbers = ()=>{\n    // 로또 번호 생성 로직 추가\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-6 rounded-lg shadow-md my-4 max-w-md mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold text-gray-800 mb-4 text-center\",\n                children: \"로또 번호 생성기\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"lottoType\",\n                        className: \"block text-gray-700 text-lg font-medium mb-2 text-center\",\n                        children: \"생성 타입 선택\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"lottoType\",\n                        className: \"block w-full border border-gray-300 rounded-lg p-2\",\n                        ...register(\"type\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"default\",\n                                children: \"모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"powerball\",\n                                children: \"N년의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"powerball\",\n                                children: \"N월의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"powerball\",\n                                children: \"N주의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"powerball\",\n                                children: \"N일의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    watch(\"type\") && watch(\"type\") != \"1\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"border p-2 rounded mb-2 w-full\",\n                        ...register(\"type_args\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: TYPE_ARGS_LABEL[watch(\"type\")].label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            selectTypeArgs[TYPE_ARGS_LABEL[watch(\"type\")].argsKey].map((number, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: number,\n                                    children: number\n                                }, \"select-type-args-\".concat(index), false, {\n                                    fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition duration-300 w-full\",\n                onClick: generateLottoNumbers,\n                children: \"번호 생성\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"lottoNumbers\",\n                className: \"mt-4 text-gray-800 text-lg font-mono text-center\",\n                children: [\n                    \"생성된 번호:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mt-2 space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-yellow-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"12\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"23\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"34\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"45\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"21\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-yellow-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center justify-center mx-2 text-gray-800 font-bold\",\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-green-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LottoGenerator, \"oS1S3/CH48/ONv7ZTa5hrKoapPc=\", false, function() {\n    return [\n        _hooks_useLotto__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = LottoGenerator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LottoGenerator);\nvar _c;\n$RefreshReg$(_c, \"LottoGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb3R0b0dlbmVyYXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBDO0FBQ0Q7QUFFekMsTUFBTUUsaUJBQWlCOztJQUNyQixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUUsR0FBR0osMkRBQVFBO0lBRWpFLE1BQU0sRUFBRUssUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdULHdEQUFPQSxDQUFDO1FBQzFEVSxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsa0JBQWtCO0lBQ3BCO0lBRUEsTUFBTUMsdUJBQXVCO0lBQzNCLGlCQUFpQjtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXdEOzs7Ozs7MEJBR3RFLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFZSCxXQUFVO2tDQUEyRDs7Ozs7O2tDQUdoRyw4REFBQ0k7d0JBQU9DLElBQUc7d0JBQVlMLFdBQVU7d0JBQXNELEdBQUdULFNBQVMsT0FBTzs7MENBQ3hHLDhEQUFDZTtnQ0FBT0MsT0FBTTswQ0FBVTs7Ozs7OzBDQUN4Qiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQVk7Ozs7OzswQ0FDMUIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFZOzs7Ozs7MENBQzFCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQVk7Ozs7Ozs7Ozs7OztvQkFJM0JiLE1BQU0sV0FBV0EsTUFBTSxXQUFXLG9CQUNqQyw4REFBQ1U7d0JBQU9KLFdBQVU7d0JBQWtDLEdBQUdULFNBQVMsWUFBWTs7MENBQzFFLDhEQUFDZTtnQ0FBT0MsT0FBTTswQ0FBSWpCLGVBQWUsQ0FBQ0ksTUFBTSxRQUFpQyxDQUFDUSxLQUFLOzs7Ozs7NEJBQzlFYixjQUFjLENBQUNDLGVBQWUsQ0FBQ0ksTUFBTSxRQUFpQyxDQUFDYyxPQUFPLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUM1Riw4REFBQ0w7b0NBQXlDQyxPQUFPRzs4Q0FDOUNBO21DQURVLG9CQUEwQixPQUFOQzs7Ozs7Ozs7OztrREFNckM7Ozs7Ozs7MEJBSUosOERBQUNDO2dCQUNDWixXQUFVO2dCQUNWYSxTQUFTZjswQkFDVjs7Ozs7OzBCQUlELDhEQUFDQztnQkFBSU0sSUFBRztnQkFBZUwsV0FBVTs7b0JBQW1EO2tDQUVsRiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDYztnQ0FBS2QsV0FBVTswQ0FBaUY7Ozs7OzswQ0FDakcsOERBQUNjO2dDQUFLZCxXQUFVOzBDQUErRTs7Ozs7OzBDQUMvRiw4REFBQ2M7Z0NBQUtkLFdBQVU7MENBQThFOzs7Ozs7MENBQzlGLDhEQUFDYztnQ0FBS2QsV0FBVTswQ0FBK0U7Ozs7OzswQ0FDL0YsOERBQUNjO2dDQUFLZCxXQUFVOzBDQUE4RTs7Ozs7OzBDQUM5Riw4REFBQ2M7Z0NBQUtkLFdBQVU7MENBQWlGOzs7Ozs7MENBQ2pHLDhEQUFDYztnQ0FBS2QsV0FBVTswQ0FBZ0U7Ozs7OzswQ0FDaEYsOERBQUNjO2dDQUFLZCxXQUFVOzBDQUFnRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFHO0dBbkVNYjs7UUFDcURELHVEQUFRQTtRQUViRCxvREFBT0E7OztLQUh2REU7QUFxRU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvdHRvR2VuZXJhdG9yLnRzeD9iMmUyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHVzZUxvdHRvIGZyb20gXCIuLi9ob29rcy91c2VMb3R0b1wiO1xyXG5cclxuY29uc3QgTG90dG9HZW5lcmF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZWxlY3RSb3VuZCwgc2VsZWN0VHlwZUFyZ3MsIFRZUEVfQVJHU19MQUJFTCB9ID0gdXNlTG90dG8oKTtcclxuXHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBzZXRWYWx1ZSwgd2F0Y2ggfSA9IHVzZUZvcm0oe1xyXG4gICAgbW9kZTogXCJhbGxcIixcclxuICAgIGNyaXRlcmlhTW9kZTogXCJmaXJzdEVycm9yXCIsXHJcbiAgICBzaG91bGRGb2N1c0Vycm9yOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZUxvdHRvTnVtYmVycyA9ICgpID0+IHtcclxuICAgIC8vIOuhnOuYkCDrsojtmLgg7IOd7ISxIOuhnOyngSDstpTqsIBcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWQgbXktNCBtYXgtdy1tZCBteC1hdXRvXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgbWItNCB0ZXh0LWNlbnRlclwiPuuhnOuYkCDrsojtmLgg7IOd7ISx6riwPC9oMj5cclxuXHJcbiAgICAgIHsvKiA8IS0tIOuhnOuYkCDsg53shLEg7YOA7J6FIOyEoO2DnSAtLT4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG90dG9UeXBlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIOyDneyEsSDtg4DsnoUg7ISg7YOdXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0IGlkPVwibG90dG9UeXBlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTJcIiB7Li4ucmVnaXN0ZXIoXCJ0eXBlXCIpfT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+66qo65OgIOuhnOuYkCDrsojtmLg8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb3dlcmJhbGxcIj5O64WE7J2YIOuqqOuToCDroZzrmJAg67KI7Zi4PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG93ZXJiYWxsXCI+TuyblOydmCDrqqjrk6Ag66Gc65iQIOuyiO2YuDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvd2VyYmFsbFwiPk7so7zsnZgg66qo65OgIOuhnOuYkCDrsojtmLg8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb3dlcmJhbGxcIj5O7J287J2YIOuqqOuToCDroZzrmJAg67KI7Zi4PC9vcHRpb24+XHJcbiAgICAgICAgICB7LyogPCEtLSDri6Trpbgg66Gc65iQIO2DgOyehSDstpTqsIAg6rCA64qlIC0tPiAqL31cclxuICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAge3dhdGNoKFwidHlwZVwiKSAmJiB3YXRjaChcInR5cGVcIikgIT0gXCIxXCIgPyAoXHJcbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCBtYi0yIHctZnVsbFwiIHsuLi5yZWdpc3RlcihcInR5cGVfYXJnc1wiKX0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57VFlQRV9BUkdTX0xBQkVMW3dhdGNoKFwidHlwZVwiKSBhcyBcIjJcIiB8IFwiM1wiIHwgXCI0XCIgfCBcIjVcIl0ubGFiZWx9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIHtzZWxlY3RUeXBlQXJnc1tUWVBFX0FSR1NfTEFCRUxbd2F0Y2goXCJ0eXBlXCIpIGFzIFwiMlwiIHwgXCIzXCIgfCBcIjRcIiB8IFwiNVwiXS5hcmdzS2V5XS5tYXAoKG51bWJlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YHNlbGVjdC10eXBlLWFyZ3MtJHtpbmRleH1gfSB2YWx1ZT17bnVtYmVyfT5cclxuICAgICAgICAgICAgICAgIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB3LWZ1bGxcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlTG90dG9OdW1iZXJzfVxyXG4gICAgICA+XHJcbiAgICAgICAg67KI7Zi4IOyDneyEsVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJsb3R0b051bWJlcnNcIiBjbGFzc05hbWU9XCJtdC00IHRleHQtZ3JheS04MDAgdGV4dC1sZyBmb250LW1vbm8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICDsg53shLHrkJwg67KI7Zi4OlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSB3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+MTI8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSB3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+MjM8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj4zNDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj40NTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1yZWQtNTAwIHRleHQtd2hpdGUgdy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPjIxPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSB3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+Mzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LTIgdGV4dC1ncmF5LTgwMCBmb250LWJvbGRcIj4rPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj43PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0b0dlbmVyYXRvcjtcclxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJ1c2VMb3R0byIsIkxvdHRvR2VuZXJhdG9yIiwic2VsZWN0Um91bmQiLCJzZWxlY3RUeXBlQXJncyIsIlRZUEVfQVJHU19MQUJFTCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic2V0VmFsdWUiLCJ3YXRjaCIsIm1vZGUiLCJjcml0ZXJpYU1vZGUiLCJzaG91bGRGb2N1c0Vycm9yIiwiZ2VuZXJhdGVMb3R0b051bWJlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib3B0aW9uIiwidmFsdWUiLCJhcmdzS2V5IiwibWFwIiwibnVtYmVyIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LottoGenerator.tsx\n"));

/***/ })

});