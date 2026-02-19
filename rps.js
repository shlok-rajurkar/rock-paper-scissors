function main() {

    let humanScore = 0;
    let computerScore = 0;

    let scoreArray = [humanScore, computerScore];

    let buttonContainer = document.querySelector("#button-container");
    
    buttonContainer.addEventListener("click", (event) => {
        let target = event.target;
        console.log(target);
        let humanChoice = "";
        switch(target.id) {
            case "rock":
                humanChoice = "rock";
                break;
            case "paper":
                humanChoice = "paper";
                break;
            case "scissors":
                humanChoice = "scissors";
                break;
        }
        let scoreChange = judgeRoundAndReturnScoreChange(humanChoice, getComputerChoice());
    })
}



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
    return (!(validInputs.includes(input)) ? 
        new ReferenceError("Invalid input") : input
    );
}


function judgeRoundAndReturnScoreChange(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log("You chose " + humanChoice + ".");
    if (humanChoice === computerChoice) {
        console.log("Computer chose " + computerChoice + ". Tie");
        return [0, 0];
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer chose paper. Computer wins.");
            return [0, 1];
        } else {
            console.log("Computer chose scissors. You win!");
            return [1, 0];
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Computer chose rock. You win!");
            return [1, 0];
        } else {
            console.log("Computer chose scissors. Computer wins.");
            return [0, 1];
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Computer chose rock. Computer wins.");
            return [0, 1];
        } else {
            console.log("Computer chose paper. You win!");
            return [1, 0];
        }
    }   
}


function playGame() {
    console.log("The final score is Computer: " + scoreArray[0] + 
        ", Human: " + scoreArray[1] + ".")
    if (scoreArray[0] > scoreArray[1]) {
        console.log("Computer wins");
    } else {
        console.log("You win!");
    }
}


main();