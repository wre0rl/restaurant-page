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

export default Header;
