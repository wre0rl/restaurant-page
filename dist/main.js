/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/common/Header.js":
/*!*****************************************!*\
  !*** ./src/components/common/Header.js ***!
  \*****************************************/
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
/* harmony import */ var _components_common_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/Header.js */ "./src/components/common/Header.js");
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
(0,_components_common_Header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDTnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNObkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNObkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNoQjtBQUNBO0FBQ007O0FBRXpDO0FBQ0EsVUFBVSwwREFBSTtBQUNkLFVBQVUsMERBQUk7QUFDZCxhQUFhLDZEQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0VBQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBLE9BQU8sMERBQUk7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9Db250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9NZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVIZWFkZXJFbGVtZW50ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIHJldHVybiBoZWFkZXJFbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlTmF2RWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gIGNyZWF0ZU5hdkl0ZW1zKG5hdkVsZW1lbnQpO1xuICBcbiAgcmV0dXJuIG5hdkVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVOYXZJdGVtcyA9IChuYXZFbGVtZW50KSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuXG4gIGZvciAoY29uc3QgbmF2SXRlbSBvZiBuYXZJdGVtcykge1xuICAgIGNvbnN0IG5hdkl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2SXRlbUVsZW1lbnQuaW5uZXJUZXh0ID0gbmF2SXRlbTtcbiAgICBuYXZJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW0nKTtcbiAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKG5hdkl0ZW1FbGVtZW50KTtcbiAgfVxufTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZUhlYWRlckVsZW1lbnQoKTtcbiAgY29uc3QgbmF2RWxlbWVudCA9IGNyZWF0ZU5hdkVsZW1lbnQoKTtcblxuICBib2R5LnByZXBlbmQoaGVhZGVyRWxlbWVudCk7XG4gIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2RWxlbWVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJjb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuaW5uZXJUZXh0ID0gJ0lNIENPTlRBQ1QhISEnOyBcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5pbm5lclRleHQgPSAnSU0gSE9NRUVFISc7IFxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiY29uc3QgTWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmlubmVyVGV4dCA9ICdJTSBORU5VVSEnOyBcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9IZWFkZXIuanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL3BhZ2VzL01lbnUuanNcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL3BhZ2VzL0NvbnRhY3QuanNcIjtcblxuY29uc3QgcGFnZXMgPSB7XG4gICdIb21lJzogSG9tZSgpLFxuICAnTWVudSc6IE1lbnUoKSxcbiAgJ0NvbnRhY3QnOiBDb250YWN0KClcbn07XG5cbmNvbnN0IHJlbmRlciA9IChwYWdlKSA9PiB7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbn07XG5cbi8vIExvYWQgSGVhZGVyXG5IZWFkZXIoKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIERlZmF1bHQgcGFnZSBjb250ZW50XG5yZW5kZXIoSG9tZSgpKTtcblxuLy8gUGFnZSBjb250ZW50IHNlbGVjdG9yXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXRUZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuXG4gIGlmICh0YXJnZXRUZXh0IGluIHBhZ2VzKSB7XG4gICAgcmVuZGVyKHBhZ2VzW3RhcmdldFRleHRdKTtcbiAgfVxufSk7XG5cbi8vIFRPRE86IFxuLy8gQ1NTLWluLUpTIHdlYnBhY2tcbi8vIENTUyBzdHlsaW5nIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9