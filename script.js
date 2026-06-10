

const choice = document.querySelector(".choices");
const roundResult = document.querySelector("#roundResult");
const runningScore = document.querySelector("#runningScore");
const finalScore = document.querySelector("#finalScore");

let humanScore = 0;
let computerScore = 0; 

choice.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        handleRound(e.target.dataset.choice);
    }
});

function handleRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    roundResult.textContent = result;
    runningScore.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        finalScore.textContent = "Game Over! You win!";
    } else if (computerScore === 5) {
        finalScore.textContent = "Game over! Computer wins!";
    }
}
    
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;    
            return `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`;

    } else if ((humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "rock" && computerChoice === "paper")) {
            computerScore++;
            return `You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`;

    } else if (humanChoice === computerChoice) {
        return `It's a tie!`;
    }
}
