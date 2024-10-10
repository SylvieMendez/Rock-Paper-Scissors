let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; // if no value in score then it goes to default which is ^

updateScoreElement();

/* if (!score) { //same as checking for null since its false
score = {
    wins: 0,
    losses: 0,
    ties: 0
}
} */

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'scissors') {
    result = 'Tie.';
}

} else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
    } else if (computerMove === 'paper') {
    result = 'Tie.';
    } else if (computerMove === 'scissors') {
    result = 'You lose.';
    }

} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie';
    } else if (computerMove === 'paper') {
    result = 'You lose.';
    } else if (computerMove === 'scissors') {
    result = 'You win.';
    }
}

if (result === 'You win.') {
    score.wins += 1;
} else if (result === 'You lose.') {
    score.losses += 1;
} else if (result === 'Tie.') {
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score)); //method to store string in storage

updateScoreElement ();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves').innerHTML = 
    `You <img src="${playerMove}-emoji.png" class="move-icon"> 
    <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function updateScoreElement () {
    document.querySelector('.js-score').innerHTML = 
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    //puts the wins text into the p element to display by selecting button then chnaging html 

}

function pickComputerMove() {
const randomNumber= Math.random();

let computerMove= '';

if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'scissors';}
else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'rock';}
else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'paper';}

return computerMove;
}
