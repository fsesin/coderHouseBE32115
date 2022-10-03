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

/***/ "./src/area.ts":
/*!*********************!*\
  !*** ./src/area.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Area {\n    cuadrado(lado) {\n        return lado ** 2;\n    }\n    rectangulo(base, altura) {\n        return base * altura;\n    }\n    circulo(radio) {\n        return Math.PI * radio ** 2;\n    }\n}\nexports[\"default\"] = Area;\n\n\n//# sourceURL=webpack://webpackts/./src/area.ts?");

/***/ }),

/***/ "./src/perimetro.ts":
/*!**************************!*\
  !*** ./src/perimetro.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Perimetro {\n    cuadrado(lado) {\n        return lado * 4;\n    }\n    rectangulo(base, altura) {\n        return base * 2 + altura * 2;\n    }\n    circulo(radio) {\n        return 2 * Math.PI * radio;\n    }\n}\nexports[\"default\"] = Perimetro;\n\n\n//# sourceURL=webpack://webpackts/./src/perimetro.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst perimetro_1 = __importDefault(__webpack_require__(/*! ./perimetro */ \"./src/perimetro.ts\"));\nconst area_1 = __importDefault(__webpack_require__(/*! ./area */ \"./src/area.ts\"));\nconst app = (0, express_1.default)();\n// inst area y perimetro\nconst perimetro = new perimetro_1.default();\nconst area = new area_1.default();\n// creamos rutas\n//perimetro\napp.get('/perimetro/:figura', (req, res) => {\n    const { figura } = req.params;\n    const { valor1, valor2 } = req.query;\n    let resultado = 0;\n    switch (figura) {\n        case 'cuadrado':\n            resultado = perimetro.cuadrado(Number(valor1));\n            break;\n        case 'rectangulo':\n            resultado = perimetro.rectangulo(Number(valor1), Number(valor2));\n            break;\n        case 'circulo':\n            resultado = perimetro.circulo(Number(valor1));\n            break;\n        default:\n            resultado = 0;\n    }\n    res.json({\n        tipo: 'Perimetro',\n        figura,\n        parametros: [valor1, valor2],\n        resultado,\n    });\n});\napp.get('/area/:figura', (req, res) => {\n    const { figura } = req.params;\n    const { valor1, valor2 } = req.query;\n    let resultado = 0;\n    switch (figura) {\n        case 'cuadrado':\n            resultado = area.cuadrado(Number(valor1));\n            break;\n        case 'rectangulo':\n            resultado = area.rectangulo(Number(valor1), Number(valor2));\n            break;\n        case 'circulo':\n            resultado = area.circulo(Number(valor1));\n            break;\n        default:\n            resultado = 0;\n    }\n    res.json({\n        tipo: 'Area',\n        figura,\n        parametros: [valor1, valor2],\n        resultado,\n    });\n});\nconst PORT = 3000;\napp.listen(PORT, () => {\n    console.log(`escuchando al puerto ${PORT}`);\n});\n\n\n//# sourceURL=webpack://webpackts/./src/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;