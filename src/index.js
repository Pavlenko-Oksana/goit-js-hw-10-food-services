import menuCards from './menu.json';
import menuCardTemplate from './templates/menu-card.hbs'
import './styles.css';
import onChangeTheme from './js/themes.js';
import addClassTheme from './js/themes.js';
import checkedTheme from './js/themes';


const menuContainer = document.querySelector(".js-menu");
const menuCard = createMenuCardTemplate(menuCards);
menuContainer.insertAdjacentHTML('beforeend', menuCard);

function createMenuCardTemplate(menuCards) {
    return menuCardTemplate(menuCards);
}



