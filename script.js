
/* Project objectives: 
1. Create a function called getComputerChoice that will randomly return "rock", "paper", or "scissors".
2. Create a function called getHumanChoice that takes a user choice and returns it. 
3. Create variables, humanScore and computerScore, in the global scope to keep track of score. 
4. Write logic to play a single round with a function playRound and increment score based on round winner. 
5. Write logic to play the entire game of 5 rounds with a function called play Round. */


// Create function called getComputerChoice that randomy returns "rock", "paper", or "scissors".

function getComputerChoice() {
    let x = Math.random() * 100

    if (x < 33) {
        return "rock"
    } else if (x >= 33 && x < 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Declare score variables

let humanScore = 0;
let computerScore = 0;

// Write logic to play single round with function playRound

function playRound(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors."
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock."
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper."
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock."
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper."
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors."
    } else {
        return "It's a tie!"
    }
}

const choice = document.querySelector(".choices");
let roundResult = document.querySelector("#roundResult");
let runningScore = document.querySelector("#runningScore");
let finalScore = document.querySelector("#finalScore");

choice.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        if (humanScore === 5 || computerScore === 5) return;
        
        const humanChoice = e.target.dataset.choice;
        const result = playRound(humanChoice,getComputerChoice());
        roundResult.textContent = result;
        runningScore.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            finalScore.textContent = `Game Over. Final score: You: ${humanScore}, Computer: ${computerScore}`;
        };
    }});
    