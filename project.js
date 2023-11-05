let gameWins = 0;
let gameLosses = 0;
let gameTies = 0;

let rounds = parseInt(prompt("How many rounds do you want to play?"));

for (let i = 0; i < rounds; i++) {
    let userChoice = prompt("Do you pick rock, paper or scissors? [enter r, p, or s]");
    let computerChoice = Math.floor(Math.random() * 3);

    if (userChoice === 'r' && computerChoice === 2) {
        gameWins++;
        alert("You win!");
    } else if (userChoice === 'p' && computerChoice === 1) {
        gameWins++;
        alert("You win!");
    }  else if (userChoice === 's' && computerChoice === 0) {
        gameWins++;
        alert("You win!");
    } else if (computerChoice === 0 && userChoice === 'r') {
        gameLosses++;
        alert("You lose!");
    } else if (computerChoice === 1 && userChoice === 's') {
        gameLosses++;
        alert("You lose!");
    } else if (computerChoice === 2 && userChoice === 'p') {
        gameLosses++;
        alert("You lose!");
    } else {
        gameTies++;
        alert("It's a tie!");
    }
}

alert(`Wins: ${gameWins}, Losses: ${gameLosses}, Ties: ${gameTies}`);