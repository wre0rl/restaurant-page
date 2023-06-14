/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHeaderElement = () => {
  const headerElement = document.createElement('div');
  headerElement.classList.add('header');
  return headerElement;
};

const createNavElement = () => {
  const navElement = document.createElement('div');
  navElement.classList.add('nav');

  createNavItems(navElement);
  
  return navElement;
};

const createNavItems = (navElement) => {
  const navItems = ['Home', 'Menu', 'Contact'];

  for (const navItem of navItems) {
    const navItemElement = document.createElement('div');
    navItemElement.innerText = navItem;
    navItemElement.classList.add('nav__item');
    navElement.appendChild(navItemElement);
  }
};

const Header = () => {
  const body = document.body;
  const headerElement = createHeaderElement();
  const navElement = createNavElement();

  body.prepend(headerElement);
  headerElement.appendChild(navElement);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Contact = () => {
  const content = document.createElement('div');
  content.innerText = 'IM CONTACT!!!'; 
  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Home = () => {
  const content = document.createElement('div');
  content.innerText = 'IM HOMEEE!'; 
  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/pages/Menu.js":
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Menu = () => {
  const content = document.createElement('div');
  content.innerText = 'IM NENUU!'; 
  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

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
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header.js */ "./src/components/Header.js");
/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home.js */ "./src/pages/Home.js");
/* harmony import */ var _pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Menu.js */ "./src/pages/Menu.js");
/* harmony import */ var _pages_Contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Contact.js */ "./src/pages/Contact.js");





const pages = {
  'Home': (0,_pages_Home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
  'Menu': (0,_pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  'Contact': (0,_pages_Contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
};

const render = (page) => {
  content.textContent = '';
  content.appendChild(page);
};

// Load Header
(0,_components_Header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const nav = document.querySelector('.nav');
const content = document.querySelector('#content');

// Default page content
render((0,_pages_Home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

// Page content selector
nav.addEventListener('click', (e) => {
  const targetText = e.target.innerText;

  if (targetText in pages) {
    render(pages[targetText]);
  }
});

// TODO: 
// CSS-in-JS webpack
// CSS styling
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDTnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNObkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNObkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUNUO0FBQ0E7QUFDTTs7QUFFekM7QUFDQSxVQUFVLDBEQUFJO0FBQ2QsVUFBVSwwREFBSTtBQUNkLGFBQWEsNkRBQU87QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0EsT0FBTywwREFBSTs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlSGVhZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICByZXR1cm4gaGVhZGVyRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdkVsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICBjcmVhdGVOYXZJdGVtcyhuYXZFbGVtZW50KTtcbiAgXG4gIHJldHVybiBuYXZFbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlTmF2SXRlbXMgPSAobmF2RWxlbWVudCkgPT4ge1xuICBjb25zdCBuYXZJdGVtcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcblxuICBmb3IgKGNvbnN0IG5hdkl0ZW0gb2YgbmF2SXRlbXMpIHtcbiAgICBjb25zdCBuYXZJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkl0ZW1FbGVtZW50LmlubmVyVGV4dCA9IG5hdkl0ZW07XG4gICAgbmF2SXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtJyk7XG4gICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZChuYXZJdGVtRWxlbWVudCk7XG4gIH1cbn07XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBjcmVhdGVIZWFkZXJFbGVtZW50KCk7XG4gIGNvbnN0IG5hdkVsZW1lbnQgPSBjcmVhdGVOYXZFbGVtZW50KCk7XG5cbiAgYm9keS5wcmVwZW5kKGhlYWRlckVsZW1lbnQpO1xuICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKG5hdkVsZW1lbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmlubmVyVGV4dCA9ICdJTSBDT05UQUNUISEhJzsgXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCJjb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuaW5uZXJUZXh0ID0gJ0lNIEhPTUVFRSEnOyBcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5pbm5lclRleHQgPSAnSU0gTkVOVVUhJzsgXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXIuanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL3BhZ2VzL01lbnUuanNcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL3BhZ2VzL0NvbnRhY3QuanNcIjtcblxuY29uc3QgcGFnZXMgPSB7XG4gICdIb21lJzogSG9tZSgpLFxuICAnTWVudSc6IE1lbnUoKSxcbiAgJ0NvbnRhY3QnOiBDb250YWN0KClcbn07XG5cbmNvbnN0IHJlbmRlciA9IChwYWdlKSA9PiB7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbn07XG5cbi8vIExvYWQgSGVhZGVyXG5IZWFkZXIoKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIERlZmF1bHQgcGFnZSBjb250ZW50XG5yZW5kZXIoSG9tZSgpKTtcblxuLy8gUGFnZSBjb250ZW50IHNlbGVjdG9yXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXRUZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuXG4gIGlmICh0YXJnZXRUZXh0IGluIHBhZ2VzKSB7XG4gICAgcmVuZGVyKHBhZ2VzW3RhcmdldFRleHRdKTtcbiAgfVxufSk7XG5cbi8vIFRPRE86IFxuLy8gQ1NTLWluLUpTIHdlYnBhY2tcbi8vIENTUyBzdHlsaW5nIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9