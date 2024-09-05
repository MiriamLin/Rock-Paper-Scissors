function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let input = parseInt(prompt("Input 0, 1, or 2 to play Rock Paper Scissors!"));
    while (isNaN(input) || (input != 0 && input != 1 && input !=2)){
        input = parseInt(prompt("Invalid input!"))
    }
    return input;
}

let humanScore;
let computerScore;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else if ((humanChoice == 0 && computerChoice == 1) || (humanChoice == 1 && computerChoice == 2) || (humanChoice == 2 && computerChoice ==0)) {
        computerScore ++;
        console.log("You lose!");
    }
    else {
        humanScore ++;
        console.log("You win!");
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win the game! Congratulation!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("The game is a tie!");
    }
    console.log(`Final score: ${humanScore} : ${computerScore}`)
}

playGame()