function getComputerChoice(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}
var humanScore, computerScore;
computerScore = humanScore = 0;
function playGame(){
    function playRound(humanChoice, computerChoice){
        results = {
            "rock": {"rock": "tie", "paper": "lose", "scissors": "win"},
            "paper": {"rock": "win", "paper": "tie", "scissors": "lose"},
            "scissors": {"rock": "lose", "paper": "win", "scissors": "tie"}
        }
        result = results[humanChoice.toLowerCase()][computerChoice.toLowerCase()];
        result == "win" ? humanScore++ : result == "lose" ? computerScore++ : null;
        return result;
    }
    for(var i = 0; i<5; i++){
        humanChoice = prompt("Rock, paper, or scissors?");
        computerChoice = getComputerChoice();
        console.log("You chose " + humanChoice + " and the computer chose " + computerChoice);
        console.log("You " + playRound(humanChoice, computerChoice) + "!");
    }
    console.log("The final score is " + humanScore + " to " + computerScore + ".")
}
playGame()