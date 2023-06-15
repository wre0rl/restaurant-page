import "../styles/common.css";

const Home = () => {
  const content = document.createElement('div');
  const title = document.createElement('h2');
  const para = document.createElement('div');

  content.classList.add('content');
  title.classList.add('content__title');
  para.classList.add('content__paragraph');

  title.innerText = "Welcome";
  para.innerText = "We are a family-owned business dedicated to bringing the authentic flavors of Indonesia to your table. Our menu features a wide range of delicious dishes that showcase the unique blend of spices and herbs that make Indonesian cuisine so special."; 
  
  content.appendChild(title);
  content.appendChild(para);

  return content;
};

export default Home;