/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CreateHeaderElement/CreateHeaderElement.js":
/*!*******************************************************************!*\
  !*** ./src/components/CreateHeaderElement/CreateHeaderElement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CreateHeaderElement = () => {
  const headerElement = document.createElement('div');
  headerElement.classList.add('header');
  return headerElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateHeaderElement);


/***/ }),

/***/ "./src/components/CreateNavElement/CreateNavElement.js":
/*!*************************************************************!*\
  !*** ./src/components/CreateNavElement/CreateNavElement.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CreateNavElement = () => {
  const navItems = ['Home', 'Menu', 'Contact'];
  const navElement = document.createElement('div');
  navElement.classList.add('nav');

  for (const navItem of navItems) {
    const navItemElement = document.createElement('div');
    navItemElement.innerText = navItem;
    navItemElement.classList.add('nav__item');
    navElement.appendChild(navItemElement);
  }

  return navElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateNavElement);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = () => {
  const content = document.createElement('div');
  content.innerText = 'IM HOMEEE!'; 
  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {
  const content = document.createElement('div');
  content.innerText = 'IM NENUU!'; 
  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CreateHeaderElement_CreateHeaderElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CreateHeaderElement/CreateHeaderElement.js */ "./src/components/CreateHeaderElement/CreateHeaderElement.js");
/* harmony import */ var _components_CreateNavElement_CreateNavElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CreateNavElement/CreateNavElement.js */ "./src/components/CreateNavElement/CreateNavElement.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");





const createHeaderWithNavElement = () => {
  const body = document.body;
  const headerElement = (0,_components_CreateHeaderElement_CreateHeaderElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const navElement = (0,_components_CreateNavElement_CreateNavElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Header & Nav
  body.prepend(headerElement);
  headerElement.appendChild(navElement);
};

createHeaderWithNavElement();

const nav = document.querySelector('.nav');
const content = document.querySelector('#content');

const render = (page) => {
  content.textContent = '';
  content.appendChild(page);
};

// Default page
render((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

// Page selector
nav.addEventListener('click', (e) => {
  const targetText = e.target.innerText;

  if (targetText === 'Home') {
    render((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  } else if (targetText === 'Menu') {
    render((0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ05uQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FDZi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNObkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNObkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wRjtBQUNUO0FBQzlDO0FBQ0E7O0FBRW5DO0FBQ0E7QUFDQSx3QkFBd0Isa0dBQW1CO0FBQzNDLHFCQUFxQiw0RkFBZ0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLDBEQUFJOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMERBQUk7QUFDZixJQUFJO0FBQ0osV0FBVywwREFBSTtBQUNmO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlSGVhZGVyRWxlbWVudC9DcmVhdGVIZWFkZXJFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZU5hdkVsZW1lbnQvQ3JlYXRlTmF2RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ3JlYXRlSGVhZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICByZXR1cm4gaGVhZGVyRWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUhlYWRlckVsZW1lbnQ7XG4iLCJjb25zdCBDcmVhdGVOYXZFbGVtZW50ID0gKCkgPT4ge1xuICBjb25zdCBuYXZJdGVtcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcbiAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gIGZvciAoY29uc3QgbmF2SXRlbSBvZiBuYXZJdGVtcykge1xuICAgIGNvbnN0IG5hdkl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2SXRlbUVsZW1lbnQuaW5uZXJUZXh0ID0gbmF2SXRlbTtcbiAgICBuYXZJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW0nKTtcbiAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKG5hdkl0ZW1FbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBuYXZFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTmF2RWxlbWVudDsiLCJjb25zdCBob21lID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuaW5uZXJUZXh0ID0gJ0lNIEhPTUVFRSEnOyBcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5pbm5lclRleHQgPSAnSU0gTkVOVVUhJzsgXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVIZWFkZXJFbGVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ3JlYXRlSGVhZGVyRWxlbWVudC9DcmVhdGVIZWFkZXJFbGVtZW50LmpzXCI7XG5pbXBvcnQgQ3JlYXRlTmF2RWxlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NyZWF0ZU5hdkVsZW1lbnQvQ3JlYXRlTmF2RWxlbWVudC5qc1wiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudS5qc1wiO1xuXG5jb25zdCBjcmVhdGVIZWFkZXJXaXRoTmF2RWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBDcmVhdGVIZWFkZXJFbGVtZW50KCk7XG4gIGNvbnN0IG5hdkVsZW1lbnQgPSBDcmVhdGVOYXZFbGVtZW50KCk7XG5cbiAgLy8gSGVhZGVyICYgTmF2XG4gIGJvZHkucHJlcGVuZChoZWFkZXJFbGVtZW50KTtcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcbn07XG5cbmNyZWF0ZUhlYWRlcldpdGhOYXZFbGVtZW50KCk7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCByZW5kZXIgPSAocGFnZSkgPT4ge1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG59O1xuXG4vLyBEZWZhdWx0IHBhZ2VcbnJlbmRlcihob21lKCkpO1xuXG4vLyBQYWdlIHNlbGVjdG9yXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXRUZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuXG4gIGlmICh0YXJnZXRUZXh0ID09PSAnSG9tZScpIHtcbiAgICByZW5kZXIoaG9tZSgpKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUZXh0ID09PSAnTWVudScpIHtcbiAgICByZW5kZXIobWVudSgpKTtcbiAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9