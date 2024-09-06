'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Advance DOM
// class - 188 Styles and Attributes

//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'beutiful picture';

// Non-Standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
//opposite of getAttribute() is setAttribute
logo.setAttribute('company', 'Bankist');
// setAttribute("attribute name", "value name")

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber); //data-version-number

// Classes
logo.classList.add('a', 'b', 'c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

// Don't use
//cause its overright the all class name
// logo.className = 'Apurba';
