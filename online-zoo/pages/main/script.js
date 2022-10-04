// Burger меню

const btnBurger = document.querySelector('.header__burger');
const burger = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');

btnBurger.addEventListener('click', () => {
    burger.classList.add('header__nav_active');
    overlay.classList.add('overlay_active');
})
overlay.addEventListener('click', () => {
    burger.classList.remove('header__nav_active');
    overlay.classList.remove('overlay_active');
})
close.addEventListener('click', () => {
    burger.classList.remove('header__nav_active');
    overlay.classList.remove('overlay_active');
})

// Слайдер в блоке Testimonials

const input = document.querySelector('.input-range');
const cardsBlock = document.querySelector('.testimonials__cards');
cardsBlock.style.marginLeft = 0;
input.addEventListener('input', () => {
    let target = input.value * 25.6
    if (window.innerWidth < 1600) {
        target = input.value * 34.2;
    }
    cardsBlock.style.marginLeft = -target + '%';
})

// Попап при нажатии на отзыв в блоке Testimonials

const card = document.querySelectorAll('.testimonials__card');
const cardText = document.querySelectorAll('.testimonials__text');
const cardBlock = document.querySelector('.testimonials__card_block');
const close2 = document.querySelector('.close-2');
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        cardBlock.classList.toggle('testimonials__card_block-active');
        card[i].classList.toggle('testimonials__card_active');
        overlay.classList.toggle('overlay_active');
        cardText[i].classList.toggle('testimonials__text_active');
    })
    overlay.addEventListener('click', () => {
        cardBlock.classList.remove('testimonials__card_block-active')
        overlay.classList.remove('overlay_active');
        card[i].classList.remove('testimonials__card_active');
        cardText[i].classList.remove('testimonials__text_active');
    })
    close2.addEventListener('click', () => {
        cardBlock.classList.remove('testimonials__card_block-active')
        overlay.classList.remove('overlay_active');
        card[i].classList.remove('testimonials__card_active');
        cardText[i].classList.remove('testimonials__text_active');
    })
}

//Карусель в блоке Pets

let viewport = document.querySelector('.pets__wrapper').offsetWidth;
let block = document.querySelector('.pets__wrapper');
let btnNext = document.querySelector('.pets__arrow-right');
let btnPrev = document.querySelector('.pets__arrow-left');
let slides = document.querySelectorAll('.table');
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slides[i].innerHTMl = '';
  [...slides[i].children].sort(() => Math.random() - 0.5).forEach(v => slides[i].append(v));
  slider[i] = slides[i];
  slides[i].remove();
}
let step = 0;
let offset = 0;

function drow() {
  let ul = document.createElement('ul');

  ul = slider[slider.length-1];
  ul.classList.add('table');
  ul.style.left = -viewport + 'px';
  document.querySelector('.pets__wrapper').appendChild(ul); 
  
  ul = slider[step];
  ul.classList.add('table');
  ul.style.left = offset * viewport + 'px';
  document.querySelector('.pets__wrapper').appendChild(ul);

  ul = slider[step+1];
  ul.classList.add('table');
  ul.style.left = offset * viewport + viewport + 'px';
  document.querySelector('.pets__wrapper').appendChild(ul); 

  offset = 1;
}

function drowL() {
  if (step == (slider.length - 1)) {
    step = 1;
  } else {
    if (step == (slider.length - 2)) {
      step = 0;
    } else {
      step = (step + 2);
    }
  }
  let ul = document.createElement('ul');
  ul = slider[step];
  ul.classList.add('table');
  ul.style.left = offset * viewport + 'px';
  document.querySelector('.pets__wrapper').appendChild(ul); 
    
  if (step == 0) {
    step = (slider.length - 1);
  } else {
    step = (step - 1);
  }

  offset = 1;

  ul.innerHTMl = '';
  [...ul.children].sort(() => Math.random() - 0.5).forEach(v => ul.append(v));
}
function left() {
  btnNext.removeEventListener('click', left);

  let slider2 = document.querySelectorAll('.table');
  let offset2 = -1;
  for (let i = 0; i < slider2.length; i++) {
    slider2[i].style.left = offset2 * viewport - viewport + 'px';
    offset2++;
  }
  setTimeout(function() {
    slider2[0].remove();
    drowL();
    btnNext.addEventListener('click', left)
  }, 500);
  
}

function drowR() {
  if (step == 0) {
    step = (slider.length - 2);
  } else {
    if (step == 1) {
      step = (slider.length  -1);
    } else {
      step = (step - 2);
    }
  }
  let offset = -1;
  let ul = document.createElement('ul');
  ul = slider[step];
  ul.classList.add('table');
  ul.style.left = offset * viewport + 'px';

  document.querySelector('.pets__wrapper').insertBefore(ul, block.firstElementChild);

  if (step == (slider.length-1)) {
      step = 0;
   } else {
     step = (step + 1);
   }
  offset = 1;

  ul.innerHTMl = '';
  [...ul.children].sort(() => Math.random() - 0.5).forEach(v => ul.append(v));
};
function right() {
  btnPrev.removeEventListener('click', right);
  
  let slider2 = document.querySelectorAll('.table');
  let offset2 = (slider2.length - 1);
 
  for (let i = (slider2.length-1); i >= 0; i--) {
    slider2[i].style.left = offset2 * viewport + 'px';
    offset2 --;
  }
  setTimeout(function() {
    slider2[(slider2.length-1)].remove();
    drowR();
    btnPrev.addEventListener('click', right);
  }, 500);
}

drow();
step = 0;

btnNext.addEventListener('click', left);
btnPrev.addEventListener('click', right);