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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hooks_useLotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLotto */ \"(app-pages-browser)/./src/app/hooks/useLotto.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LottoGenerator = ()=>{\n    _s();\n    const { selectRound, selectTypeArgs, TYPE_ARGS_LABEL } = (0,_hooks_useLotto__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { register, handleSubmit, setValue, watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        mode: \"all\",\n        criteriaMode: \"firstError\",\n        shouldFocusError: true\n    });\n    const generateLottoNumbers = ()=>{\n    // 로또 번호 생성 로직 추가\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-6 rounded-lg shadow-md my-4 max-w-md mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold text-gray-800 mb-4 text-center\",\n                children: \"로또 번호 생성기\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"lottoType\",\n                        className: \"block text-gray-700 text-lg font-medium mb-2 text-center\",\n                        children: \"생성 타입 선택\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"lottoType\",\n                        className: \"block w-full border border-gray-300 rounded-lg p-2 mb-2\",\n                        ...register(\"type\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1\",\n                                children: \"모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"2\",\n                                children: \"N년의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"3\",\n                                children: \"N월의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"4\",\n                                children: \"N주의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"5\",\n                                children: \"N일의 모든 로또 번호\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    watch(\"type\") && watch(\"type\") != \"1\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"border p-2 rounded mb-2 w-full\",\n                        ...register(\"type_args\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: TYPE_ARGS_LABEL[watch(\"type\")].label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            selectTypeArgs[TYPE_ARGS_LABEL[watch(\"type\")].argsKey].map((number, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: number,\n                                    children: number\n                                }, \"select-type-args-\".concat(index), false, {\n                                    fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition duration-300 w-full\",\n                onClick: generateLottoNumbers,\n                children: \"번호 생성\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"lottoNumbers\",\n                className: \"mt-4 text-gray-800 text-lg font-mono text-center\",\n                children: [\n                    \"생성된 번호:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mt-2 space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-yellow-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"12\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"23\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"34\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"45\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"21\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-yellow-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center justify-center mx-2 text-gray-800 font-bold\",\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"rounded-full bg-green-500 text-white w-8 h-8 flex items-center justify-center\",\n                                children: \"7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rs02\\\\Desktop\\\\mw\\\\sblt\\\\src\\\\app\\\\components\\\\LottoGenerator.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LottoGenerator, \"oS1S3/CH48/ONv7ZTa5hrKoapPc=\", false, function() {\n    return [\n        _hooks_useLotto__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = LottoGenerator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LottoGenerator);\nvar _c;\n$RefreshReg$(_c, \"LottoGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb3R0b0dlbmVyYXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBDO0FBQ0Q7QUFFekMsTUFBTUUsaUJBQWlCOztJQUNyQixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUUsR0FBR0osMkRBQVFBO0lBRWpFLE1BQU0sRUFBRUssUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdULHdEQUFPQSxDQUFDO1FBQzFEVSxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsa0JBQWtCO0lBQ3BCO0lBRUEsTUFBTUMsdUJBQXVCO0lBQzNCLGlCQUFpQjtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXdEOzs7Ozs7MEJBR3RFLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFNQyxTQUFRO3dCQUFZSCxXQUFVO2tDQUEyRDs7Ozs7O2tDQUdoRyw4REFBQ0k7d0JBQ0NDLElBQUc7d0JBQ0hMLFdBQVU7d0JBQ1QsR0FBR1QsU0FBUyxPQUFPOzswQ0FFcEIsOERBQUNlO2dDQUFPQyxPQUFNOzBDQUFJOzs7Ozs7MENBQ2xCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBSTs7Ozs7OzBDQUNsQiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQUk7Ozs7OzswQ0FDbEIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFJOzs7Ozs7MENBQ2xCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBSTs7Ozs7Ozs7Ozs7O29CQUluQmIsTUFBTSxXQUFXQSxNQUFNLFdBQVcsb0JBQ2pDLDhEQUFDVTt3QkFBT0osV0FBVTt3QkFBa0MsR0FBR1QsU0FBUyxZQUFZOzswQ0FDMUUsOERBQUNlO2dDQUFPQyxPQUFNOzBDQUFJakIsZUFBZSxDQUFDSSxNQUFNLFFBQWlDLENBQUNRLEtBQUs7Ozs7Ozs0QkFDOUViLGNBQWMsQ0FBQ0MsZUFBZSxDQUFDSSxNQUFNLFFBQWlDLENBQUNjLE9BQU8sQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQzVGLDhEQUFDTDtvQ0FBeUNDLE9BQU9HOzhDQUM5Q0E7bUNBRFUsb0JBQTBCLE9BQU5DOzs7Ozs7Ozs7O2tEQU1yQzs7Ozs7OzswQkFJSiw4REFBQ0M7Z0JBQ0NaLFdBQVU7Z0JBQ1ZhLFNBQVNmOzBCQUNWOzs7Ozs7MEJBSUQsOERBQUNDO2dCQUFJTSxJQUFHO2dCQUFlTCxXQUFVOztvQkFBbUQ7a0NBRWxGLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNjO2dDQUFLZCxXQUFVOzBDQUFpRjs7Ozs7OzBDQUNqRyw4REFBQ2M7Z0NBQUtkLFdBQVU7MENBQStFOzs7Ozs7MENBQy9GLDhEQUFDYztnQ0FBS2QsV0FBVTswQ0FBOEU7Ozs7OzswQ0FDOUYsOERBQUNjO2dDQUFLZCxXQUFVOzBDQUErRTs7Ozs7OzBDQUMvRiw4REFBQ2M7Z0NBQUtkLFdBQVU7MENBQThFOzs7Ozs7MENBQzlGLDhEQUFDYztnQ0FBS2QsV0FBVTswQ0FBaUY7Ozs7OzswQ0FDakcsOERBQUNjO2dDQUFLZCxXQUFVOzBDQUFnRTs7Ozs7OzBDQUNoRiw4REFBQ2M7Z0NBQUtkLFdBQVU7MENBQWdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUc7R0F2RU1iOztRQUNxREQsdURBQVFBO1FBRWJELG9EQUFPQTs7O0tBSHZERTtBQXlFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTG90dG9HZW5lcmF0b3IudHN4P2IyZTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgdXNlTG90dG8gZnJvbSBcIi4uL2hvb2tzL3VzZUxvdHRvXCI7XHJcblxyXG5jb25zdCBMb3R0b0dlbmVyYXRvciA9ICgpID0+IHtcclxuICBjb25zdCB7IHNlbGVjdFJvdW5kLCBzZWxlY3RUeXBlQXJncywgVFlQRV9BUkdTX0xBQkVMIH0gPSB1c2VMb3R0bygpO1xyXG5cclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlLCB3YXRjaCB9ID0gdXNlRm9ybSh7XHJcbiAgICBtb2RlOiBcImFsbFwiLFxyXG4gICAgY3JpdGVyaWFNb2RlOiBcImZpcnN0RXJyb3JcIixcclxuICAgIHNob3VsZEZvY3VzRXJyb3I6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlTG90dG9OdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgLy8g66Gc65iQIOuyiO2YuCDsg53shLEg66Gc7KeBIOy2lOqwgFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCBteS00IG1heC13LW1kIG14LWF1dG9cIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00IHRleHQtY2VudGVyXCI+66Gc65iQIOuyiO2YuCDsg53shLHquLA8L2gyPlxyXG5cclxuICAgICAgey8qIDwhLS0g66Gc65iQIOyDneyEsSDtg4DsnoUg7ISg7YOdIC0tPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3R0b1R5cGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtbGcgZm9udC1tZWRpdW0gbWItMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAg7IOd7ISxIO2DgOyehSDshKDtg51cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGlkPVwibG90dG9UeXBlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0yIG1iLTJcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwidHlwZVwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPuuqqOuToCDroZzrmJAg67KI7Zi4PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk7rhYTsnZgg66qo65OgIOuhnOuYkCDrsojtmLg8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+TuyblOydmCDrqqjrk6Ag66Gc65iQIOuyiO2YuDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5O7KO87J2YIOuqqOuToCDroZzrmJAg67KI7Zi4PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPk7snbzsnZgg66qo65OgIOuhnOuYkCDrsojtmLg8L29wdGlvbj5cclxuICAgICAgICAgIHsvKiA8IS0tIOuLpOuluCDroZzrmJAg7YOA7J6FIOy2lOqwgCDqsIDriqUgLS0+ICovfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICB7d2F0Y2goXCJ0eXBlXCIpICYmIHdhdGNoKFwidHlwZVwiKSAhPSBcIjFcIiA/IChcclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiByb3VuZGVkIG1iLTIgdy1mdWxsXCIgey4uLnJlZ2lzdGVyKFwidHlwZV9hcmdzXCIpfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPntUWVBFX0FSR1NfTEFCRUxbd2F0Y2goXCJ0eXBlXCIpIGFzIFwiMlwiIHwgXCIzXCIgfCBcIjRcIiB8IFwiNVwiXS5sYWJlbH08L29wdGlvbj5cclxuICAgICAgICAgICAge3NlbGVjdFR5cGVBcmdzW1RZUEVfQVJHU19MQUJFTFt3YXRjaChcInR5cGVcIikgYXMgXCIyXCIgfCBcIjNcIiB8IFwiNFwiIHwgXCI1XCJdLmFyZ3NLZXldLm1hcCgobnVtYmVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgc2VsZWN0LXR5cGUtYXJncy0ke2luZGV4fWB9IHZhbHVlPXtudW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAge251bWJlcn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD48Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHctZnVsbFwiXHJcbiAgICAgICAgb25DbGljaz17Z2VuZXJhdGVMb3R0b051bWJlcnN9XHJcbiAgICAgID5cclxuICAgICAgICDrsojtmLgg7IOd7ISxXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGRpdiBpZD1cImxvdHRvTnVtYmVyc1wiIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1ncmF5LTgwMCB0ZXh0LWxnIGZvbnQtbW9ubyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIOyDneyEseuQnCDrsojtmLg6XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCB0ZXh0LXdoaXRlIHctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj4xMjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj4yMzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1yZWQtNTAwIHRleHQtd2hpdGUgdy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPjM0PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgdy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPjQ1PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXJlZC01MDAgdGV4dC13aGl0ZSB3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+MjE8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCB0ZXh0LXdoaXRlIHctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj4zPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtMiB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZFwiPis8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgdy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPjc8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRvR2VuZXJhdG9yO1xyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsInVzZUxvdHRvIiwiTG90dG9HZW5lcmF0b3IiLCJzZWxlY3RSb3VuZCIsInNlbGVjdFR5cGVBcmdzIiwiVFlQRV9BUkdTX0xBQkVMIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsIndhdGNoIiwibW9kZSIsImNyaXRlcmlhTW9kZSIsInNob3VsZEZvY3VzRXJyb3IiLCJnZW5lcmF0ZUxvdHRvTnVtYmVycyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvcHRpb24iLCJ2YWx1ZSIsImFyZ3NLZXkiLCJtYXAiLCJudW1iZXIiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LottoGenerator.tsx\n"));

/***/ })

});