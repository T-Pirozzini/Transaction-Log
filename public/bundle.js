/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './classes/Invoice.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './classes/ListTemplate.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './classes/Payment.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nlet form = document.querySelector('.new-item-form');\r\n// inputs\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\n// list template instance\r\nconst ul = document.querySelector('ul');\r\nconst list = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './classes/ListTemplate.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ul);\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    let values;\r\n    values = [tofrom.value, details.value, amount.valueAsNumber];\r\n    let doc;\r\n    if (type.value === 'invoice') {\r\n        doc = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './classes/Invoice.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(...values);\r\n    }\r\n    else {\r\n        doc = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './classes/Payment.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(...values);\r\n    }\r\n    list.render(doc, type.value, 'end');\r\n    form.reset();\r\n});\r\n// EXTRA INFORMATION - Tutorial\r\n// GENERICS\r\nconst addUID = (obj) => {\r\n    let uid = Math.floor(Math.random() * 100);\r\n    return Object.assign(Object.assign({}, obj), { uid });\r\n};\r\nlet docFive = addUID({ name: 'yoshi', age: 40 });\r\nconsole.log(docFive.age);\r\nconst docThree = {\r\n    uid: 1,\r\n    resourceName: 'person',\r\n    data: { name: 'Travis' }\r\n};\r\nconst docFour = {\r\n    uid: 2,\r\n    resourceName: 'shoppingList',\r\n    data: ['bread', 'milk', 'toilet roll']\r\n};\r\nconsole.log(docThree, docFour);\r\n// ENUMS\r\nvar ResourceType;\r\n(function (ResourceType) {\r\n    ResourceType[ResourceType[\"BOOK\"] = 0] = \"BOOK\";\r\n    ResourceType[ResourceType[\"AUTHOR\"] = 1] = \"AUTHOR\";\r\n    ResourceType[ResourceType[\"FILM\"] = 2] = \"FILM\";\r\n    ResourceType[ResourceType[\"DIRECTOR\"] = 3] = \"DIRECTOR\";\r\n    ResourceType[ResourceType[\"PERSON\"] = 4] = \"PERSON\";\r\n})(ResourceType || (ResourceType = {}));\r\nconst docOne = {\r\n    uid: 1,\r\n    resourceType: ResourceType.BOOK,\r\n    data: { title: 'name of the wind' }\r\n};\r\nconst docTwo = {\r\n    uid: 10,\r\n    resourceType: ResourceType.PERSON,\r\n    data: { name: 'yoshi' }\r\n};\r\nconsole.log(docOne, docTwo);\r\n// tuples\r\nlet arr = ['ryu', 25, true];\r\narr[0] = false;\r\narr[1] = 'yoshi';\r\narr = [30, false, 'yoshi'];\r\nlet tup = ['ryu', 25, true];\r\ntup[0] = 'ken';\r\ntup[1] = 30;\r\nlet student;\r\nstudent = ['chun-li', 23348745];\r\n\n\n//# sourceURL=webpack://transaction-log/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;