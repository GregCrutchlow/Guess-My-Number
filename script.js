'use strict';

// Secret number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);


// Score update
let score = 20;

// Highscore
let highscore = 0;

// DOM selectors
const message = document.querySelector(".message");
const scoreMessage = document.querySelector('.score');
const highscoreMessage = document.querySelector('.highscore');
const body = document.querySelector('body');
const secretNumberDisplay = document.querySelector(".number");
const guess = document.querySelector('.guess')

// Event handler to retrieve the number for guess
document.querySelector('.check').addEventListener("click", () => {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        message.textContent = "⛔ Please choose a number! ⛔" 
    
    // When player wins    
    } else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!'
        document.querySelector(".number").textContent = secretNumber;
        body.style.backgroundColor = "#60b347";
        secretNumberDisplay.style.fontSize = '8rem';
        secretNumberDisplay.style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            highscoreMessage.textContent = score;
        }
    // When guess is too low    
    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = 'Too low! Guess higher!'
            score--;
            scoreMessage.textContent = score;
        } else {
            message.textContent = 'You lost the game! 💥'
            body.style.backgroundColor = 'red'
        }

    // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
			message.textContent = "Too high! Guess lower!"
			score--
			scoreMessage.textContent = score
		} else {
            message.textContent = "You lost the game! 💥"
            scoreMessage.textContent = 0;
            body.style.backgroundColor = "red"
		}
    }
});

// Event handler for "Again!" button
    // Reset secret number field, guess input field and reset styling
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    scoreMessage.textContent = score
    message.textContent = 'Start guessing...'
    body.style.backgroundColor = '#222';
    secretNumberDisplay.style.fontSize = '6rem';
    secretNumberDisplay.style.width = '15rem';
    secretNumberDisplay.textContent = '?'
    guess.value = '';
})