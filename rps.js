let playerScore=0;
let computerScore=0;
let round=0;

const score=document.querySelector('#score');
const result=document.querySelector('#result');
const roundText=document.querySelector('#roundText');

//Player choice
const buttons= document.querySelectorAll('button');
let player;
    
//Computer choice
function getComputerChoice() {
        let x= Math.floor(Math.random()*3); //gives 0,1 or 2
    
        if (x===0) {
            return "rock";
        }
        else if (x===1) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

//Game function
function playGame() {
    const computer=getComputerChoice();//putting it here regenerates computer choice each time 
    console.log("You chose " + player);
    console.log("The computer chose " + computer);

        if (player===computer) {
            result.textContent="It's a tie! Try again."
        }
        else if (player==='rock'&& computer==='scissors' ||
        player=='paper'&&computer=='rock' ||
        player=='scissors'&&computer=='paper') {
            playerScore++;
            result.textContent= "You win! " + player + " beats " + computer
        }
        
        else {
            computerScore++;
            result.textContent= "You lose! " + computer + " beats " + player
        }
    score.textContent="Player: " + playerScore + "  " + "Computer: " + computerScore;
    round++;
    roundText.textContent="Round: " + round;
    console.log(round);
    }

//For each round & limit to 5 rounds 
buttons.forEach((button) => {button.addEventListener ('click', () => {
    player = button.id;

    if (round==5) {
        result.textContent=" ";
        roundText.textContent=" ";
        roundLimit();
        replay();
    }

    else {
        playGame();
    }
    
    });
});

//Result after 5 rounds
function roundLimit() {
    if (computerScore > playerScore) {
            gameResult.textContent= "You lose the game!"
        }
        else if (playerScore > computerScore) {
            gameResult.textContent= "Congratulations, you win the game!"
        }
        else if (playerScore==computerScore) {
            gameResult.textContent= "It's a tie! You & the computer scored the same"
        }
}

//Refresh game
let replayButton;

const playAgain=document.createElement('button');
playAgain.id="playAgain";
playAgain.textContent="Click here to play again."

function replay () {
    if (replayButton!=true) {
    document.body.appendChild(playAgain);
    replayButton= true;
    }

    playAgain.addEventListener('click', ()=> {
        round=0;
        playerScore=0;
        computerScore=0;

        score.textContent="Player: " + playerScore + " " + "Computer: " + computerScore
        result.textContent="Play again! Best of 5 wins"
        roundText.textContent="Round: " + round
        gameResult.textContent= " "

        playAgain.remove();
        replayButton=false;
    });
}