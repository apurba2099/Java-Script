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

////////////////////////////////////////
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

///////////////////////////////////////
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
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Old skool technique
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //** New method to Scrooll smooth**
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////
////* 190. Types of events and event handlers *///
// const h1 = document.querySelector('h1');

// // Advance - removeEventListener/
// const alertH1 = function (e) {
//   alert('You are in!!');
// };
// h1.addEventListener('mouseenter', alertH1);

// // set a timing for 3 seconds
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//Old skool method, better is addEventListner
// h1.onmouseenter = function (e) {
//   alert('Oops you out side!!');
// };

///////////////////////////////
//** 192. Event Propagation and Bubbling concepts **//
// rgb (255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     // console.log(this);
//     console.log('LINKS', e.currentTarget);
//     // console.log('LINKS', e.target);

//     // **PROPAGATION CONCEPT: STOP PROPAGATION**
//     // e.stopPropagation();
//   },
//   // true
// );

// document.querySelector('.nav__links').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('CONTAINER', e.target);
//   },
//   // true
// );

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAVBAR', e.target);
//   },
//   // true
// );

///////////////////////////////
//** 193. Event Delegation: Implementing page Navigation **//

// Its normal nav__links are smooth scroll view
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('LINK');
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//** Its using Event Delegation Scroll View**
// **NOTE :
// 1. Add event listener to common parent element
// 2. Determine what element orignated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching Technique/strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//**  194.DOM TRAVERSING Concepts**

// const h1 = document.querySelector('h1');

// //Going downwards:  child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.previousSibling);

// // its also iterable
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   // if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// ** 195. Building a Tabbed Components (very important) **

const tabsBtn = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

// console.log(tabsBtn);
// console.log(tabsContainer)
// console.log(tabsContent)

// don't use it when 200 tabs ?? then it slow down the page, so we dont use it
// tabsBtn.forEach(t => t.addEventListener('click', () => console.log('TAB!')));

// use event delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  //Remove the active classes the both of content areas
  tabsBtn.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate the tab
  clicked.classList.add('operations__tab--active');

  //Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//** 196. Passing Arguments to events handlers **
// Menu fade animations navbar
const nav = document.querySelector('.nav');

// Refactoring this code
const handleOver = function (e, opacity) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//More advance techniuqe
// Passing "argument" into handler

nav.addEventListener('mouseover', handleOver.bind(0.5));

nav.addEventListener('mouseout', handleOver.bind(1));

// // These are the call back function
// nav.addEventListener('mouseover', function (e) {
//   handleOver(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleOver(e, 1);
// });

// Two methods but we always use DRY Code
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;

//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');

//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;

//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');

//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

//**  197. Implementing a STICKY navigation: The scroll event **
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.add('sticky');
});

// 198. A better way: The Intersection Observer API
//STICKY Navigation: Intersection Obeserver API

// const observeCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const observerOptions = {
//   root: null,
//   threshold: [0, 1, 0.2],
// };
// const observer = new IntersectionObserver(observeCallback, observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
};

const headerobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerobserver.observe(header);
