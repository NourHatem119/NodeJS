let playGame = confirm("Shall We Play Rock, Paper, Scissors? ");
if (playGame){
    let playerChoice = prompt("Please enter Rock, Paper, or Scissors!");
    if (playerChoice){
        let player1 = playerChoice.trim().toLowerCase();
        if (player1 === "rock" 
        || player1 === "paper" 
        || player1 === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" 
            : computerChoice === 2 ? "paper"
            : "scissors";
            let result =
            player1 === computer
            ? "Tie Game!"
            : player1 === "rock" && computer === "paper"
            ? `Player1: ${player1}\nComputer: ${computer}\nComputer Wins!`
            : player1 === "paper" && computer === "scissors"
            ? `Player1: ${player1}\nComputer: ${computer}\nComputer Wins!`
            : player1 === "scissors" && computer === "rock"
            ? `Player1: ${player1}\nComputer: ${computer}\nComputer Wins!`
            : `Player1: ${player1}\nComputer: ${computer}\nPlayer1 Wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thank you for playing");
        } else{
            alert("Please enter only Rock, Paper, or Scissors!");
            location.reload();
        }
    } else{
        alert("I guess you changed your Mind. Maybe next time!");
    }
} else{
    alert("Ok, maybe next time!");
}