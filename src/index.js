import { home } from './home.js'
import { menu } from './menu.js'
import { aboutus } from './aboutus.js'

import './style.css'

(function buildPage() {
    const buttons = {
        home: document.getElementById('home'),
        menu: document.getElementById('menu'),
        about: document.getElementById('about')
    };

    const content = document.getElementById('content');

    const clearContent = () => {
        while (content.lastElementChild) {
            content.removeChild(content.lastElementChild);
        }
    };
    const setbgclass = (clss = null) => {
        content.classList.remove('home-bg', 'menu-bg');
        if (clss) {
            content.classList.add(clss);
        }
    };

    buttons.home.onclick = () => {
        clearContent();
        setbgclass('home-bg');
        home();
    };

    buttons.menu.onclick = () => {
        clearContent();
        setbgclass('menu-bg');
        menu();
    };

    buttons.about.onclick = () => {
        clearContent();
        content.classList.remove('home-bg', 'menu-bg')
        aboutus();
    };

    home();
})();