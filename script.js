'use strict';

// Secret number generator
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// Score update
let score = 20;

// DOM selectors
const message = document.querySelector(".message");
const scoreMessage = document.querySelector('.score');
const highscoreMessage = document.querySelector('.highscore');

// Event handler to retrieve the number for guess
document.querySelector('.check').addEventListener("click", () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        message.textContent = "⛔ Please choose a number! ⛔"
    } else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!'
        highscoreMessage.textContent = score
    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = 'Too low! Guess higher!'
            score--;
            scoreMessage.textContent = score;
        } else {
            message.textContent = 'You lost the game! 💥'
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
			message.textContent = "Too high! Guess lower!"
			score--
			scoreMessage.textContent = score
		} else {
            message.textContent = "You lost the game! 💥"
            scoreMessage.textContent = 0;
		}
    }
});
