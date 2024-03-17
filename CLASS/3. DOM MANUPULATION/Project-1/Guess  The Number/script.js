'use strict';
/*document.querySelector('.message').textContent = '🥇 correct number';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 45;
// document.querySelector('.guess').value
document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = guess;
   
});
