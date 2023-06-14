import Header from "./components/common/Header.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";

const render = (page) => {
  content.textContent = '';
  content.appendChild(page);
};

// Load Header
Header();

const nav = document.querySelector('.nav');
const content = document.querySelector('#content');

// Default page content
render(Home());

// Page content selector
nav.addEventListener('click', (e) => {
  const targetText = e.target.innerText;

  if (targetText === 'Home') {
    render(Home());
  } else if (targetText === 'Menu') {
    render(Menu());
  } else if (targetText === 'Contact') {
    render(Contact());
  }
});