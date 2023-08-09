console.log("hi");

//We first declare a user input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

//Then, we declare computer choice randomized
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
    case 3:
      return "bomb";
  }
};

//The below code are the choices of the player and the computer with argumets
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "A tie!!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost! LOSER";
    } else {
      return "You freaking Wonnn";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost! LOSER";
    } else {
      return "You freaking Wonnn";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost! LOSER";
    } else {
      return "You freaking Wonnn";
    }
  }
  if (userChoice === "bomb") {
    return "bombastic!! You freaking Wonnn";
  }
};

//The function below if for the game play
const playGame = () => {
  //You can choose which ever input in the fuction call getUserChoice and see the results
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();

  console.log(`You threw ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

//function call
playGame();
