/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplate */ \"./src/classes/ListTemplate.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n\r\n\r\n\r\nlet form = document.querySelector('.new-item-form');\r\n// inputs\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\n// list template instance\r\nconst ul = document.querySelector('ul');\r\nconst list = new _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(ul);\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    let values;\r\n    values = [tofrom.value, details.value, amount.valueAsNumber];\r\n    let doc;\r\n    if (type.value === 'invoice') {\r\n        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(...values);\r\n    }\r\n    else {\r\n        doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_2__.Payment(...values);\r\n    }\r\n    list.render(doc, type.value, 'end');\r\n    form.reset();\r\n});\r\n// EXTRA INFORMATION - Tutorial\r\n// GENERICS\r\nconst addUID = (obj) => {\r\n    let uid = Math.floor(Math.random() * 100);\r\n    return Object.assign(Object.assign({}, obj), { uid });\r\n};\r\nlet docFive = addUID({ name: 'yoshi', age: 40 });\r\nconsole.log(docFive.age);\r\nconst docThree = {\r\n    uid: 1,\r\n    resourceName: 'person',\r\n    data: { name: 'Travis' }\r\n};\r\nconst docFour = {\r\n    uid: 2,\r\n    resourceName: 'shoppingList',\r\n    data: ['bread', 'milk', 'toilet roll']\r\n};\r\nconsole.log(docThree, docFour);\r\n// ENUMS\r\nvar ResourceType;\r\n(function (ResourceType) {\r\n    ResourceType[ResourceType[\"BOOK\"] = 0] = \"BOOK\";\r\n    ResourceType[ResourceType[\"AUTHOR\"] = 1] = \"AUTHOR\";\r\n    ResourceType[ResourceType[\"FILM\"] = 2] = \"FILM\";\r\n    ResourceType[ResourceType[\"DIRECTOR\"] = 3] = \"DIRECTOR\";\r\n    ResourceType[ResourceType[\"PERSON\"] = 4] = \"PERSON\";\r\n})(ResourceType || (ResourceType = {}));\r\nconst docOne = {\r\n    uid: 1,\r\n    resourceType: ResourceType.BOOK,\r\n    data: { title: 'name of the wind' }\r\n};\r\nconst docTwo = {\r\n    uid: 10,\r\n    resourceType: ResourceType.PERSON,\r\n    data: { name: 'yoshi' }\r\n};\r\nconsole.log(docOne, docTwo);\r\n// tuples\r\nlet arr = ['ryu', 25, true];\r\narr[0] = false;\r\narr[1] = 'yoshi';\r\narr = [30, false, 'yoshi'];\r\nlet tup = ['ryu', 25, true];\r\ntup[0] = 'ken';\r\ntup[1] = 30;\r\nlet student;\r\nstudent = ['chun-li', 23348745];\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25DO0FBRUQsTUFBTSxNQUFNLEdBQXFCO0lBQy9CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNO0lBQ2pDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7Q0FDdkI7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7QUFFM0IsU0FBUztBQUNULElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2YsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNqQixHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRTNCLElBQUksR0FBRyxHQUE4QixDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFWixJQUFJLE9BQXlCLENBQUM7QUFDOUIsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNhY3Rpb24tbG9nLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludm9pY2UgfSBmcm9tICcuL2NsYXNzZXMvSW52b2ljZSc7XHJcbmltcG9ydCB7IExpc3RUZW1wbGF0ZSB9IGZyb20gJy4vY2xhc3Nlcy9MaXN0VGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBQYXltZW50IH0gZnJvbSAnLi9jbGFzc2VzL1BheW1lbnQnO1xyXG5pbXBvcnQgeyBIYXNGb3JtYXR0ZXIgfSBmcm9tICcuL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyJztcclxuXHJcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1pdGVtLWZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4vLyBpbnB1dHNcclxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJykhIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5jb25zdCB0b2Zyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9mcm9tJykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW1vdW50JykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4vLyBsaXN0IHRlbXBsYXRlIGluc3RhbmNlXHJcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSE7XHJcbmNvbnN0IGxpc3QgPSBuZXcgTGlzdFRlbXBsYXRlKHVsKVxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGxldCB2YWx1ZXM6IFtzdHJpbmcsIHN0cmluZywgbnVtYmVyXTtcclxuICB2YWx1ZXMgPSBbdG9mcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcl1cclxuXHJcbiAgbGV0IGRvYzogSGFzRm9ybWF0dGVyO1xyXG4gIGlmICh0eXBlLnZhbHVlID09PSAnaW52b2ljZScpIHtcclxuICAgIGRvYyA9IG5ldyBJbnZvaWNlKC4uLnZhbHVlcylcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jID0gbmV3IFBheW1lbnQoLi4udmFsdWVzKVxyXG4gIH1cclxuXHJcbiAgbGlzdC5yZW5kZXIoZG9jLCB0eXBlLnZhbHVlLCAnZW5kJylcclxuICBmb3JtLnJlc2V0KCkgXHJcbn0pXHJcblxyXG5cclxuLy8gRVhUUkEgSU5GT1JNQVRJT04gLSBUdXRvcmlhbFxyXG5cclxuLy8gR0VORVJJQ1NcclxuY29uc3QgYWRkVUlEID0gPFQgZXh0ZW5kcyB7bmFtZTogc3RyaW5nfT4ob2JqOiBUKSA9PiB7XHJcbiAgbGV0IHVpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgcmV0dXJuIHsuLi5vYmosIHVpZH07XHJcbn1cclxuXHJcbmxldCBkb2NGaXZlID0gYWRkVUlEKHtuYW1lOiAneW9zaGknLCBhZ2U6IDQwfSk7XHJcblxyXG5jb25zb2xlLmxvZyhkb2NGaXZlLmFnZSlcclxuXHJcbi8vIGdlbmVyaWNzIHdpdGggaW50ZXJmYWNlc1xyXG5pbnRlcmZhY2UgVFJlc291cmNlPFQ+IHtcclxuICB1aWQ6IG51bWJlcjtcclxuICByZXNvdXJjZU5hbWU6IHN0cmluZztcclxuICBkYXRhOiBUO1xyXG59XHJcblxyXG5jb25zdCBkb2NUaHJlZTogVFJlc291cmNlPG9iamVjdD4gPSB7XHJcbiAgdWlkOiAxLFxyXG4gIHJlc291cmNlTmFtZTogJ3BlcnNvbicsXHJcbiAgZGF0YTogeyBuYW1lOiAnVHJhdmlzJyB9XHJcbn1cclxuXHJcbmNvbnN0IGRvY0ZvdXI6IFRSZXNvdXJjZTxzdHJpbmdbXT4gPSB7XHJcbiAgdWlkOiAyLFxyXG4gIHJlc291cmNlTmFtZTogJ3Nob3BwaW5nTGlzdCcsXHJcbiAgZGF0YTogWydicmVhZCcsICdtaWxrJywgJ3RvaWxldCByb2xsJ11cclxufVxyXG5cclxuY29uc29sZS5sb2coZG9jVGhyZWUsIGRvY0ZvdXIpXHJcblxyXG5cclxuLy8gRU5VTVNcclxuZW51bSBSZXNvdXJjZVR5cGUgeyBCT09LLCBBVVRIT1IsIEZJTE0sIERJUkVDVE9SLCBQRVJTT04gfVxyXG5cclxuaW50ZXJmYWNlIFJlc291cmNlPFQ+IHtcclxuICB1aWQ6IG51bWJlcjtcclxuICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZTtcclxuICBkYXRhOiBUO1xyXG59XHJcblxyXG5jb25zdCBkb2NPbmU6IFJlc291cmNlPG9iamVjdD4gPSB7XHJcbiAgdWlkOiAxLCBcclxuICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZS5CT09LLFxyXG4gIGRhdGE6IHsgdGl0bGU6ICduYW1lIG9mIHRoZSB3aW5kJ31cclxufVxyXG5cclxuY29uc3QgZG9jVHdvOiBSZXNvdXJjZTxvYmplY3Q+ID0ge1xyXG4gIHVpZDogMTAsIFxyXG4gIHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlLlBFUlNPTixcclxuICBkYXRhOiB7IG5hbWU6ICd5b3NoaSd9XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGRvY09uZSwgZG9jVHdvKVxyXG5cclxuLy8gdHVwbGVzXHJcbmxldCBhcnIgPSBbJ3J5dScsIDI1LCB0cnVlXTtcclxuYXJyWzBdID0gZmFsc2U7XHJcbmFyclsxXSA9ICd5b3NoaSc7XHJcbmFyciA9IFszMCwgZmFsc2UsICd5b3NoaSddO1xyXG5cclxubGV0IHR1cDogW3N0cmluZywgbnVtYmVyLCBib29sZWFuXSA9IFsncnl1JywgMjUsIHRydWVdO1xyXG50dXBbMF0gPSAna2VuJztcclxudHVwWzFdID0gMzA7XHJcblxyXG5sZXQgc3R1ZGVudDogW3N0cmluZywgbnVtYmVyXTtcclxuc3R1ZGVudCA9IFsnY2h1bi1saScsIDIzMzQ4NzQ1XTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Invoice\": () => (/* binding */ Invoice)\n/* harmony export */ });\n// classes\r\nclass Invoice {\r\n    constructor(client, details, amount) {\r\n        this.client = client;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.client} owes $${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9JbnZvaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxVQUFVO0FBQ0gsTUFBTSxPQUFPO0lBQ2xCLFlBQ1csTUFBYyxFQUNmLE9BQWUsRUFDaEIsTUFBYztRQUZaLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVKLE1BQU07UUFDSixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sVUFBVSxJQUFJLENBQUMsTUFBTSxRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUU7SUFDbEUsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNhY3Rpb24tbG9nLy4vc3JjL2NsYXNzZXMvSW52b2ljZS50cz83YTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc0Zvcm1hdHRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyLmpzJztcclxuXHJcbi8vIGNsYXNzZXNcclxuZXhwb3J0IGNsYXNzIEludm9pY2UgaW1wbGVtZW50cyBIYXNGb3JtYXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVhZG9ubHkgY2xpZW50OiBzdHJpbmcsXHJcbiAgICBwcml2YXRlIGRldGFpbHM6IHN0cmluZyxcclxuICAgIHB1YmxpYyBhbW91bnQ6IG51bWJlcixcclxuICApIHt9XHJcblxyXG4gIGZvcm1hdCgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmNsaWVudH0gb3dlcyAkJHt0aGlzLmFtb3VudH0gZm9yICR7dGhpcy5kZXRhaWxzfWBcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/Invoice.ts\n");

/***/ }),

/***/ "./src/classes/ListTemplate.ts":
/*!*************************************!*\
  !*** ./src/classes/ListTemplate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListTemplate\": () => (/* binding */ ListTemplate)\n/* harmony export */ });\nclass ListTemplate {\r\n    constructor(container) {\r\n        this.container = container;\r\n    }\r\n    render(item, heading, pos) {\r\n        const li = document.createElement('li');\r\n        const h4 = document.createElement('h4');\r\n        h4.innerText = heading;\r\n        li.append(h4);\r\n        const p = document.createElement('p');\r\n        p.innerText = item.format();\r\n        li.append(p);\r\n        if (pos === 'start') {\r\n            this.container.prepend(li);\r\n        }\r\n        else {\r\n            this.container.append(li);\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU0sWUFBWTtJQUN2QixZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFFLENBQUM7SUFFbEQsTUFBTSxDQUFDLElBQWtCLEVBQUUsT0FBZSxFQUFFLEdBQW9CO1FBQzlELE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN2QixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWQsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVaLElBQUksR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFuc2FjdGlvbi1sb2cvLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGUudHM/MTExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNGb3JtYXR0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNGb3JtYXR0ZXIuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0VGVtcGxhdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBIVE1MVUxpc3RFbGVtZW50KXt9XHJcblxyXG4gIHJlbmRlcihpdGVtOiBIYXNGb3JtYXR0ZXIsIGhlYWRpbmc6IHN0cmluZywgcG9zOiAnc3RhcnQnIHwgJ2VuZCcpe1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgaDQuaW5uZXJUZXh0ID0gaGVhZGluZztcclxuICAgIGxpLmFwcGVuZChoNCk7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAuaW5uZXJUZXh0ID0gaXRlbS5mb3JtYXQoKTtcclxuICAgIGxpLmFwcGVuZChwKVxyXG5cclxuICAgIGlmIChwb3MgPT09ICdzdGFydCcpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIucHJlcGVuZChsaSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/ListTemplate.ts\n");

/***/ }),

/***/ "./src/classes/Payment.ts":
/*!********************************!*\
  !*** ./src/classes/Payment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Payment\": () => (/* binding */ Payment)\n/* harmony export */ });\n// classes\r\nclass Payment {\r\n    constructor(recipient, details, amount) {\r\n        this.recipient = recipient;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.recipient} is owed $${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxVQUFVO0FBQ0gsTUFBTSxPQUFPO0lBQ2xCLFlBQ1csU0FBaUIsRUFDbEIsT0FBZSxFQUNoQixNQUFjO1FBRlosY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVKLE1BQU07UUFDSixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYSxJQUFJLENBQUMsTUFBTSxRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUU7SUFDeEUsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNhY3Rpb24tbG9nLy4vc3JjL2NsYXNzZXMvUGF5bWVudC50cz9mYzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc0Zvcm1hdHRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyLmpzJztcclxuXHJcbi8vIGNsYXNzZXNcclxuZXhwb3J0IGNsYXNzIFBheW1lbnQgaW1wbGVtZW50cyBIYXNGb3JtYXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVhZG9ubHkgcmVjaXBpZW50OiBzdHJpbmcsXHJcbiAgICBwcml2YXRlIGRldGFpbHM6IHN0cmluZyxcclxuICAgIHB1YmxpYyBhbW91bnQ6IG51bWJlcixcclxuICApIHt9XHJcblxyXG4gIGZvcm1hdCgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLnJlY2lwaWVudH0gaXMgb3dlZCAkJHt0aGlzLmFtb3VudH0gZm9yICR7dGhpcy5kZXRhaWxzfWBcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/Payment.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;