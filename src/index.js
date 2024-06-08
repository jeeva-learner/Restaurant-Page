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

    const setbgclass = (clss=null)=>{
        if(clss == null){
            content.remove('home-bg', 'menu-bg')
        }
        content.className = clss;
    }

    buttons.home.onclick = () => {
        clearContent();
        home();
    };

    buttons.menu.onclick = () => {
        clearContent();
        menu();
    };

    buttons.about.onclick = () => {
        clearContent();
        aboutus();
    };

    home();
})();