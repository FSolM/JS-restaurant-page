import injectFooter from './js/footer';
import injectNavbar from './js/navbar';
import renderHome from './js/home';
import renderMenu from './js/menu';
import renderContact from './js/contact';

const navbar = document.getElementById('navbar');
const content = document.getElementById('container-content');
const footer = document.getElementById('footer');

const clear = (target) => {
  target.innerHTML = '';
};

injectFooter(footer);
injectNavbar(navbar);
renderHome(content);

document.getElementById('tab-home').addEventListener('click', () => {
  if (document.title !== 'Home') {
    clear(content);
    renderHome(content);
  }
});

document.getElementById('tab-menu').addEventListener('click', () => {
  if (document.title !== 'Menu') {
    clear(content);
    renderMenu(content);
  }
});

document.getElementById('tab-contact').addEventListener('click', () => {
  if (document.title !== 'Contact') {
    clear(content);
    renderContact(content);
  }
});
