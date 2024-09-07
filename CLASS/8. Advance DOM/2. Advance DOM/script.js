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

// //Advance DOM MANIPULATION
// // class - 188 Styles and Attributes

// //Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'beutiful picture';

// // Non-Standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// //opposite of getAttribute() is setAttribute
// logo.setAttribute('company', 'Bankist');
// // setAttribute("attribute name", "value name")

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data Attributes
// console.log(logo.dataset.versionNumber); //data-version-number

// // Classes
// logo.classList.add('a', 'b', 'c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c'); //not includes

// // Don't use
// //cause its overright the all class name
// // logo.className = 'Apurba';

////START PROJECT////

// 1. Smooth Scrolling features//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('Curren Scroll (x/y): ', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport: ',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // // Scrolling
  // // window.scrollTo(
  // //   s1coords.left + window.pageXOffset,
  // //   s1coords.top + window.pageYOffset
  // // );

  // // Old skool technique
  // // window.scrollTo({
  // //   left: s1coords.left + window.pageXOffset,
  // //   top: s1coords.top + window.pageYOffset,
  // //   behavior: 'smooth',
  // // });

  // New method to scrooll smooth
  section1.scrollIntoView({ behavior: 'smooth' });
});


/// 190. Types of events and event handlers ///
const h1 = document.querySelector('h1');

// Advance - removeEventListener/
const alertH1 = function (e) {
  alert('You are in!!');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//Old skool method, better is addEventListner
// h1.onmouseenter = function (e) {
//   alert('Oops you out side!!');
// };

