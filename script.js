'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!😁';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//the function below is an event handler called when the event happens

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess); //returns 'string' if Number function is not used

  if (!guess) {
    document.querySelector('.message').textContent = 'Invalid number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
  }
});
