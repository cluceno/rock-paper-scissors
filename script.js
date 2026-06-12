

const choice = document.querySelector(".choices");
const roundResult = document.querySelector("#roundResult");
const runningScore = document.querySelector("#runningScore");
const finalScore = document.querySelector("#finalScore");
const reset = document.querySelector("#reset");

let humanScore = 0;
let computerScore = 0; 

choice.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        handleRound(e.target.dataset.choice);
    }
});

reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    runningScore.textContent = "";
    finalScore.textContent = "";
    reset.style.display = "none"; 
})

function handleRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    roundResult.textContent = result;
    runningScore.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        finalScore.textContent = "Game Over! You win!";
        reset.style.display = "block";
    } else if (computerScore === 5) {
        finalScore.textContent = "Game over! Computer wins!";
        reset.style.display = "block";
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
    if (humanChoice === computerChoice) {
        return `It's a tie!`;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;    
            return `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`;
    }

    computerScore++;
    return `You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`;
}
