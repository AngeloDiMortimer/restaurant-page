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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createHeader = () => {\r\n    const header = document.createElement(\"header\");\r\n    header.classList.add(\"header\");\r\n\r\n    const restName = document.createElement(\"h1\");\r\n    restName.classList.add(\"rest-name\");\r\n    restName.textContent = \"Di Mortimer\";\r\n\r\n    header.appendChild(restName);\r\n    header.appendChild(createNav());\r\n\r\n    return header;\r\n}\r\n\r\nconst createNav = () => {\r\n    const nav = document.createElement(\"nav\");\r\n    \r\n    /* Home Button */\r\n    const homeButton = document.createElement(\"button\");\r\n    homeButton.classList.add(\"button-nav\");\r\n    homeButton.textContent = \"Home\";\r\n    homeButton.addEventListener(\"click\", (e) => {\r\n        if (e.target.classList.contains(\"active\")) return;\r\n        setActive(homeButton);\r\n    });\r\n\r\n    /* Menu Button */\r\n    const menuButton = document.createElement(\"button\");\r\n    menuButton.classList.add(\"button-nav\");\r\n    menuButton.textContent = \"Menu\";\r\n    menuButton.addEventListener(\"click\", (e) => {\r\n        if (e.target.classList.contains(\"active\")) return;\r\n        setActive(menuButton);\r\n    });\r\n    \r\n    /* Contact Button */\r\n    const contactButton = document.createElement(\"button\");\r\n    contactButton.classList.add(\"button-nav\");\r\n    contactButton.textContent = \"Contact\";\r\n    contactButton.addEventListener(\"click\", (e) => {\r\n        if (e.target.classList.contains(\"active\")) return;\r\n        setActive(contactButton);\r\n    });\r\n\r\n    nav.appendChild(homeButton);\r\n    nav.appendChild(menuButton);\r\n    nav.appendChild(contactButton);\r\n\r\n    return nav;\r\n    \r\n}\r\n\r\n/* adds \"active\" class to an element */\r\nconst setActive = (button) => {\r\n    const buttons = document.querySelectorAll(\".button-nav\");\r\n    \r\n    buttons.forEach((button) =>{\r\n        if (button !== undefined) {\r\n            button.classList.remove(\"active\");\r\n        }\r\n    })\r\n\r\n    button.classList.add(\"active\");\r\n}\r\n\r\n/* Initializes website */\r\n\r\nconst initWebsite = () => {\r\n\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.appendChild(createHeader());\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;