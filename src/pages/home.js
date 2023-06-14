import CreateHeaderElement from "../components/CreateHeaderElement/CreateHeaderElement.js";
import CreateNavElement from "../components/CreateNavElement/CreateNavElement.js";

const home = () => {
  const body = document.body;
  const headerElement = CreateHeaderElement();
  const navElement = CreateNavElement();
  const content = document.createElement('div');
  content.innerText = 'IM HOMEEE!'; 

  body.insertBefore(headerElement, document.body.firstChild);
  headerElement.appendChild(navElement);

  return content;
};

export default home;