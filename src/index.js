import injectFooter from './js/footer';
import injectNavbar from './js/navbar';
import renderHome from './js/home';
import renderMenu from './js/menu';
import renderContact from './js/contact';

const navbar = document.getElementById('navbar');
const content = document.getElementById('container-content');
const footer = document.getElementById('footer');

injectFooter(footer);
injectNavbar(navbar);
renderHome(content);

document.getElementById('tab-home').addEventListener('click', () => {
  if (document.title !== 'Home') {
    renderHome(content);
  }
});

document.getElementById('tab-menu').addEventListener('click', () => {
  if (document.title !== 'Menu') {
    renderMenu(content);
  }
});

document.getElementById('tab-contact').addEventListener('click', () => {
  if (document.title !== 'Contact') {
    renderContact(content);
  }
});
