'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 42;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // document.querySelector('.number').textContent = guess;
  // console.log(guess, typeof guess);

  if (!guess) {
    //When there is no input
    // document.querySelector('.message').textContent = 'Please input a number 🙏';

    displayMessage('Please input a number 🙏');
  } else if (guess === secretNumber) {
    //When player wins
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#16ce7b';

    // document.querySelectorAll('.btn')[1].style.backgroundColor = '#16ce7b';

    // for (let i = 0; i < document.querySelectorAll('.btn').length; i++) {
    //   document.querySelectorAll('.btn')[i].style.backgroundColor = '#16ce7b';
    // }

    document.querySelectorAll('.btn').forEach(element => {
      element.style.backgroundColor = '#16ce7b';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    });

    document.querySelector('.number').style.width = '8rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🧨 You have lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   //When guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '🧨 You have lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   //When guess is too low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '🧨 You have lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Challenge 1
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#f4c431';

  document.querySelectorAll('.btn').forEach(element => {
    element.style.backgroundColor = '#f4c431';
  });

  document.querySelector('.number').style.width = '6rem';
});
