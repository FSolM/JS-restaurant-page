import injectFooter from './js/footer';
import injectNavbar from './js/navbar';
import renderHome from './js/home';

const navbar = document.getElementById('navbar');
const content = document.getElementById('container-content');
const footer = document.getElementById('footer');

injectFooter(footer);
injectNavbar(navbar);
renderHome(content);
