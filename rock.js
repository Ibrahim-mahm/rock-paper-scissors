console.log("hello welcome to the game");




function getComputerChoices() {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoices());



//#############################################################//

function getHumanChoices() {
while (true) {
    const userInput = prompt ("enter your choice : rock , paper or scissors").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("invalid choice ! ");
    }
}
};
console.log(getHumanChoices());

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Main game logic
const userChoice = getHumanChoices();
const computerChoice = getComputerChoices();
console.log("User chose:", userChoice);
console.log("Computer chose:", computerChoice);

const result = determineWinner(userChoice, computerChoice);
console.log(result);
alert(result);




function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`);
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        console.log(`User chose: ${userChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        const result = playRound(userChoice, computerChoice);

        if (result === "user") {
            userScore++;
            console.log("You win this round!");
        } else if (result === "computer") {
            computerScore++;
            console.log("Computer wins this round!");
        } else {
            ties++;
            console.log("This round is a tie!");
        }

        console.log(`Score: User ${userScore} - Computer ${computerScore} - Ties ${ties}`);
    }

    // Determine the overall winner
    if (userScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > userScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
