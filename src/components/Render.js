const Render = (page) => {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(page);
};

export default Render;