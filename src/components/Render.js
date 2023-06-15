const Render = (page) => {
  const content = document.querySelector('.content');

  if (content) {
    content.remove();
  }
  
  document.body.appendChild(page);
};

export default Render;