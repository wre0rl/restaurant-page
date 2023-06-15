import "../styles/common.css";
import "../styles/menu.css";

const Menu = () => {
  const foods = [
    { name: 'Nasi Goreng', price: '$8.99' },
    { name: 'Sate Ayam', price: '$11' },
    { name: 'Rendang', price: '$13' }
  ];

  const content = document.createElement('div');
  const title = document.createElement('h2');
  const menu = document.createElement('div');

  content.classList.add('content');
  title.classList.add('content__title');
  menu.classList.add('menu');

  title.innerText = 'Menu';

  content.appendChild(title);
  content.appendChild(menu);
  
  // Populate menu item and price
  for (const food of foods) {
    const menuItem = document.createElement('div');
    const menuPrice = document.createElement('div');

    menuItem.classList.add('menu__item');
    menuPrice.classList.add('menu__price');

    menuItem.innerText = food.name;
    menuPrice.innerText = food.price;

    menu.appendChild(menuItem);
    menu.appendChild(menuPrice);
  }

  return content;
};

export default Menu;