const Contact = () => {
  const content = document.createElement('div');
  const title = document.createElement('h2');
  const contact = document.createElement('div');
  const phone = document.createElement('div');
  const address = document.createElement('div');

  content.classList.add('content');
  title.classList.add('content__title');
  contact.classList.add('contact');
  phone.classList.add('contact__phone');
  address.classList.add('contact__address');

  title.innerText = 'Contact Us';
  phone.innerText = '08124857222';
  address.innerText = 'Jln. Kemuning Raya No.25, Pejaten Timur, Jakarta Selatan';

  content.appendChild(title);
  content.appendChild(contact);
  contact.appendChild(phone);
  contact.appendChild(address);

  return content;
};

export default Contact;