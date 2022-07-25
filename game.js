const getComputerChoice = () => {
    if (Math.floor(Math.random()*3) === 0) {
        return 'rock';
    } 
    else if (Math.floor(Math.random()*3) === 1) {
        return 'paper';
    } 
    else {
        return 'scissors';
    }
}
function playRound(playerSelection, computerSelection){
    if (computerSelection === "paper" && playerSelection == "rock"){
        return "You Lose! paper beats Rock";
    }
    if (computerSelection === "scissors" && playerSelection == "paper"){
        return "You Lose! scissors beats paper";
    }
    if (computerSelection === "rock" && playerSelection == "scissors"){
        return "You Lose! rock beats scissors";
    }
    else if (computerSelection === "rock" && playerSelection == "paper"){
        return "You win! paper beats Rock";
    }
    else if (computerSelection === "scissors" && playerSelection == "rock"){
        return "You win! Rock beats scissors";
    }
    else if (computerSelection === "paper" && playerSelection == "scissors"){
        return "You Lose! scissors beats paper";
    }
    else{
        return "Something worng! Try again.";
    }
    }
    
    function game(){
        for(let i =0; i<5; i++){
            let playerSelection = window.prompt("Type your choice? ");
            let computerSelection = getComputerChoice();
            playRound();
            console.log(playRound(playerSelection, computerSelection));
        }
    }
    
    game();
    
