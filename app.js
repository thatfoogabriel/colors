const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const services = document.querySelector('#services-page');
    let scroll = window.scrollY;
    console.log(scroll);

    if (window.innerWidth > 960 && scroll < 600) {
        home.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scroll < 1400) {
        about.classList.add('highlight');
        home.classList.remove('highlight');
        services.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scroll < 2345) {
        services.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scroll < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMenu);