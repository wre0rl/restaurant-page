import Render from "./components/Render.js";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";

const pages = {
  'Home': Home(),
  'Menu': Menu(),
  'Contact': Contact()
};

// Load Header
Header();

const nav = document.querySelector('.nav');

// Default page content
Render(Home());

// Page content selector
nav.addEventListener('click', (e) => {
  const targetText = e.target.innerText;

  if (targetText in pages) {
    Render(pages[targetText]);
  }
});

// TODO: 
// CSS-in-JS webpack
// CSS styling
// Images, and contents