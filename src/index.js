import Render from "./components/Render.js";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";

// Load Header
Header();

// Default page content
Render(Home());

// Page content selector
const pages = {
  'Home': Home(),
  'Menu': Menu(),
  'Contact': Contact()
};

const nav = document.querySelector('.nav');

nav.addEventListener('click', (e) => {
  const targetId = e.target.id;
  
  if (targetId in pages) {
    Render(pages[targetId]);
  }
});

// TODO: 
// CSS styling
// Images