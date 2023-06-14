const createHeaderElement = () => {
  const headerElement = document.createElement('div');
  headerElement.classList.add('header');
  return headerElement;
};

const createNavElement = () => {
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

const Header = () => {
  const body = document.body;
  const headerElement = createHeaderElement();
  const navElement = createNavElement();

  body.prepend(headerElement);
  headerElement.appendChild(navElement);
};

export default Header;
