import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";

const pages = {
  'Home': Home(),
  'Menu': Menu(),
  'Contact': Contact()
};

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

  if (targetText in pages) {
    render(pages[targetText]);
  }
});

// TODO: 
// CSS-in-JS webpack
// CSS styling