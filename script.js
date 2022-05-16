'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!😁';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//the function below is an event handler called when the event happens

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // Set new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // Restore message
  document.querySelector('.message').textContent = 'Start guessing...';

  // Reset score
  document.querySelector('.score').textContent = score;

  //Reset guess
  document.querySelector('.guess').value = '';

  // Reset original styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.cssText = 'width: 15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess); //returns 'string' if Number function is not used

  //Invalid entry
  if (!guess) {
    document.querySelector('.message').textContent = 'Invalid number!';

    //Win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it!';
    document.querySelector('.number').textContent = secretNumber;

    //styles must be written in strings
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.cssText =
      'width: 30rem; border: black solid 2px';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //Too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose! Try again.';
      document.querySelector('.score').textContent = 0;
    }

    //Too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose! Try again.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
