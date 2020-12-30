// Rock,Paper, or Scissors 1) Get the user’s choice. 2) Get the computer’s choice. 3) Compare the two choices and determine a winner. 3) Start the program and display the results.
const getUserChoice= userInput => {
  userInput = userInput.toLowerCase(); //make all inputs lowercase for Rock or rock 
  //make sure that the user typed a valid choice by using || operator if either valid input is true
  if (userInput=== 'rock' || userInput==='paper' || userInput === 'scissors' || userInput==='bomb') { //add a cheat code that bomb always win
    return userInput;
  } else {
    console.log ('Error!');
  }
}
// test function: console.log(getUserChoice('paper')); 
const getComputerChoice = () => {
  const randomNumber= Math.floor(Math.random() * 3); //computer chooses randomly from 0-2
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}
} //Test function
/*console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());*/
//determine a winner The function compares the two choices played and then return if the human player won, lost, or tied.
const determineWinner= (userChoice,computerChoice) => {
  if (userChoice === 'bomb') {
    return "You Won!"
  }
  if (userChoice === computerChoice){ //if its a tie
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {  //if its not a tie break down all the scenarios
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won';
    }
  }
  if (userChoice ==='paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}; //Test function 
/*console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));*/
const playGame = () => {
  const userChoice= getUserChoice ('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
