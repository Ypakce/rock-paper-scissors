const game_choises = ["Rock", "Paper", "Scissors"];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    return game_choises[num];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);

    if(playerSelection == computerSelection){
        return "Tie!";
    }
    else if(playerSelection == "Rock"){
        if(computerSelection == "Paper"){
            return "You lose! Paper beats Rock";
        }
        else if(computerSelection == "Scissors"){
            return "You win! Rock beats Scissors";
        }
    }
    else if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            return "You win! Paper beats Rock";
        }
        else if(computerSelection == "Scissors"){
            return "You lose! Scissors beats Paper";
        }
    }
    else if(playerSelection == "Scissors"){
        if(computerSelection == "Rock"){
            return "You lose! Rock beats Scissors";
        }
        else if(computerSelection == "Paper"){
            return "You win! Scissors beats Paper";
        }
    }
    else{
        return "Invalid choice";
    }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;

    for(let i=1; i<=5; i++){
        let playerChoice = prompt("What is your choice: " + game_choises);
        let computerChoice = getComputerChoice();
        let round_result = playRound(playerChoice, computerChoice);

        console.log(round_result);

        if((round_result == "You win! Rock beats Scissors") || (round_result == "You win! Paper beats Rock") || (round_result == "You win! Scissors beats Paper")){
            playerCount++;
        }
        else if((round_result == "You lose! Paper beats Rock") || (round_result == "You lose! Scissors beats Paper") || (round_result == "You lose! Rock beats Scissors")){
            computerCount++;
        }

        console.log("Player: " + playerCount + "\t Computer: " + computerCount);
    }

    if(playerCount < computerCount){
        alert(`You Lost! Player: ${playerCount} Computer: ${computerCount}`);
    }
    else if(playerCount > computerCount){
        alert(`You Won! Player: ${playerCount} Computer: ${computerCount}`);
    }
    else{
        alert(`Tie! Player: ${playerCount} Computer: ${computerCount}`);
    }
}

game();
