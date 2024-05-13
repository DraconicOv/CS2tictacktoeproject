function getComputerChoice(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}
var humanScore, computerScore;
computerScore = humanScore = 0;

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


