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