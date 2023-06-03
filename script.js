'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No number !');
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
   if (score > 1) { displayMessage(guess > secretNumber ? 'To high!':
    'To low');
    score--;
    document.querySelector('.score').textContent = score;
  }
    else {
      
      displayMessage('You lost! Try again.');
      document.body.style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
 
  //Correct
  else {
    
    displayMessage("That's correct!");
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});
//Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
 
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
