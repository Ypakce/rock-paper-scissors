const game_choises = ["Rock", "Paper", "Scissors"];

let playerCount = 0;
let computerCount = 0;

const res_text = document.querySelector(".result-text");
const player_res = document.querySelector(".player-result");
const comp_res = document.querySelector(".comp-result");
const rock_button = document.querySelector(".rock-button");
rock_button.addEventListener("click", e => {
    playRound("Rock");
    playGame();});
const paper_button = document.querySelector(".paper-button");
paper_button.addEventListener("click", e => {
    playRound("Paper");
    playGame();});
const scissors_button = document.querySelector(".scissors-button");
scissors_button.addEventListener("click", e => {
    playRound("Scissors");
    playGame();});


function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    return game_choises[num];
}

function playRound(playerSelection){
    let computerChoice = getComputerChoice();
    if(playerSelection == computerChoice){
        res_text.textContent = "Tie!";
    }
    else if(playerSelection == "Rock"){
        if(computerChoice == "Paper"){
            res_text.textContent = "You lose! Paper beats Rock";
            computerCount++;
        }
        else if(computerChoice == "Scissors"){
            res_text.textContent = "You win! Rock beats Scissors";
            playerCount++;
        }
    }
    else if(playerSelection == "Paper"){
        if(computerChoice == "Rock"){
            res_text.textContent = "You win! Paper beats Rock";
            playerCount++;
        }
        else if(computerChoice == "Scissors"){
            res_text.textContent = "You lose! Scissors beats Paper";
            computerCount++;
        }
    }
    else if(playerSelection == "Scissors"){
        if(computerChoice == "Rock"){
            res_text.textContent = "You lose! Rock beats Scissors";
            computerCount++;
        }
        else if(computerChoice == "Paper"){
            res_text.textContent = "You win! Scissors beats Paper";
            playerCount++;
        }
    }
    else{
        res_text.textContent = "Invalid choice";
    }
    player_res.textContent = playerCount;
    comp_res.textContent = computerCount;
}

function playGame(){
    if(computerCount == 5){
        res_text.textContent = "You Won the Game! Congrats";
        computerCount = 0;
        playerCount = 0;
        player_res.textContent = 0;
        comp_res.textContent = 0;
    }
    else if(playerCount == 5){
        res_text.textContent = "You Lost the game:/ Try Again";
        computerCount = 0;
        playerCount = 0;
        player_res.textContent = 0;
        comp_res.textContent = 0;
    }

}
