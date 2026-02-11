function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num === 0) {
        return "rock"
    } else if (num === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


function getHumanChoice() {
    const validInputs = ["rock", "paper", "scissors"]
    let input = prompt("Pick one of [rock/paper/scissors]");
    return !(validInputs.includes(input)) ? new ReferenceError("Invalid input") : input;
}

let computerScore = 0;
let humanScore = 0;

let scoreArray = [computerScore, humanScore];

function judgeRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log("You chose " + humanChoice + ".");
    if (humanChoice === computerChoice) {
        console.log("Computer chose " + computerChoice + ". Tie");
        return [0, 0];
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer chose paper. Computer wins.");
            return [1, 0];
        } else {
            console.log("Computer chose scissors. You win!");
            return [0, 1];
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Computer chose rock. You win!");
            return [0, 1];
        } else {
            console.log("Computer chose scissors. Computer wins.");
            return [1, 0];
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Computer chose rock. Computer wins.");
            return [1, 0];
        } else {
            console.log("Computer chose paper. You win!");
            return [0, 1];
        }
    }   
}

function playRound(humanChoice, computerChoice) {
    roundScore = judgeRound(humanChoice, computerChoice);
    scoreArray[0] = scoreArray[0] + roundScore[0];
    scoreArray[1] = scoreArray[1] + roundScore[1];
}

playRound("rock", "paper");
playRound("paper", "rock");
playRound("scissors", "rock");
playRound("rock", "scissors");
playRound("paper", "paper");
playRound("rock", "rock");
playRound("scissors", "scissors")
