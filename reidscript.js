'use strict';

let playerOneScore = 0;
let playerTwoScore = 0;
let currentScore = 0;
let playerOneTurn = true;
let playerTwoTurn = false;
let diceRoll = 0;
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const dice = document.querySelector('.dice');

// let dice = [];

//ROLL DICE
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playerOneTurn === true) {
    dice.classList.remove('hidden');
    diceRoll = Math.trunc(Math.random() * 6) + 1;
    currentScore += diceRoll;
    document.querySelector('#current--0').textContent = currentScore;
    dice.src = `dice-${diceRoll}.png`;
    console.log(`the dice roll was ${diceRoll}`);
    console.log(currentScore);
    if (diceRoll === 1) {
      document.querySelector('#current--0').textContent = 0;
      dice.src = `dice-${diceRoll}.png`;
      playerTwoTurn = true;
      playerOneTurn = false;
      diceRoll = 0;
      playerOne.classList.remove('player--active');
      playerTwo.classList.add('player--active');

      currentScore = 0;
      alert(`You rolled a 1, it is now Player 2's turn`);
    }
    console.log(playerOneTurn, playerTwoTurn);
    console.log(`the score is ${playerOneScore}`);
  } else if (playerOneTurn === false) {
    dice.classList.remove('hidden');
    diceRoll = Math.trunc(Math.random() * 6) + 1;
    currentScore += diceRoll;
    document.querySelector('#current--1').textContent = currentScore;
    dice.src = `dice-${diceRoll}.png`;
    console.log(`the dice roll was ${diceRoll}`);
    console.log(currentScore);
    if (diceRoll === 1) {
      document.querySelector('#current--1').textContent = 0;
      dice.src = `dice-${diceRoll}.png`;
      playerTwoTurn = false;
      playerOneTurn = true;
      diceRoll = 0;
      playerOne.classList.add('player--active');
      playerTwo.classList.remove('player--active');
      currentScore = 0;
      alert(`You rolled a 1, it is now Player 1's turn`);
    }
    console.log(playerOneTurn, playerTwoTurn);
    console.log(`the score is ${playerTwoScore}`);
  }
});

//HOLD DICE
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playerOneTurn === true) {
    playerOneScore += currentScore;
    document.querySelector('#score--0').textContent = playerOneScore;
    playerOneTurn = false;
    playerTwoTurn = true;
    document.querySelector('#current--0').textContent = 0;
    diceRoll = 0;
    currentScore = 0;
    alert(`You held. It is now Player 2's turn!`);
    console.log(playerOneTurn, playerTwoTurn);
    playerOne.classList.remove('player--active');
    playerTwo.classList.add('player--active');
    dice.classList.add('hidden');
    if (playerOneScore >= 100) {
      alert('PLAYER ONE WINS! 🥳🎊🎉');
    } else if (playerTwoScore >= 100) {
      alert('PLAYER TWO WINS!🎉🎊🥳');
    }
  } else {
    playerTwoScore += currentScore;
    document.querySelector('#score--1').textContent = playerTwoScore;
    playerOneTurn = true;
    playerTwoTurn = false;
    document.querySelector('#current--1').textContent = 0;
    diceRoll = 0;
    currentScore = 0;
    alert(`You held. It is now Player 1's turn!`);
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
    console.log(playerOneTurn, playerTwoTurn);
    dice.classList.add('hidden');
    if (playerOneScore >= 100) {
      alert('PLAYER ONE WINS! 🥳🎊🎉');
    } else if (playerTwoScore >= 100) {
      alert('PLAYER TWO WINS!🎉🎊🥳');
    }
  }
});

//WIN CONDITIONALS
if (playerOneScore >= 100) {
  alert('PLAYER ONE WINS! 🥳🎊🎉');
} else if (playerTwoScore >= 100) {
  alert('PLAYER TWO WINS!🎉🎊🥳');
}

//RESET GAME
document.querySelector('.btn--new').addEventListener('click', function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  currentScore = 0;
  playerOneTurn = true;
  playerTwoTurn = false;
  diceRoll = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  alert('A new game has been made!');
});
