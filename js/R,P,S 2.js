let playGame = confirm("Shall We Play Rock, Paper, Scissors? ");
if (playGame){
    while(playGame){
        const playerChoice = prompt("Please enter Rock, Paper, or Scissors!");
        if (playerChoice || playerChoice === ""){
            const player1 = playerChoice.trim().toLowerCase();
            if (player1 === "rock" 
            || player1 === "paper" 
            || player1 === "scissors"){
                const computerChoice = Math.floor(Math.random() * 3 + 1);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice]
                const result =
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
                playGame = confirm("Play Again?")
                if (!playGame) alert("Thank you for Playing!");
                continue;
            } else{
                alert("Please enter only Rock, Paper, or Scissors!");
                continue;
            }
        } else{
            alert("I guess you changed your Mind. Maybe next time!");
            break;
        }
    }
} else{
    alert("Ok, maybe next time!");
}