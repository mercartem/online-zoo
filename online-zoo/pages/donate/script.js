// Ограничение символов в input типа number

const input = document.querySelector('input[type=number]');
input.addEventListener('input', () => {
        if (input.value.length > 4) { input.value = input.value.substr(0, 4) }
    });

// Добавление интерактивности в прогресс-бар

const dot = document.querySelectorAll('.pay__circle');
const dotActive = document.querySelectorAll('.pay__dot');
const dollars = document.querySelectorAll('.pay__dollar');
for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click', () => {
        for (let i = 0; i < dot.length; i++) {
            dotActive[i].classList.remove('pay__dot_active');
            dollars[i].classList.remove('pay__dollar_active');
        }
        dotActive[i].classList.add('pay__dot_active');
        dollars[i].classList.add('pay__dollar_active');
    });
};

// Меняем активный класс по умолчанию при изменении ширины экрана

function getDotActive() {
    for (let i = 0; i < dot.length; i++) {
        dotActive[i].classList.remove('pay__dot_active');
        dollars[i].classList.remove('pay__dollar_active');
    }
    if (window.innerWidth < 1000) {
        dotActive[5].classList.add('pay__dot_active');
        dollars[5].classList.add('pay__dollar_active');
    } else {
        dotActive[2].classList.add('pay__dot_active');
        dollars[2].classList.add('pay__dollar_active');
    }
}
window.addEventListener('resize', getDotActive)

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