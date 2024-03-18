'use strict';
/*document.querySelector('.message').textContent = '🥇 correct number';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 45;
// document.querySelector('.guess').value
document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20; //state variable
let highscore = 0; //state variable

document.querySelector('.check').addEventListener('click', function () {
  //handeling event
  const guess = Number(document.querySelector('.guess').value);
  // document.querySelector('.number').textContent = guess;
  // console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number🙏!';
  } else if (guess === secretNumber) {
    //when player wins
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Corrrect number🎊';
    document.querySelector('body').style.backgroundColor = '#16CE7B';
    document.querySelector('.number').style.width = '8rem';

    //NORMAL FOR LOOP:
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
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose!💔';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose!💔';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '6rem';
  document.body.style.backgroundColor = '#f4c431';
  document.querySelector('.guess').value = '';
  document.querySelectorAll('.btn').forEach(element => {
    element.style.backgroundColor = '#f4c431';
  });
});
