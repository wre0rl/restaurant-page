import CreateHeaderElement from "./components/CreateHeaderElement/CreateHeaderElement.js";
import CreateNavElement from "./components/CreateNavElement/CreateNavElement.js";
import home from "./pages/home.js";
import menu from "./pages/menu.js";

const createHeaderWithNavElement = () => {
  const body = document.body;
  const headerElement = CreateHeaderElement();
  const navElement = CreateNavElement();

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
render(home());

// Page selector
nav.addEventListener('click', (e) => {
  const targetText = e.target.innerText;

  if (targetText === 'Home') {
    render(home());
  } else if (targetText === 'Menu') {
    render(menu());
  }
});