"use strict";

const btn = document.querySelector(".btn");
const outputText = document.querySelector('.outputtext');

const number = Math.trunc(Math.random() * 50) + 1;

btn.addEventListener('click', function () {
  const input = parseInt(document.querySelector('.screen').value);
  
  if (input === number) {
    outputText.textContent = `Hurray! You guessed correctly! Guess is ${number}`;
  } else if (input > number) {
    outputText.textContent = "You guessed too high";
  } else if (input < number) {
    outputText.textContent = "You guessed too low";
  }
});
