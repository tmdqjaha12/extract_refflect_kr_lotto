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

/***/ "(app-pages-browser)/./src/app/hooks/useLotto.ts":
/*!***********************************!*\
  !*** ./src/app/hooks/useLotto.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useLotto = ()=>{\n    const [selectRound, setSelectRound] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const TYPE_ARGS_LABEL = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n            \"2\": {\n                label: \"연도 선택\",\n                argsKey: \"yeer\"\n            },\n            \"3\": {\n                label: \"월 선택\",\n                argsKey: \"month\"\n            },\n            \"4\": {\n                label: \"주 선택\",\n                argsKey: \"week\"\n            },\n            \"5\": {\n                label: \"일 선택\",\n                argsKey: \"day\"\n            }\n        }));\n    const getPastLottoNumbers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        fetch(\"/api/lotto/exec/getPastLottoNumbers\").then((res)=>{\n            if (!res.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            return res.json(); // JSON으로 응답을 변환\n        }).then((data)=>{\n            if (!data) return;\n            const drawNumbersDescending = data.map((item)=>item.draw_no).sort((a, b)=>b - a);\n            drawNumbersDescending.unshift(drawNumbersDescending[0] + 1);\n            setSelectRound(drawNumbersDescending);\n        }).catch((err)=>{\n            console.error(err);\n        });\n    }, []);\n    const getYearsArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((startYear)=>{\n        const currentYear = new Date().getFullYear();\n        const years = [];\n        for(let year = startYear; year <= currentYear; year++){\n            years.push(year);\n        }\n        return years.reverse();\n    }, []);\n    const getNumbersArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((upToNumber)=>{\n        const numbers = [];\n        for(let i = 1; i <= upToNumber; i++){\n            numbers.push(i);\n        }\n        return numbers;\n    }, []);\n    const selectTypeArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n            yeer: getYearsArray(2002),\n            month: getNumbersArray(12),\n            week: getNumbersArray(4),\n            day: getNumbersArray(31)\n        }), [\n        getYearsArray,\n        getNumbersArray\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        getPastLottoNumbers();\n    }, [\n        getPastLottoNumbers\n    ]);\n    return {\n        selectRound,\n        selectTypeArgs\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLotto);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlTG90dG8udHMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtFO0FBcUJsRSxNQUFNSSxXQUFXO0lBQ2YsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILCtDQUFRQSxDQUFXLEVBQUU7SUFFM0QsTUFBTUksa0JBQWdFTCw4Q0FBT0EsQ0FBQyxJQUFPO1lBQ25GLEtBQUs7Z0JBQ0hNLE9BQU87Z0JBQ1BDLFNBQVM7WUFDWDtZQUNBLEtBQUs7Z0JBQ0hELE9BQU87Z0JBQ1BDLFNBQVM7WUFDWDtZQUNBLEtBQUs7Z0JBQ0hELE9BQU87Z0JBQ1BDLFNBQVM7WUFDWDtZQUNBLEtBQUs7Z0JBQ0hELE9BQU87Z0JBQ1BDLFNBQVM7WUFDWDtRQUNGO0lBRUEsTUFBTUMsc0JBQXNCVixrREFBV0EsQ0FBQztRQUN0Q1csTUFBTSx1Q0FDSEMsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxJQUFJQyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsT0FBT0YsSUFBSUcsSUFBSSxJQUFJLGdCQUFnQjtRQUNyQyxHQUNDSixJQUFJLENBQUMsQ0FBQ0s7WUFDTCxJQUFJLENBQUNBLE1BQU07WUFDWCxNQUFNQyx3QkFBd0JELEtBQUtFLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxPQUFPLEVBQUVDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxJQUFJRDtZQUNsRkwsc0JBQXNCTyxPQUFPLENBQUNQLHFCQUFxQixDQUFDLEVBQUUsR0FBRztZQUN6RFosZUFBZVk7UUFDakIsR0FDQ1EsS0FBSyxDQUFDLENBQUNDO1lBQ05DLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDaEI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRyxnQkFBZ0I5QixrREFBV0EsQ0FBQyxDQUFDK0I7UUFDakMsTUFBTUMsY0FBYyxJQUFJQyxPQUFPQyxXQUFXO1FBQzFDLE1BQU1DLFFBQVEsRUFBRTtRQUVoQixJQUFLLElBQUlDLE9BQU9MLFdBQVdLLFFBQVFKLGFBQWFJLE9BQVE7WUFDdERELE1BQU1FLElBQUksQ0FBQ0Q7UUFDYjtRQUVBLE9BQU9ELE1BQU1HLE9BQU87SUFDdEIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsa0JBQWtCdkMsa0RBQVdBLENBQUMsQ0FBQ3dDO1FBQ25DLE1BQU1DLFVBQVUsRUFBRTtRQUVsQixJQUFLLElBQUlDLElBQUksR0FBR0EsS0FBS0YsWUFBWUUsSUFBSztZQUNwQ0QsUUFBUUosSUFBSSxDQUFDSztRQUNmO1FBRUEsT0FBT0Q7SUFDVCxHQUFHLEVBQUU7SUFFTCxNQUFNRSxpQkFBaUJ6Qyw4Q0FBT0EsQ0FDNUIsSUFBTztZQUNMMEMsTUFBTWQsY0FBYztZQUNwQmUsT0FBT04sZ0JBQWdCO1lBQ3ZCTyxNQUFNUCxnQkFBZ0I7WUFDdEJRLEtBQUtSLGdCQUFnQjtRQUN2QixJQUNBO1FBQUNUO1FBQWVTO0tBQWdCO0lBR2xDdEMsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHO1FBQUNBO0tBQW9CO0lBRXhCLE9BQU87UUFBRUw7UUFBYXNDO0lBQWU7QUFDdkM7QUFFQSwrREFBZXZDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob29rcy91c2VMb3R0by50cz9kNzJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUGFzdExvdHRvTnVtYmVyIHtcclxuICBib251czogbnVtYmVyO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICBkcmF3X25vOiBudW1iZXI7XHJcbiAgbnVtMTogc3RyaW5nO1xyXG4gIG51bTI6IHN0cmluZztcclxuICBudW0zOiBzdHJpbmc7XHJcbiAgbnVtNDogc3RyaW5nO1xyXG4gIG51bTU6IHN0cmluZztcclxuICBudW02OiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgVHlwZUFyZ3NMYWJlbEtleSA9IFwieWVlclwiIHwgXCJtb250aFwiIHwgXCJ3ZWVrXCIgfCBcImRheVwiO1xyXG5cclxuaW50ZXJmYWNlIFR5cGVBcmdzTGFiZWwge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYXJnc0tleTogVHlwZUFyZ3NMYWJlbEtleTtcclxufVxyXG5cclxuY29uc3QgdXNlTG90dG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdFJvdW5kLCBzZXRTZWxlY3RSb3VuZF0gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG5cclxuICBjb25zdCBUWVBFX0FSR1NfTEFCRUw6IFJlY29yZDxcIjJcIiB8IFwiM1wiIHwgXCI0XCIgfCBcIjVcIiwgVHlwZUFyZ3NMYWJlbD4gPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICBcIjJcIjoge1xyXG4gICAgICBsYWJlbDogXCLsl7Drj4Qg7ISg7YOdXCIsXHJcbiAgICAgIGFyZ3NLZXk6IFwieWVlclwiLFxyXG4gICAgfSxcclxuICAgIFwiM1wiOiB7XHJcbiAgICAgIGxhYmVsOiBcIuyblCDshKDtg51cIixcclxuICAgICAgYXJnc0tleTogXCJtb250aFwiLFxyXG4gICAgfSxcclxuICAgIFwiNFwiOiB7XHJcbiAgICAgIGxhYmVsOiBcIuyjvCDshKDtg51cIixcclxuICAgICAgYXJnc0tleTogXCJ3ZWVrXCIsXHJcbiAgICB9LFxyXG4gICAgXCI1XCI6IHtcclxuICAgICAgbGFiZWw6IFwi7J28IOyEoO2DnVwiLFxyXG4gICAgICBhcmdzS2V5OiBcImRheVwiLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGdldFBhc3RMb3R0b051bWJlcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9hcGkvbG90dG8vZXhlYy9nZXRQYXN0TG90dG9OdW1iZXJzXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTsgLy8gSlNPTuycvOuhnCDsnZHri7XsnYQg67OA7ZmYXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhPzogUGFzdExvdHRvTnVtYmVyW10pID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgICAgICBjb25zdCBkcmF3TnVtYmVyc0Rlc2NlbmRpbmcgPSBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5kcmF3X25vKS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XHJcbiAgICAgICAgZHJhd051bWJlcnNEZXNjZW5kaW5nLnVuc2hpZnQoZHJhd051bWJlcnNEZXNjZW5kaW5nWzBdICsgMSk7XHJcbiAgICAgICAgc2V0U2VsZWN0Um91bmQoZHJhd051bWJlcnNEZXNjZW5kaW5nKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0WWVhcnNBcnJheSA9IHVzZUNhbGxiYWNrKChzdGFydFllYXI6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCB5ZWFycyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHllYXIgPSBzdGFydFllYXI7IHllYXIgPD0gY3VycmVudFllYXI7IHllYXIrKykge1xyXG4gICAgICB5ZWFycy5wdXNoKHllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB5ZWFycy5yZXZlcnNlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXROdW1iZXJzQXJyYXkgPSB1c2VDYWxsYmFjaygodXBUb051bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBudW1iZXJzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdXBUb051bWJlcjsgaSsrKSB7XHJcbiAgICAgIG51bWJlcnMucHVzaChpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtYmVycztcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdFR5cGVBcmdzID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIHllZXI6IGdldFllYXJzQXJyYXkoMjAwMiksXHJcbiAgICAgIG1vbnRoOiBnZXROdW1iZXJzQXJyYXkoMTIpLFxyXG4gICAgICB3ZWVrOiBnZXROdW1iZXJzQXJyYXkoNCksXHJcbiAgICAgIGRheTogZ2V0TnVtYmVyc0FycmF5KDMxKSxcclxuICAgIH0pLFxyXG4gICAgW2dldFllYXJzQXJyYXksIGdldE51bWJlcnNBcnJheV1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UGFzdExvdHRvTnVtYmVycygpO1xyXG4gIH0sIFtnZXRQYXN0TG90dG9OdW1iZXJzXSk7XHJcblxyXG4gIHJldHVybiB7IHNlbGVjdFJvdW5kLCBzZWxlY3RUeXBlQXJncyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTG90dG87XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUxvdHRvIiwic2VsZWN0Um91bmQiLCJzZXRTZWxlY3RSb3VuZCIsIlRZUEVfQVJHU19MQUJFTCIsImxhYmVsIiwiYXJnc0tleSIsImdldFBhc3RMb3R0b051bWJlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJkcmF3TnVtYmVyc0Rlc2NlbmRpbmciLCJtYXAiLCJpdGVtIiwiZHJhd19ubyIsInNvcnQiLCJhIiwiYiIsInVuc2hpZnQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImdldFllYXJzQXJyYXkiLCJzdGFydFllYXIiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInllYXJzIiwieWVhciIsInB1c2giLCJyZXZlcnNlIiwiZ2V0TnVtYmVyc0FycmF5IiwidXBUb051bWJlciIsIm51bWJlcnMiLCJpIiwic2VsZWN0VHlwZUFyZ3MiLCJ5ZWVyIiwibW9udGgiLCJ3ZWVrIiwiZGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useLotto.ts\n"));

/***/ })

});