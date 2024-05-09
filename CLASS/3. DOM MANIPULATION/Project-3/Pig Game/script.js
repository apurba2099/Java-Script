'use strict';
// Selecting element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const rules = document.querySelector('.rules');

//modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const winningMsg = document.querySelector('.player--wins');

let currentScore, player, activePlayer, scores;

// Initial condition
const init = function () {
  currentScore = 0;
  player = true;
  activePlayer = 0;
  scores = [0, 0];

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceEl.classList.add('hidden');
  rules.classList.remove('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

//Switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Confetti
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

// Rolling Dice Functionality
const buttRoll = function () {
  if (player) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // 2. Display dice
    rules.classList.add('hidden');
    diceEl.classList.remove('hidden');
    diceEl.src = `./dice/dice-${dice}.png`;

    // //3. Check for rolled 1
    if (dice != 1) {
      //Add dice to current score
      currentScore += dice;
      // current0.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;

      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
};
btnRoll.addEventListener('click', buttRoll);

const butHold = function () {
  if (player) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    //   scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      //Finish Game
      player = false;
      winningMsg.textContent = activePlayer + 1;
      diceEl.classList.add('hidden');

      jsConfetti.addConfetti();

      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch Player
      switchPlayer();
    }
  }
};

btnHold.addEventListener('click', butHold);
btnNew.addEventListener('click', init);

const closeModal = function () {
  init();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'r') {
    buttRoll();
  } else if (e.key === ' ') {
    butHold();
  }
});
