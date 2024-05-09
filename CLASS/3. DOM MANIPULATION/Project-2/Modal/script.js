'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.open-modal');

// console.log(btnsOpenModal);

/*
for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', function () {
    // console.log('Button Clicked');
    modal.classList.remove('hidden'); // ('hidden', 'abc', 'mba')
    overlay.classList.remove('hidden');
    // modal.style.display = 'block';
  });
}

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling 'Esc' keydown Event
document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  // console.log(e);
  // console.log(e.key);

  //   if (e.key === 'Escape') {
  //     // console.log('Esc was pressed');
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }

  //Refactoring Code
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');
    closeModal();
  }
});
