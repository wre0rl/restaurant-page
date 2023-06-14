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

export default CreateNavElement;