// Burger меню

const btnBurger = document.querySelector('.header__burger');
const burger = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay')

btnBurger.addEventListener('click', () => {
    burger.classList.add('header__nav_active');
    overlay.classList.add('overlay_active');
})
overlay.addEventListener('click', () => {
    burger.classList.remove('header__nav_active');
    overlay.classList.remove('overlay_active');
})