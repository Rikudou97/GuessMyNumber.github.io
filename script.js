'use strict';

//manipulatin DOM

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

//Click events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 7;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//document.querySelector('.number').textContent = secretNumber;
//CHECK BUTTON!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //No input
  if (!guess) {
    displayMessage('No number!');
    //PLayer wins
  } else if (guess === secretNumber) {
    displayMessage('CORRECT!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#008000';

    document.querySelector('.number').style.width = '30rem';
    //HIGHSCORE!
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Number too low!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 7;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
