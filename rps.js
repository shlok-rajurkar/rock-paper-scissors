function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    return (
        num === 0 ? "r"
        : num === 1 ? "p"
        :"s"
    );
}

console.log(getComputerChoice());

function getHumanChoice() {
    const validInputs = ["r", "p", "s"]
    let input = prompt("Pick one of [r/p/s]");
    return !(validInputs.includes(input)) ? new ReferenceError : input;
}

console.log(getHumanChoice());