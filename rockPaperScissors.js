console.log("hi");

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
const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();

  console.log(`You threw ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
