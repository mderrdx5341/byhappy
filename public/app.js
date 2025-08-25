/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/src/Core/Cart.ts":
/*!***********************************!*\
  !*** ./frontend/src/Core/Cart.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
    _name = 'title';
    _description = 'description';
    constructor(name = 'title', description = 'description') {
        this._name = name;
        this._description = description;
    }
    title() {
        return this._name;
    }
    description() {
        return this._description;
    }
}



/***/ }),

/***/ "./frontend/src/Core/Player.ts":
/*!*************************************!*\
  !*** ./frontend/src/Core/Player.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
class Player {
    carts;
    constructor() {
        this.carts = [];
    }
    addCart(cart) {
        this.carts.push(cart);
    }
    getCarts() {
        return this.carts;
    }
    getCartById(id) {
        return this.carts[id];
    }
}



/***/ }),

/***/ "./frontend/src/Core/index.ts":
/*!************************************!*\
  !*** ./frontend/src/Core/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* reexport safe */ _Cart__WEBPACK_IMPORTED_MODULE_1__.Cart),
/* harmony export */   Player: () => (/* reexport safe */ _Player__WEBPACK_IMPORTED_MODULE_0__.Player)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./frontend/src/Core/Player.ts");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart */ "./frontend/src/Core/Cart.ts");




/***/ }),

/***/ "./frontend/src/Views/Cart/Cart.ts":
/*!*****************************************!*\
  !*** ./frontend/src/Views/Cart/Cart.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
    _cart;
    constructor(cart) {
        this._cart = cart;
    }
    html() {
        let html = document.createElement('div');
        html.className = 'cart';
        html.draggable = true;
        let title = document.createElement('div');
        title.className = 'cart__title';
        title.innerHTML = this._cart.title();
        let description = document.createElement('div');
        description.className = 'cart__description';
        description.innerHTML = this._cart.description();
        html.append(title);
        html.append(description);
        return html;
    }
}



/***/ }),

/***/ "./frontend/src/Views/Desk/Desk.ts":
/*!*****************************************!*\
  !*** ./frontend/src/Views/Desk/Desk.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Desk: () => (/* binding */ Desk)
/* harmony export */ });
class Desk {
    _html;
    _actions;
    _carts;
    constructor() {
        this._html = document.createElement('div');
        this._html.classList.add('desc');
        this._carts = document.createElement('div');
        this._carts.classList.add('carts');
        this._actions = document.createElement('div');
        this._actions.classList.add('actions');
        this._html.appendChild(this._carts);
        this._html.appendChild(this._actions);
    }
    html() {
        return this._html;
    }
    actions() {
        return this._actions;
    }
    carts() {
        return this._carts;
    }
}



/***/ }),

/***/ "./frontend/src/Views/Player/Player.ts":
/*!*********************************************!*\
  !*** ./frontend/src/Views/Player/Player.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core */ "./frontend/src/Core/index.ts");

class Player extends _Core__WEBPACK_IMPORTED_MODULE_0__.Player {
}



/***/ }),

/***/ "./frontend/src/Views/index.ts":
/*!*************************************!*\
  !*** ./frontend/src/Views/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* reexport safe */ _Cart_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart),
/* harmony export */   Desk: () => (/* reexport safe */ _Desk_Desk__WEBPACK_IMPORTED_MODULE_2__.Desk),
/* harmony export */   Player: () => (/* reexport safe */ _Player_Player__WEBPACK_IMPORTED_MODULE_1__.Player)
/* harmony export */ });
/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart/Cart */ "./frontend/src/Views/Cart/Cart.ts");
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player/Player */ "./frontend/src/Views/Player/Player.ts");
/* harmony import */ var _Desk_Desk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Desk/Desk */ "./frontend/src/Views/Desk/Desk.ts");





/***/ }),

/***/ "./frontend/src/app.scss":
/*!*******************************!*\
  !*** ./frontend/src/app.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/src/app.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ "./frontend/src/app.scss");
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core */ "./frontend/src/Core/index.ts");
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views */ "./frontend/src/Views/index.ts");



document.addEventListener('DOMContentLoaded', () => {
    let player = new _Core__WEBPACK_IMPORTED_MODULE_1__.Player();
    player.addCart(new _Core__WEBPACK_IMPORTED_MODULE_1__.Cart());
    player.addCart(new _Core__WEBPACK_IMPORTED_MODULE_1__.Cart('Вах Вах', 'Аля улу'));
    let desk = new _Views__WEBPACK_IMPORTED_MODULE_2__.Desk();
    let app = document.querySelector('#app');
    for (let i = 0; i < player.getCarts().length; i++) {
        desk.carts().append((new _Views__WEBPACK_IMPORTED_MODULE_2__.Cart(player.getCarts()[i])).html());
    }
    app.appendChild(desk.html());
    //console.log(player.getCarts());
});

})();

/******/ })()
;
//# sourceMappingURL=app.js.map