// The Odin Project - Rock Paper Scissors
// This version is played using prompts and the browser console, not a GUI.

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return 'rock';
  if (randomNumber === 1) return 'paper';
  return 'scissors';
}

function getHumanChoice() {
  const choice = prompt('Choose rock, paper, or scissors:');

  // Canceling a prompt ends the game instead of causing an error.
  if (choice === null) return null;
  return choice.trim().toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Choices are compared in lowercase so any capitalization works.
    const human = humanChoice.toLowerCase();

    if (human === computerChoice) {
      console.log(`It's a tie! You both chose ${human}.`);
    } else if (
      (human === 'rock' && computerChoice === 'scissors') ||
      (human === 'paper' && computerChoice === 'rock') ||
      (human === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      console.log(`You win! ${human} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${human}.`);
    }
  }

  console.log('ROCK PAPER SCISSORS - 5 ROUNDS');
  console.log('Enter your choices in the browser prompts.');

  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();

    if (humanChoice === null) {
      console.log('Game canceled. Refresh the page to play again.');
      return;
    }

    if (
      humanChoice !== 'rock' &&
      humanChoice !== 'paper' &&
      humanChoice !== 'scissors'
    ) {
      console.log('Invalid choice. Please refresh and use rock, paper, or scissors.');
      return;
    }

    const computerChoice = getComputerChoice();
    console.log(`Round ${round}:`);
    playRound(humanChoice, computerChoice);
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
  }

  console.log('FINAL RESULT');
  if (humanScore > computerScore) {
    console.log(`You won the game! ${humanScore} to ${computerScore}.`);
  } else if (computerScore > humanScore) {
    console.log(`Computer won the game! ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`The game is a tie! ${humanScore} to ${computerScore}.`);
  }
}

playGame();
