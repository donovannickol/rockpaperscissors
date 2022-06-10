function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    if(playerChoice == "rock"){
        if(computerSelection == "rock"){
            return "Tie, both rock.";
        }
        else if(computerSelection == "paper"){
            return "You lose, paper beats rock.";
        }
        else if(computerSelection == "scissors"){
            return "You win, rock beats scissors.";
        }
    }
    if(playerChoice == "paper"){
        if(computerSelection == "rock"){
            return "You win, paper beats rock.";
        }
        else if(computerSelection == "paper"){
            return "Tie, both paper.";
        }
        else if(computerSelection == "scissors"){
            return "You lose scissors beats paper.";
        }
    }
    if(playerChoice == "scissors"){
        if(computerSelection == "paper"){
            return "You win, scissors beats paper";
        }
        else if(computerSelection == "rock"){
            return "You lose, rock beats scissors.";
        }
        else if(computerSelection == "scissors"){
            return "Tie, both scissors";
        }
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for(i = 0; i < 5; i++){
        const playerSelection = prompt("Choose Rock, Paper, or Scissors!");
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.startsWith("You win")){
            playerPoints++;
        }
        else if(result.startsWith("You lose")){
            computerPoints++;
        }
    }
    console.log(`You scored ${playerPoints} points and the computer scored ${computerPoints} points!`);
    if(playerPoints > computerPoints){
        console.log("Congratulations you win!");
    }
    else if(computerPoints > playerPoints){
        console.log("Sorry, you lose!");
    }
    else{
        console.log("It's a tie!");
    }
}